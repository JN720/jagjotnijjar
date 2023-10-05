import { StaticImageData } from "next/image";
import Image from "next/image";
import huglogo from "./assets/huglogo.png";
import pyglogo from "./assets/pyglogo.png";

const skills: number[] = [0, 1];

const skillImages: StaticImageData[] = [huglogo, pyglogo];

const skillNames: string[] = ['Hugging Face Transformers', 'Pytorch Geometric'];

const skillDescs: string[] = [
    'With the goal of learning NLP, one important software to work with is HuggingFace, specifically with the transformers library' +
    ' due to the prominence of transfer learning within the field. Having experience in other Machine Learning frameworks, PyTorch' +
    ' especially, I am learning to use and fine-tune pretrained models to create more effective models not only in NLP, but also in' +
    ' other areas such as vision and audio.',
    'Having done Machine Learning with vision, audio, and currently doing it with natural language processing, I have begun learning' +
    ' Pytorch Geometric in order to extend my current ML skillset into graph-based data and plan to utilize it in future projects.'
];

function listSkill(index: number, size: number) {
    return (
        <div className = "col" key = {"l_" + index}>
            <div className = "card align-items-center align-text-center px-3 h-100 border-2 border-light">
                <Image src = {skillImages[index]} className = "align-self-center mt-2" height = {size} alt = {skillNames[index] + " Logo"}/>
                <div className = "card-body">
                    <h2 className = "card-title text-primary text-center">{skillNames[index]}</h2>
                    <p className = "card-text fs-5 text-light">{skillDescs[index]}</p>
                </div>
            </div>
        </div>
    )
    
}

function Learning(size: number) {
    return <>
        <div className = "align-items-center align-text-center py-5">
            <h1 className = "text-info text-center pb-5">What am I learning?</h1>
            <div className = "container-fluid gap-1 align-text-center">
                <div className = "row">
                    {skills.map(skillId => listSkill(skillId, size))}
                </div>            
            </div>
        </div>
    </>
}
export default Learning;