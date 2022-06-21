import React, { useEffect, useState } from "react";
import { SiTwitter } from 'react-icons/si'

function Quote(){
  
  const [quote, setQuote] = useState();
	const [name, setName] = useState();
	const [lang, setLang] = useState(localStorage.getItem("lang"));	

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0c6ad1554dmsh9631bb0ae668e14p1da093jsn96e4166eae15',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	  }
  };

	const refreshPage = ()=>{
		window.location.reload();
 }

 function handleLang(e){
	 setLang(e)
	 localStorage.setItem('lang', `${e}`)
	 window.location.reload();
 }

	useEffect(() => {
  	fetch(`https://quotes15.p.rapidapi.com/quotes/random/${lang}`, options)
		.then(response => response.json())
		.then(response => {
			setQuote(response.content), 
			setName(response.originator.name)
			console.log(localStorage.getItem("lang"))
		})
		.catch(err => console.error(err));
	},[])


	return(
		<div className="container">
			<div id="quote-box">
				<div className="quote">
					<h3 id="text">{quote}</h3>
					<p id="author">- {name}</p>
				</div>
				<div className="buttons">
					<div id="buttons">
					<button id="new-quote" onClick={refreshPage}> New Quote</button>
					</div>
					<div>
					<button onClick={() => handleLang("?language_code=pt")} id="pt"></button>
					<button onClick={() => handleLang("?language_code=en")} id="en"></button>
					<button onClick={() => handleLang("?language_code=es")} id="es"></button>
					</div>
				</div>
			</div>
		</div>
	)

}

export default Quote;