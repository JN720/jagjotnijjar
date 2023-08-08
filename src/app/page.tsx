import Name from "./components/Name";
import About from "./components/About";
import Skills from "./components/Skills";
import Nav from "./components/Nav";
import Learning from "./components/Learning";

function Home() {
  return <>
    {Nav(0)}
    <Name/>
    <About/>
    {Skills(150)}
    {Learning(200)}
  </>
  
}

export default Home;
