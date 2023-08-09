"use client";

import Link from "next/link";
import "./anim.css";
import { useState, useEffect } from 'react';

function KC() {
    const [anim, setAnim] = useState(true);
    useEffect(() => {
        setAnim(false);
    }, []);
    return <>
        <div className = {"container-fluid w-100 h-50 trans-3" + (anim ? " fade left" : "")}>
            <h1 className = "text-primary text-center" style = {{fontSize : 90}}>Kinetic Chance</h1>
            <h1 className = "text-secondary text-center">Multi-Agent Reinforcement Learning with 2D Game Development</h1>
            <div className = "float-start w-75">
                <p className = "text-primary fs-4 px-4">
                    As my current pinnacle of Reinforcement Learning and one of my Game Design ventures, I created an
                    adaptation of a CLI game I made in Python and later ported to C++. Built with machine learning in mind,
                    I utilized PyGame for the game to be compatible as an RL environment. Compared to the original "Chance",
                    "Kinetic Chance" uses 2 dynamically moving players and involves aiming and dodging moves, unlike the
                    original turn-based version. Likewise, the move system is a superset of the former version, with 2
                    contrasting methods to build up moves. As for the Competitive Multi-Agent Reinforcement Learning,
                    I made small adaptations from the base game to create a training environment, where I formulated reward
                    functions based on the environment in order to create 2 agents that track down and perform moves on their
                    opponent.
                </p>
            </div>
            <div className = "float-end w-25">
                <p className = "fs-1 ms-2">The project is on the following links:</p>
                <Link href = "https://replit.com/@JN720/KineticChance" target = "blank" className = "fs-1 text-center ms-2">2 Player Version</Link>
                <div className = "w-100"></div>
                <Link href = "https://github.com/JN720/kineticchance" target = "blank" className = "fs-1 text-center m-2">AI Version on Github</Link>
                
            </div>
        </div>
    </>
}

export default KC;