import React , {useRef , useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import img from '../images/p.png'
import Typed from 'typed.js';
import pdf from '../images/Tushar Gandhi CV.pdf'



const Home = () => {

	 const hello = useRef(null);

	 useEffect(() => {
    const typed = new Typed(hello.current, {
      strings: ['Web Developer', 'Mern Stack ', 'Programmer','Video Editor','Web Designer'],
      typeSpeed: 80,
      backSpeed:80,
      loop:true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

	 function welcome3(){
	 	window.open("https://github.com/tushargandhi-code/")
	 }

	 const download=(url)=>{

	 }

	
	return (
		<div>
		
			<section className = "first flex justify-around items-center mt-24">

			<div className="left    text-4xl font-semibold m-16 ">
			Hi, My name is <span className="text-purple-700"> Tushar Gandhi </span> 
			<div>and I am  a Enthusiastic </div> 
 
			<span  className="text-purple-700" ref={hello} ></span>
			<div className="flex ">	
			<button type="button" onClick={download} className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 border-b-4 border-purple-800 hover:border-purple-600 rounded text-lg mt-3 inline-flex items-center">
      <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <a href={pdf} className="hover:text-white" download="Tushar Gandhi CV.pdf">Download CV</a>
    </button>

     <button type="button" onClick={welcome3} className="bg-purple-600 text-lg mt-3 hover:bg-purple-500 text-white font-bold ml-4 py-2 px-4 border-b-4 border-purple-800 hover:border-purple-600 rounded">
   Github
</button>
			</div>
			</div>

			<div className="right  ">
			<img src={img} alt=""/>
			</div>

			</section>

		
		</div>
	)
}

export default Home