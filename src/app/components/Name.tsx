'use client';

import { useState, useEffect } from "react";
import "./anim.css";


function Name() {
    const [anim, setAnim] = useState(true)
    useEffect(() => {
        setAnim(false);
    }, [])
    return (
        <div className = {"py-4 trans-3" + (anim ? " fade" : "")}>
            <h1 style = {{fontSize : 90}} className = "text-light text-center">Greetings,</h1>
            <h1 style = {{fontSize : 90}} className = "text-light text-center">my name is Jagjot</h1>
        </div>
    )
}

export default Name;