import React, { useCallback, useEffect, useState } from "react";

function Quote(){
  
  const [quote, setQuote] = useState('');
	const [name, setName] = useState('');
	const [lang, setLang] = useState(localStorage.getItem("lang"));

	let textButton = ""

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

	const fetchData = useCallback(()=> {
		fetch(`https://quotes15.p.rapidapi.com/quotes/random/${lang}`, options)
		.then(response => response.json())
		.then(response => {
			setQuote(response.content),
			setName(response.originator.name);
		})
		.catch(err => console.error(err));
	},[])

	useEffect(() => {
		fetchData()
	}, [])

	if(lang == "?language_code=pt"){
		textButton = "Nova Citação"
	}
	if(lang == "?language_code=en"){
		textButton = "New Quote"
	}
	if(lang == "?language_code=es"){
		textButton = "Nueva Cita"
	}


	return(
		<div className="container">
			<div id="quote-box">
				<div className="quote">
					<h3 id="text">{quote}</h3>
					<p id="author">- {name}</p>
				</div>
				<div className="buttons">
					<div id="buttons">
					<button id="new-quote" onClick={refreshPage}>{textButton}</button>
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