"use client";

import "./anim.css";
import { useState, useEffect } from 'react';

function KC() {
    const [anim, setAnim] = useState(true);
    useEffect(() => {
        setAnim(false);
    }, []);
    return (
        <div className = {"container-fluid trans-3" + (anim ? " fade left" : "")}>
            <h1 className = "text-primary text-center" style = {{fontSize : 90}}>Kinetic Chance</h1>
            <h1 className = "text-secondary text-center">Multi-Agent Reinforcement Learning with 2D Game Development</h1>
        </div>
    )
}

export default KC;