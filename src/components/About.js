import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import img from '../images/s.png'
import img1 from '../images/t.png'
import img2 from '../images/m.png'

const About = () => {
	return (
		<div>

			<div className="container my-4">
    <div className="row featurette d-flex justify-content-center align-items-center">
      <div className="col-md-7">
        <div className="text-5xl shadow  font-semibold">WHO AM I ?</div>
        <p className="lead mt-3">I am a talented, ambitious and hardworking individual, with broad skills and experience in both frontend and backend development. Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure. A key strength is communication building strong relationships with people in order to deliver the best results and I used the advice passed on by my supervisors to mentor struggling individuals. </p>
      </div>
      <div className="col-md-5" >
        <img  src="https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/2f/c8/t-tp-1632826094-who-am-i-display-lettering_ver_1.jpg"   alt=""/>
      </div>
    </div>
  </div>

  <div className="container my-4">
    <div className="row featurette d-flex justify-content-center align-items-center">
      <div className="col-md-7 order-md-2">
        <div className="text-5xl shadow  font-semibold">My Education </div>
        <p className="lead mt-3">I have done my schooling from Arunodaya Public School, Delhi. I have done my class 10 on 2019 and got 82&#37; and class 12 on 2021 and got 87&#37;. Currenty I am pursuing Bachelor of Technology (Information Technology) from Guru Gobind Singh Indraprastha University,Delhi. Currently I am in 2nd year and maintaining 9+ CGPA and exploring all fields.</p>
      </div>
      <div className="col-md-5 order-md-1">
        <img  src={img}  alt=""/>
      </div>
    </div>
  </div>

  <div className="container my-4">
    <div className="row featurette d-flex justify-content-center align-items-center">
      <div className="col-md-7">
        <div className="text-5xl shadow  font-semibold">Skills And Passion</div>
        <p className="lead mt-3">I am Familiar with C++, Python and Java Programming Languages. Currently I am exploring Web development. I know html, CSS, Javascript and their some Frameworks Tailwind, Bootstrap and ReactJS . In Backend I know Node js and Express js . I also know Mongodb and Mysql.I can provide clean code and perfect design. I also make the website more &amp; more interactive with web animations. I am also learning DSA and more Logical Approach to Problem Solving</p>
      </div>
      <div className="col-md-5">
         <img  src={img1}   alt=""/>
      </div>
    </div>
  </div>
 
		</div>
	)
}

export default About