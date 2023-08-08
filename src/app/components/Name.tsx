'use client';

import { useState, useEffect } from "react";
import "./Name.css";


function Name() {
    const [anim, setAnim] = useState(true)
    useEffect(() => {
        setAnim(false);
    }, [])
    return (
        <div className = {"card align-items-center py-4" + (anim ? " fade" : "")} style = {{transition : "opacity 300ms"}}>
            <h1 style = {{fontSize : 90}}>Greetings,</h1>
            <h1 style = {{fontSize : 90}}>my name is Jagjot</h1>
        </div>
    )
}

export default Name;