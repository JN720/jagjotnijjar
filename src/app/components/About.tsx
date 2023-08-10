'use client';

import { useState, useEffect } from 'react';
import "./anim.css";

function About() {
    const [anim, setAnim] = useState(true);
    useEffect(() => {
        setAnim(false);
    }, [])
    return (
    <div className = {"w-75 px-4 py-4 trans-5" + (anim ? " fade left": "")}>
        <h1 className = "text-info">Who am I?</h1>
        <p className = "fs-3 text-light">
            I am a Computer Science student and aspiring AI Engineer.
            I build machine learning models and integrate them with other software for an AI-enhanced experience.
            In addition to my best skills, Python for Machine Learning and C++ for academic work, I am familiar
            with a variety of languages and software to incorporate into AI-integrated full-stack development. 
            For instance, this very website was built in React with Bootstrap and calls REST APIs built in Express
            for my models!
        </p>
    </div>
    )
}

export default About;