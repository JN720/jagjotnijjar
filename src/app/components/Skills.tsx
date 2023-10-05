import Image from "next/image"
import { StaticImageData } from "next/image";
import pylogo from "./assets/pylogo.png";
import cpplogo from "./assets/cpplogo.png";
import jslogo from "./assets/jslogo.png";
import javalogo from "./assets/javalogo.png";
import htmllogo from "./assets/htmllogo.png";
import sqllogo from "./assets/sqllogo.png";
import csharplogo from "./assets/csharplogo.png";
import rlogo from "./assets/rlogo.png";
import torchlogo from "./assets/torchlogo.png";
import keraslogo from "./assets/keraslogo.png";
import sklearnlogo from "./assets/sklearnlogo.png";
import flasklogo from "./assets/flasklogo.png";
import expresslogo from "./assets/expresslogo.png";
import reactlogo from "./assets/reactlogo.png";
import gitlogo from "./assets/gitlogo.png";
import awslogo from "./assets/awslogo.png";
import nextlogo from "./assets/nextlogo.png";
import mongologo from "./assets/mongologo.png";
import bslogo from "./assets/bslogo.png";
import falogo from "./assets/falogo.png";
import twlogo from "./assets/twlogo.png";
import azurelogo from "./assets/azurelogo.png";
import gcplogo from "./assets/gcplogo.png";
import redislogo from "./assets/redislogo.png";
import ec from "./assets/ec.png";
import fc from "./assets/fc.png";


const skills: number[][] = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [16, 17, 18, 19],
    [20, 21, 22, 23]
];

const skillNames: string[] = [
    "Python", "C++", "JavaScript", "Java", "HTML", "SQL", "C#", "R", "PyTorch", 
    "Keras", "Sci-Kit Learn", "Flask", "Express", "React", "Git", "Amazon Web Services",
    "Next", "MongoDB", "Bootstrap", "FastAPI", "Tailwind CSS", "Microsoft Azure", 
    "Google Cloud", "Redis"
];

const skillImages: StaticImageData[] = [
    pylogo, cpplogo, jslogo, javalogo, htmllogo, sqllogo, csharplogo, rlogo, torchlogo, 
    keraslogo, sklearnlogo, flasklogo, expresslogo, reactlogo, gitlogo, awslogo, nextlogo,
    mongologo, bslogo, falogo, twlogo, azurelogo, gcplogo, redislogo
];

const skillDescs: string[] = [
    "I have worked with Python for several years and since 2021 have been using it for building Machine Learning models using" +
    " ML frameworks such as PyTorch, Keras, and Sci-Kit Learn as well as Flask for web development.",
    "As my second strongest language, I have extensively used C++ throughout the past 2 years and have applied it in a version" +
    " of my original Chance game as well as throughout my academic coursework.",
    "Behind the first two, Javascript and by extension Typescript as well are also languages I have a strong foundation in." +
    " I used JS throughout high school for my AP Computer Science classes as well as for simple web development. More recently," +
    " I have began learning React to create visually pleasing sites to showcase my other skills and solidify my Full-Stack skills.",
    "I also have a good foundation of Java set to grow significantly in the near future. Though I have used Java back in high school," + 
    " I now utilize it in university coursework. I also plan to learn the Spring framework soon.",
    "While JavaScript is important for the dynamics of webpages, I also have a good grasp of the fundamentals of front-end with" + 
    " HTML. Both with Flask and React, I have applied HTML as the foundation of the website structure.",
    "SQL, particularly MySQL and Postgres, is an essential skill I carry since when it comes to user data and performing AI-powered" +
    " analytics for working with databases is essential. Likewise, my database skills fulfil a component of proper Full-Stack Development.",
    "C# is a language I developed a decent proficiency in beginning a few years ago while working with Unity for Game Development. Though I" +
    " use it less often, it still bolsters my abilities to work in several software paradigms due to its versatility.",
    "Because of the prevalance of statistics in AI and Data Science, I have a moderate proficiency in R as well. In particular, I" +
    " applied it in order to use a bioacoustic analysis library for the old model in my Voice Classification Project.",
    "My strongest and most-used framework is PyTorch. From vision, to audio, to NLP, to Reinforcement Learning, I have a deep understanding" +
    " of PyTorch and have built countless models using it. I have utilized it in virtually every Deep Learning project since I learnt it, and" +
    " plan to continue using it.",
    "Before I learned lower-level Deep Learning with PyTorch, I used Keras. As the fundamentals of my Deep Learning knowledge, my skills with" +
    " Keras have grown in a similar manner to those of PyTorch, likewise with a similar fervor.", 
    "Before I learned Deep Learning, I began with vanilla Machine Learning using Sci-Kit Learn. In particular, I used it as well as Keras at" +
    " Inspirit AI, and used it in multiple smaller preliminary projects there. I also plan to learn XGBoost to gain a stronger proficiency" +
    " with Tree-Based methods, as they can outperform Deep Learning in some cases.", 
    "With Python as my best language, my first AI deployment was, naturally, in Flask. As my first back-end framework, my Flask skills have" +
    " grown more robust as I have dived deeper into back-end development as part of learning Full-Stack.",
    "After learning Flask, I looked into JavaScript back-ends and in making API's, utilized Express. In particular, this website uses Express" +
    " for the API to connect to MongoDB.",
    "Just as important as back-end development is for Full-Stack, I recently began building up my front-end skills with React. I have spent" +
    " significant time working with React lately as to be able to build visually compelling websites and add satisfying interactivity.", 
    "Naturally as a developer, I have worked with Git and specifically used Github repositories for many of my projects. I have also used" +
    " other Git providers like Bitbucket to get a basic grasp of CI/CD, which involves other parts of DevOps I know such as Docker and Kubernetes.", 
    "With the modern prevlance of Cloud Computing, I have developed a foundational proficiency in the cloud using AWS. While I have not yet" +
    " hosted a project using AWS yet for cost reasons, I have practiced with it and am working on getting certified. Likewise, I also" +
    " have learned AWS Sagemaker in particular for cloud-based Machine Learning on top of the other basic services.", 
    "Building on top of my recent experience with React, I have worked with Next to incorporate the base of back-ends in a serverless manner" +
    " and develop in a newer cloud-based approach.", 
    "Since not all databases are strictly relational like SQL, I also know how to work with MongoDB. In particular, this website uses an Express" +
    " API to connect to MongoDB.", 
    "For frontend, I have a good proficiency in Bootstrap to handle making visually appealing websites like this one. Though Bootstrap is" +
    " somewhat limiting in regards to creative styling, I do plan to learn other CSS frameworks such as Tailwind for future front-end endeavors.", 
    "In addition to Express, I also know FastAPI to specialize in developing API's, particularly for my AI models as they use Python frameworks.",
    "Having worked with boostrap, for my current project I am using Tailwind CSS for more fine-tuned styling",
    "Both this website and the project I am working on utilize Microsoft Azure to deploy my ML APIs. Additionally, I have also looked at Azure ML" +
    " and may use it for future projects for larger-scale AI projects.",
    "In addition to Machine Learning APIs, I also redeployed the database management API for this website onto Google Cloud. Having used 3 of the" +
    " largest cloud providers, I now have a stronger general sense of cloud computing as a whole.",
    "In order to improve user experience with performance, I have been using Redis in order to implement database caching. Alongside currently" +
    " working with PostgreSQL for my next project, I am implementing Redis as a caching layer to speed up messages and authentication."
];

function c(n: number) {
    switch (n) {
        case 3:
            return [fc, fc, fc, ec, ec];
        case 4:
            return [fc, fc, fc, fc, ec];
        case 5:
            return [fc, fc, fc, fc, fc];
    }
    return [ec, ec, ec, ec, ec]
}

/*var skillProfs: StaticImageData[][] = [
    c(5), c(5), c(4), c(4), c(4), c(4), c(3), c(3), c(5), c(5), c(4), c(5), c(4), c(3), c(5), c(3), c(3), c(3), c(3), c(3)
];
*/

const skillProfs = [
    5, 5, 5, 4, 4, 5, 3, 3, 5, 5, 4, 5, 4, 4, 3, 3, 4, 3, 3, 5, 3, 3, 3, 3
]

function skillCircle(index: number, size: number) {
    return <div className = "hstack gap-1 mx-auto pb-3">
        <Image className = "float-start" src = {c(skillProfs[index])[0]} height = {size} alt = "*"/>
        <Image className = "float-start" src = {c(skillProfs[index])[1]} height = {size} alt = "*"/>
        <Image className = "float-start" src = {c(skillProfs[index])[2]} height = {size} alt = "*"/>
        <Image className = "float-start" src = {c(skillProfs[index])[3]} height = {size} alt = "*"/>
        <Image className = "float-start" src = {c(skillProfs[index])[4]} height = {size} alt = "*"/>
    </div>
}

function listSkill(index: number, size: number) {
    return <>
        <div className = {"bg-less-dark card align-items-center align-text-center px-3 h-100 border-2" + (skillProfs[index] == 5 ? " border-primary" : " border-light")}>
            <Image src = {skillImages[index]} className = {"align-self-center mt-2"} height = {size} alt = {skillNames[index] + " Logo"}/>
            <div className = "card-body">
                <h2 className = "card-title text-primary text-center">{skillNames[index]}</h2>
                <p className = "card-text fs-5 text-center text-light">{skillDescs[index]}</p>
            </div>
            {skillCircle(index, 40)}
        </div>
    </>
    
}

function Skills(size: number) {
    return <>
        <div className = "align-items-center align-text-center pt-5">
            <h1 className = "text-info text-center pb-5">What do I know?</h1>
            <div className = "container-fluid gap-1 align-text-center">
                {skills.map(skillset => {
                    return <div className = "row" key = {`r_${skillset[0]}`}>
                    {skillset.map(skillId => {
                        return <div className = "col mb-3" key = {`e_${skillId}`}>
                            {listSkill(skillId, size)}
                        </div>
                    })}
                    </div>
                })}
                        
            </div>            
        </div>
        
    </>
}

export default Skills;