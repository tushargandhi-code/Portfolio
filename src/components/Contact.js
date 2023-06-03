import React ,{useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const click = (e)=>{
		e.preventDefault();
		setName('')
		setEmail('')
		setMessage('')
		alert("Submit Successfully !!")

}

	
	return (
		<div>
			
		    <form onSubmit={click}>
		    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="text-4xl sm:text-4xl font-extrabold title-font mb-4 text-gray-700">Get In <span className="text-purple-600">Touch</span></h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" value={name} onChange={(e) =>setName(e.target.value)} placeholder="Enter your name" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email"  className="leading-7 text-sm text-gray-600">Email</label>
            <input   placeholder="abc@gmail.com" value={email} onChange={(e) =>setEmail(e.target.value)}type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>

          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" value={message} onChange={(e) =>setMessage(e.target.value)} placeholder="Type your message here" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
            <div className="flex items-center mb-4 mt-2">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium  text-gray-600  ">I want you to work on a project with me</label>
</div>
          </div>
        </div>

        <div className="p-2 w-full">
          <button type="submit"  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">tushargandhi634@gmail.com</a>
          <p className="leading-normal my-5">New Delhi.
            <br/>Krishna Nagar, 110051
          </p>
            
        </div>

      </div>
    </div>
  </div>
</section>
</form>
		    
		</div>
	)
}

export default Contact