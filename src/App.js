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
	const [officers, setOfficers] = useState([]);
	var persons = [];
	
	useEffect(() => {
		
	api.get('/officers/', {headers:{Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTU3MjBiYzgyOTQxMTNiMWVkM2FmMiIsImlhdCI6MTY2MDU3MzkyMSwiZXhwIjoxNjYxMTc4NzIxfQ.rY1JGqWgH-0gDoWcly1DcGzSTfjtmAh0rJfKsH9hQ94`}})
		  .then(res => {
			 persons = res.data;
			 console.log(persons)
					
		  })
		  .catch(function (error) {
			console.log(error);			
		  })
		  ;
	const initialState = persons;
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
