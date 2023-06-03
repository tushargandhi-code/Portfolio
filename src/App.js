import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Project from './components/Project';
import About from './components/About';
import Footer from './components/Footer';
import Top from './components/Top';
import React , {useState , useRef} from 'react'



function App() {
 const home = useRef();
  const about = useRef();
  const project = useRef();
  const contact = useRef();

  const scrollHandler = (eleRef) =>{
    window.scrollTo({ top:eleRef.current.offsetTop, behaviour:"smooth"});
  };

  function hide(){
    alert("hlo")
  }


  return (
    <>
    <Navbar data = {() =>{scrollHandler(home)}} data1 = {() =>{scrollHandler(about)}} data2 = {() =>{scrollHandler(project)}} data3 = {() =>{scrollHandler(contact)}}  />

    <div ref={home} >
   <Home/>
   </div>
   <hr ref={about} className="my-4 mx-10 text-purple-600"/>

   <div >
   
   <h1 className="about flex justify-center text-cyan-900 mb-10 font-bold text-6xl">About</h1>
   <About/>
   </div>
    <hr ref={project} className="my-4 mx-10 text-purple-600"/>
    

     <div >
     
     <h1 className="about flex justify-center text-cyan-900  font-bold text-6xl">Project</h1>
   <Project/>
   </div>
   <hr ref={contact} className=" mx-10 text-purple-600"/>

   <div >
   
   <h1 className="about flex justify-center text-cyan-900 mt-4 font-bold text-6xl">Contact me</h1>
   <Contact/>
   </div>
   <Top/>
   <hr className=" mx-10 text-purple-600"/>
  
   <div>
   <Footer/>
   </div>

    </>  
  );
}

export default App;
