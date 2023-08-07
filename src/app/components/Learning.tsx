import { StaticImageData } from "next/image";
import Image from "next/image";
import huglogo from "./assets/huglogo.png";
import langlogo from "./assets/langlogo.png";

const skills: number[] = [0, 1];

const skillImages: StaticImageData[] = [huglogo, langlogo];

const skillNames: string[] = ['Hugging Face Transformers', 'LangChain'];

const skillDescs: string[] = [
    'With the goal of learning NLP, one important software to work with is HuggingFace, specifically with the transformers library' +
    ' due to the prominence of transfer learning within the field. Having experience in other Machine Learning frameworks, PyTorch ' +
    ' especially, I am learning to use and fine-tune pretrained models to create more effective models not only in NLP, but also in' +
    ' other areas such as vision and audio.',
    'For NLP, another powerful tool I am learning is LangChain. While a single LLM can be powerful, I want to also be able to work' +
    ' with chains of LLMs to produce far more advanced results. Currently, I am planning to take a high-performant uncensored LLM' +
    ' and fine-tune my own censoring LLM to revise the responses, composing a chain of 2 lightweight LLMs for superior performance.'
];

function listSkill(index: number, size: number) {
    return (
        <div className = "col" key = {"l_" + index}>
            <div className = "card align-items-center align-text-center px-3 h-100 border-2">
                <Image src = {skillImages[index]} className = "align-self-center mt-2" height = {size} alt = {skillNames[index] + " Logo"}/>
                <div className = "card-body">
                    <h2 className = "card-title text-primary text-center">{skillNames[index]}</h2>
                    <p className = "card-text fs-5">{skillDescs[index]}</p>
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