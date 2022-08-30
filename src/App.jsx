import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
// import data from './mock.json'
import axios from 'axios'


const api = axios.create({
	baseURL:"https://sf-final-project.herokuapp.com/api"
}

)


function App() {
	// const initialState = JSON.parse(window.localStorage.getItem('tasks') )|| []
	
	
	// console.log("Initial state is: "+initialState);

	const api = axios.create({
		baseURL:"https://sf-final-project.herokuapp.com/api"
	}
	
	)
	
	const [officers, setOfficers] = useState([]);
	// var persons = [];
	
	useEffect(() => {
		
	api.get('/officers/', {headers:{Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTU3MjBiYzgyOTQxMTNiMWVkM2FmMiIsImlhdCI6MTY2MTg0MTYzOCwiZXhwIjoxNjYyNDQ2NDM4fQ.wn4a0Rr_db8OSRui5DqjmHtjo3GMTnk1aJcWp2Z-i28`}})
		  .then(res => {
			setOfficers(res.data);
			//  console.log("Persons" +persons);
					
		  })
		  .catch(function (error) {
			console.log(error);			
		  })
		  ;
	// const initialState = persons;
	  }, [])

  return (
	<BrowserRouter>
		<div className='wrapper'>
			<Header />
			<Main officers={officers} setOfficers={setOfficers}/>			
			<Footer />
		</div>
	</BrowserRouter>
  )
}

export default App
