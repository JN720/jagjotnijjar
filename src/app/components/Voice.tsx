"use client";
import { useState, useRef } from "react";
const axios = require('axios');

function Prediction(pred: string) {
    if (!pred) {
        return;
    }
    if (pred === "Short") {
        return <h2 className = "text-warning text-start ms-2">The audio you have recorded is too short, it should be at least about 4 seconds.</h2>
    }
    if (pred === "Incompatible") {
        return <h2 className = "text-warning text-start ms-2">It seems your browser is not compatible with the recorder, consider using Firefox.</h2>
    }
    if (pred === "NoPerm") {
        return <h2 className = "text-warning text-start ms-2">The website requires microphone permission to record.</h2>
    }
    if (pred === "Error") {
        return <h2 className = "text-danger text-start ms-2">An error occured; the server is likely down.</h2>
    }
    if (pred === "Null") {
        return <h2 className = "text-warning text-start ms-2">You must record the audio to make a prediction.</h2>
    }
    return <h2 className = "text-success text-start ms-2">Prediction: {pred}</h2>
}

function Predicting(p: boolean) {
    if (!p) {
        return;
    }
    return <div className = "spinner-border text-primary" role="status">
            <span className = "visually-hidden">Loading...</span>
        </div>
}

async function predict(audio: Blob) {
    if (audio == null) {
        return "";
    }
    const formData = new FormData();
    const file = new File([audio], 'audio.ogg', { type: 'audio/ogg' });
    formData.append("audio", file, file.name);
    try {
        return axios.post("https://main--letter-voice-api.netlify.app/voice", formData);
    } catch {
        return "Error";
    }
}


function Voice() {
    const [permission, setPermission] = useState(false);
    const [audio, setAudio] = useState(null);
    const [prediction, setPrediction] = useState("")
    const [loading, setLoading] = useState(false);
    const [recording, setRecording] = useState(false);
    const [canPredict, setCanPredict] = useState(false);
    const recorder: any = useRef(null);
    
    async function handlePermission() {
        if ("MediaRecorder" in window) {
            try {
                const audioData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                }).then((stream) => {setPermission(true); return stream;});
                try {
                    recorder.current = new MediaRecorder(audioData, {mimeType : "audio/ogg", audioBitsPerSecond : 44100});
                } catch {
                    setPrediction("Incompatible")
                }
            } catch {
                setPrediction("NoPerm");
                setPermission(false);
            }
        } else {
            alert("Your browser does not support MediaRecorder, which this website uses to record audio for the classifier. It would be recommended to try a different one.");
        }
    }
 
    async function handleBeginRecord() {
        if (!permission) {
            handlePermission();
            if (!permission) {
                return;
            }
        }
        try {
            setRecording(true);
            recorder.current.start();
            recorder.current.ondataavailable = (e: any) => {
                if (typeof e.data === "undefined") return;
                if (e.data.size === 0) return;
                setAudio(e.data);
            };
        } catch {
            setPrediction("Incompatible")
            setRecording(false);
            
        }
    }

    async function handleEndRecord() {
        await recorder.current.stop();
        setRecording(false);
        setCanPredict(true);
    }

    function handleClick(audio: Blob | null) {
        setLoading(true);
        if (audio == null) {
            setPrediction("Null")
        } else {
            predict(audio).then((res: any) => {setLoading(false); setPrediction(res.data.message);}).catch(() => setPrediction("Error"));
        }
        
    }
    return <>
        <div className = "container-fluid w-100">
            <h1 className = "text-primary text-center" style = {{fontSize : 90}}>Voice Classification</h1>
            <h1 className = "text-secondary text-center">Spectral Analysis and Bioacoustics using Deep Learning</h1>
        </div>
        <div className = "container float-start w-50 h-50">
            {!recording ? (<button className = "btn btn-outline-info m-2" onClick = {() => handleBeginRecord()}>Begin Recording</button>) : null}
            {(permission && recording) ? (<button className = "btn btn-outline-danger m-2" onClick = {() => handleEndRecord()}>End Recording</button>) : null}
            {canPredict ? (<button className = "btn btn-outline-success m-2" onClick = {() => handleClick(audio)}>Predict</button>) : null}
            {Predicting(loading)}
            <div className = "container w-50"></div>
            {audio ? (<audio className = "m-2" src = {URL.createObjectURL(audio)} controls/>) : null}
            {Prediction(prediction)}
        </div>
        <div className = "container float-start w-50 h-50">
            <p className = "text-primary fs-4">
                As my first venture into audio-based machine learning, I built this classifier to recognize voice audio 
                and attempt to discern the gender of the speaker. The first model employs a Mel Spectrogram in order to
                create a 2D representation of the audio frequencies, which is fed into a convolutional neural network.
                The second utilizes the WarbleR library, which has function to obtain various frequency analysis metrics
                which are then fed into a standard feed-forward network.
            </p>
        </div>
    </>
}

export default Voice;