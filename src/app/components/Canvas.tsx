import { useState, useRef } from 'react';
const axios = require('axios');

async function predict(img: File | null) {
    if (img == null) {
        return "";
    }
    const formData = new FormData();
    formData.append("image", img, "image.png");
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
        return <h2 className = "text-warning text-start ms-2">Please try again.</h2>
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

function Canvas() {
    const [pred, setPrediction] = useState("");
    const [loading, setLoading] = useState(false);
    const canvasRef = useRef(null);

    let clicked = false;

    function handleMouseMove(e: any) {
        if (!canvasRef.current || !clicked) return;
        const canvas: any = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const x = e.clientX - ctx.canvas.getBoundingClientRect().left;
        const y = e.clientY - ctx.canvas.getBoundingClientRect().top;
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
    }

    function clear(e: any) {
        if (!canvasRef.current) return;
        const canvas: any = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 300, 300);
    }

    function handleClick() {
        setLoading(true);
        const canvas: any = canvasRef.current;
        let image: File | undefined;
        canvas.toBlob((blob: Blob) => {
            image = new File([blob], "image.png", { type: "image/png" })
            if (image == null || image == undefined) {
                setPrediction("Null");
                setLoading(false);
            } else {
                predict(image).then((res: any) => {setLoading(false); setPrediction(res.data.message);}).catch(() => {setPrediction("Error"); setLoading(false);});
            }
        }, 'image/png');
    }

    return <>
        <h2 className = "text-primary m-2">You can upload a file above or use the mouse to draw in the HTML canvas.</h2>
        <button className = "btn btn-outline-warning m-2 fs-3" onClick = {(e) => clear(e)}>Clear</button>
        <button className = "btn btn-outline-success m-2 fs-3" onClick = {() => handleClick()}>Predict</button>
        {Predicting(loading)}
        {Prediction(pred)}
        <canvas className = "border-2 border-primary float-start m-2" ref = {canvasRef} width = "300" height = "300" style = {{border: "3px solid"}}
            onMouseMove = {(e) => handleMouseMove(e)}
            onMouseDown = {() => {clicked = true;}}
            onMouseUp = {() => {clicked = false;}}>
        </canvas>
    </>
}

export default Canvas;