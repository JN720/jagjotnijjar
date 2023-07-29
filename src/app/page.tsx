import Name from "./components/Name";
import About from "./components/About";
import Skills from "./components/Skills";
import Nav from "./components/Nav";

function Home() {
  return <>
    {Nav(0)}
    {Name(90)}
    <About/>
    {Skills(150)}
  </>
  
}

export default Home;
