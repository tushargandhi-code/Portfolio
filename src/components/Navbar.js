import React , {useState , useRef} from 'react'
// import {NavLink} from 'react-router-dom';
import {FaBars , FaTimes} from "react-icons/fa";


const Navbar = (props) => {

  


  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);
  return (

    <div className = "flex justify-between items-center p-4 nav ">
    <a to = "/">

    <h1 className="text-4xl hover:text-white hover:font-extrabold ">Portfolio.</h1>

    </a>  

    <ul className = {click ? "nav-menu active" : "nav-menu"}  >



    <li> <a onClick={props.data}   className="p-4 text-xl font-medium hover:cursor-pointer hover:text-white hover:font-extrabold "> Home </a></li>
    <li> <a onClick={props.data1}  className="p-4 text-xl font-medium hover:cursor-pointer  hover:text-white hover:font-extrabold "> About </a></li>
    <li> <a onClick={props.data2} className="p-4 text-xl font-medium hover:cursor-pointer hover:text-white hover:font-extrabold "> Project </a></li>
    <li> <a onClick={props.data3}  className="p-4 text-xl font-medium hover:cursor-pointer hover:text-white hover:font-extrabold "> Contact me</a></li>
    </ul>

    <div className="hamb " onClick = {handleclick}>
    {click ? (<FaTimes size={20} style={{color:"#fff"}} />) : ( <FaBars size={20} style={{color:"#fff"}} />)}
    

    </div>
      
    </div>
    
  )
}

export default Navbar