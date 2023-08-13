import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import img4 from '../images/a.png'
import img5 from '../images/f.jpg'
import img6 from '../images/z.png'
import img7 from '../images/y.jpg'


const Project = () => {

	function welcome(){
		window.open("https://tushargandhi-code.github.io/Textutils-React/")
	}

	function welcome2(){
		window.open("https://tushargandhi-code.github.io/Blog-SmartCoder/")
	}

	function welcome3(){
		window.open("https://www.youtube.com")
	}
    function welcome4(){
		window.open("https://tushargandhi-code.github.io/NewDoor/")
	}
	return (
		<div>

		

		<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-purple-600 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={img4} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Text - Editor</h1>
            <p className="leading-relaxed mb-3">A text editor which helps to convert characters into uppercase and lowercase and to count no. of characters present.</p>
            <div className="flex items-center flex-wrap ">
              
              <button type="button" onClick={welcome} className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 border-b-4 border-purple-800 hover:border-purple-600 rounded">
  Visit Website
</button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-purple-600 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={img5} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Programming - Blog</h1>
            <p className="leading-relaxed mb-3">A programming blog which will attract you towards programming , coding , designing , networking and many more.</p>
            <div className="flex items-center flex-wrap">
              <button type="button" onClick={welcome2} className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 border-b-4 border-purple-800 hover:border-purple-600 rounded">
  Visit Website
</button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-purple-600 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={img6} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">TODO - Mern App</h1>
            <p className="leading-relaxed mb-3">It is basically a TODO app which was developed using both backend and frontend frameworks and Mongodb.</p>
            <div className="flex items-center flex-wrap ">
              <button type="button" onClick={welcome3} className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 border-b-4 border-purple-800 hover:border-purple-600 rounded">
  Visit Website
</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 -mt-32">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-purple-600 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={img7} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">NewDoor - Real Estate</h1>
            <p className="leading-relaxed mb-3">Real estate is considered real property that includes land and anything permanently attached to it or built on it, whether natural or man-made</p>
            <div className="flex items-center flex-wrap ">
              
              <button type="button" onClick={welcome4} className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 border-b-4 border-purple-800 hover:border-purple-600 rounded">
  Visit Website
</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  
</section>

		
			
		</div>
	)
}

export default Project
