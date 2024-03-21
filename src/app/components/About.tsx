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
            I am a Computer Science student and aspiring AI & Software Engineer.
            I build machine learning models and integrate them with software appications for an AI-enhanced experience.
            While Python is my favorite, I am familiar with a variety of languages and technologies to incorporate 
            into AI-integrated Full-Stack development. For instance, this very website was built in React with Bootstrap
            and calls REST APIs for my models! I also have learned a lot since I first built this site and want
            to revamp it eventually. 
        </p>
    </div>
    )
}

export default About;