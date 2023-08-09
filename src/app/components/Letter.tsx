"use client";

import Canvas from "./Canvas";
import { useState, useRef, useEffect } from "react";
const axios = require('axios');

async function predict(img: File | null) {
    if (img == null) {
        return "";
    }
    const formData = new FormData();
    formData.append("image", img, img.name);
    try {
        axios.post("https://upheld-modem-395202.wl.r.appspot.com/letter", formData)
        return axios.post("https://lettervoiceapis.azurewebsites.net/letter", formData);
    } catch {
        return "Error";
    }
}

function Prediction(pred: string) {
    if (!pred) {
        return ""
    }
    if (pred === "Error") {
        return <h2 className = "text-danger text-start ms-2">An error occured; the server is likely down.</h2>
    }
    if (pred === "Null") {
        return <h2 className = "text-warning text-start ms-2">You must specify a file.</h2>
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


function Letter() {
    const [image, setImage] = useState<File | null | undefined>(null);
    const [pred, setPrediction] = useState("");
    const [loading, setLoading] = useState(false);

    function handleClick() {
        setLoading(true);
        if (image == null || image == undefined) {
            setPrediction("Null");
            setLoading(false);
        } else {
            predict(image).then((res: any) => {setLoading(false); setPrediction(res.data.message);}).catch(() => {setPrediction("Error"); setLoading(false);});
        }
    }
    return <>
        <div className = "container">
            <h1 className = "text-primary text-center" style = {{fontSize : 100}}>Handwritten Letter Detection</h1>
            <h1 className = "text-secondary text-center">Computer Vision and Full-Stack AI Deployment</h1>
            <div className = "container w-50 h-50 float-start">
                <p className = "text-primary fs-4">
                    This project is a revamp of an earlier Keras model, now made in PyTorch. Originally, the project used Flask and standard HTML in Jinja 
                    templates, however in the current rendition, it runs using Next.js with React. The inference endpoint is deployed on a FastAPI server 
                    hosted on Microsoft Azure and an Express.js API hosted on AWS is hooked up to MongoDB to store all images used on this website for 
                    future analytics purposes.
                </p>
            </div>
            <div className = "container w-50 h-50 float-end">
                <input className = "btn btn-outline-secondary m-2 fs-3" type = "file" name = "image" accept = "image/png" onChange = {(e) => {
                    e.preventDefault();
                    setImage(e.target.files?.item(0));
                }}/>
                <button className = "btn btn-outline-success m-2 fs-3" onClick = {() => handleClick()}>Predict</button>
                {Predicting(loading)}
                {Prediction(pred)}
                <div className = "w-100"></div>
                <Canvas/>
            </div>
            
        </div>
    </>
}

export default Letter;