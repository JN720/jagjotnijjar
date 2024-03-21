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
import huglogo from "./assets/huglogo.png";
import gologo from "./assets/gologo.png";
import ginlogo from "./assets/ginlogo.png";
import kotlinlogo from "./assets/kotlinlogo.svg";
import ec from "./assets/ec.png";
import fc from "./assets/fc.png";


const skills: number[][] = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [16, 17, 18, 19],
    [20, 21, 22, 23],
    [24, 25, 26, 27]
];

const skillNames: string[] = [
    "Python", "C++", "JavaScript", "Java", "HTML", "SQL", "C#", "R", "PyTorch", 
    "Keras", "Sci-Kit Learn", "Flask", "Express", "React", "Git", "Amazon Web Services",
    "Next", "MongoDB", "Bootstrap", "FastAPI", "Tailwind CSS", "Microsoft Azure", 
    "Google Cloud", "Redis", "HuggingFace", "Go", "Gin", "Kotlin"
];

const skillImages: StaticImageData[] = [
    pylogo, cpplogo, jslogo, javalogo, htmllogo, sqllogo, csharplogo, rlogo, torchlogo, 
    keraslogo, sklearnlogo, flasklogo, expresslogo, reactlogo, gitlogo, awslogo, nextlogo,
    mongologo, bslogo, falogo, twlogo, azurelogo, gcplogo, redislogo, huglogo, gologo,
    ginlogo, kotlinlogo
];

const skillDescs: string[] = [
    "I have worked with Python for several years and since 2021 have been using it for building Machine Learning models using" +
    " ML frameworks such as PyTorch, Keras, and Sci-Kit Learn as well as Flask and FastAPI for web development." + 
    " Python is my go-to language for everything from scientific computing to web development.",
    "As another strong language, I have extensively used C++ throughout the past 3 years and have applied it in a version" +
    " of my original Chance game as well as throughout my academic coursework. Learning C++ has significantly bolstered" + 
    " my knowledge of lower-level computation and of optimizing performance.",
    "Behind the first two, Javascript and by extension Typescript as well are also languages I have a strong foundation in." +
    " I used JS throughout high school for my AP Computer Science classes as well as for simple web development. More recently," +
    " I have used frameworks such as React and Express to create interactive applications to solidify my Full-Stack skills.",
    "I also have a robust foundation of Java that I have recently been cultivating. Having first used Java back in high school," + 
    " I used it for university coursework a little while ago. More recently, however, I have been learning about Kotlin and Spring.",
    "While JavaScript is important for the dynamics of webpages, I also have a good grasp of the fundamentals of front-end with" + 
    " HTML. Both with Flask and React, I have applied HTML as the foundation of the website structure.",
    "SQL, initially MySQL and now primarily Postgres, is my best way of working with databases. From data analytics to" +
    " storing user and application data, learning SQL has enabled me to fulfill an essential component of Full-Stack Development." + 
    " On top of that, the relational algebra has helped me understand other database technologies more strongly.",
    "C# is a language I first developed a decent proficiency with in high school from using Unity for Game Development. Since then," +
    " I am now using it with ASP.NET Core for the backend in my Notes project alongside learning some of the .NET technologies" + 
    " such as SignalR and Entity Framework Core.",
    "Because of the prevalance of statistics in AI and Data Science, I have some basic proficiency in R as well. In particular, I" +
    " applied it in order to use a bio-acoustic analysis library for the old model in my Voice Classification Project." + 
    " I have also lightly used it in an academic context.",
    "One of my most-used frameworks is PyTorch. From vision, to audio, to NLP, to Reinforcement Learning, I have a deep understanding" +
    " of PyTorch and have built countless models using it. I have utilized it in virtually every Deep Learning project since I learnt it and" +
    " even used it regularly in one of my internships. ",
    "Before I learned lower-level Deep Learning with PyTorch, I used Keras. As the fundamentals of my Deep Learning knowledge, my skills with" +
    " Keras have grown in a similar manner to those of PyTorch, likewise with a similar fervor.", 
    "Before I learned Deep Learning, I began with vanilla Machine Learning using Sci-Kit Learn. In particular, I used it as well as Keras at" +
    " Inspirit AI, and used it in multiple smaller preliminary projects there. I also plan to learn XGBoost to gain a stronger proficiency" +
    " with Tree-Based methods, as they can outperform Deep Learning in some cases.", 
    "With Python as my best language, my first AI deployment was, naturally, in Flask. As my first backend framework, my Flask skills have" +
    " grown more robust as I have dived deeper into backend development as part of learning Full-Stack.",
    "After learning Flask, I looked into JavaScript backends and in making APIs, utilized Express. In particular, this website uses Express" +
    " for the API to perform operations in MongoDB.",
    "Just as important as backend development is for Full-Stack, I began building up my frontend skills with React. I have spent" +
    " significant time working with React to be able to build satisfying interactivity. Additionally, I also did a quick dive" +
    " into React Native for my Social Media project and am using a similar signals-based framework called Solid for my Notes project.", 
    "Naturally as a developer, I have worked with Git and specifically used Github repositories for many of my projects. I have also used" +
    " other Git providers like Bitbucket to get a basic grasp of CI/CD, which involves other parts of DevOps I have some basic knowledge of.", 
    "With the modern prevlance of Cloud Computing, I have developed a foundational proficiency in the cloud using AWS. I have" +
    " hosted a variety of projects and have used EC2, ECS, RDS, S3, Cognito, and more. I also plan to try others such as DynamoDB and Lambda" +
    " and plan to use Sagemaker sometime. However, due to the costs, I generally avoid keeping things on long-term on cloud platforms.", 
    "Building on top of my experience with React, I have worked with Next to incorporate the base of backends in a serverless manner" +
    " and develop in a newer cloud-based approach.", 
    "Since not all databases are strictly relational like SQL, I also know how to work with MongoDB. In particular, this website uses an Express" +
    " API to connect to MongoDB. Furthermore, I also used it in one of my internshipsas the primary database.", 
    "For frontend, I began with Bootstrap to handle making visually appealing websites like this one. Since Bootstrap is" +
    " somewhat limiting in regards to creative styling, I have also used CSS frameworks such as Tailwind more recently.", 
    "In addition to Express, I also know FastAPI to specialize in developing backends, particularly for my AI models as they use Python frameworks.",
    "Having worked with Bootstrap for this website, I have utilized Tailwind CSS for more fine-tuned styling on my more recent projects.",
    "Both this website and the AI Chat project utilize Microsoft Azure to deploy my ML APIs. Additionally, I plan to use Azure's authentication" +
    " and ML services for larger-scale software and AI projects.",
    "In addition to Machine Learning APIs, I also redeployed the database management API for this website onto Google Cloud. Having used 3 of the" +
    " largest cloud providers, I also have a stronger general sense of cloud computing as a whole.",
    "In order to improve user experience with performance, I have used Redis in order to implement database caching. Alongside having used" +
    " it with PostgreSQL for my AI Chat project, I integrated Redis as a caching layer to speed up messages and information retrieval.",
    "For NLP, and especially generative AI, I use HuggingFace, specifically with the transformers library. Beyond being able to utilize" +
    " LLM's and perform fine-tuning, knowing it complements my knowledge in other AI technologies.",
    "For the E-Commerce Simulator project, I spent some time learning Go, particularly for backend development. Rather than relying solely" +
    " on JavaScript or Python for many tasks, I am also now familiar with Go for more performance-demanding situations.",
    "In order to use Go for APIs, I became familiar with the Gin framework in order to more effectively create complex API" +
    " routes, as I did with the E-Commerce project's backend.",
    "For my chat application project I am currently planning, I have learned the basics of Kotlin and plan to use it for the backend" +
    " alongside Spring. At some point in the future, I may try Android development with Kotlin as well."
];

function c(n: number) {
    switch (n) {
        case 2:
            return [fc, fc, ec, ec, ec];
        case 3:
            return [fc, fc, fc, ec, ec];
        case 4:
            return [fc, fc, fc, fc, ec];
        case 5:
            return [fc, fc, fc, fc, fc];
    }
    return [ec, ec, ec, ec, ec]
}

const skillProfs = [
    5, 5, 5, 4, 4, 5, 3, 2, 5, 5, 4, 5, 4, 4, 3, 3, 4, 3, 3, 5, 3, 3, 3, 3, 3, 3, 2, 2
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