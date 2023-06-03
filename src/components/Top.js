import React ,{useEffect , useState} from 'react'
import { FaArrowUp } from 'react-icons/fa';

const Top = () => {

	const [visible, setvisible] = useState(false);

    const up =()=>{
    	window.scrollTo({ top:0 , left:0 , behaviour:"smooth"})
    }

    const listen =()=>{
    	let height = 500;
    	const winscroll= document.body.scrollTop || document.documentElement.scrollTop
    	if( winscroll > height ){

    		setvisible(true)

    	}
    	else{

    		setvisible(false)

    	}

    }


	useEffect(() => {
		window.addEventListener("scroll", listen)
	}, [])
	return (
		<div>
		{visible &&
			<div className="btn hover:bg-purple-700 hover:text-white" onClick={up}>
			<FaArrowUp className="btn--icon"/>
			</div>
		}
		</div>
	)
}

export default Top