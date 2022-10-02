import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
// import data from './mock.json'
import axios from 'axios'


// const api = axios.create({
// 	baseURL:"https://sf-final-project.herokuapp.com/api"
// }

// )


function App() {
	// const initialState = JSON.parse(window.localStorage.getItem('tasks') )|| []
	
	
	// console.log("Initial state is: "+initialState);

	const api = axios.create({
		baseURL:"https://sf-final-project.herokuapp.com/api"
	}
	
	)
	
	const [officers, setOfficers] = useState([]);

	const [cases, setCases] = useState([]);

	// const [resourceType, setResourceTypes] = useState('officers');

	// const [items, setItems] = useState([]);
	
	
	useEffect(() => {
		
	api.get(`/officers/`, {headers:{Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzlkZTZkM2E2NWMyMDVkOGQyYTk4OCIsImlhdCI6MTY2NDczNjkwNywiZXhwIjoxNjY1MzQxNzA3fQ.lp5F3J8Ck1jD127i3uNVRFq5nd1QNqAEXGA2iitggd4`}})
		  .then(res => {
			setOfficers(res.data);
			//  console.log("Persons" +persons);
					
		  })
		  .catch(function (error) {
			console.log(error);			
		  })
		  ;
	
	  }, [])

	  useEffect(() => {
		
		api.get('/cases/', {headers:{Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzlkZTZkM2E2NWMyMDVkOGQyYTk4OCIsImlhdCI6MTY2NDczNjkwNywiZXhwIjoxNjY1MzQxNzA3fQ.lp5F3J8Ck1jD127i3uNVRFq5nd1QNqAEXGA2iitggd4`}})
			  .then(res => {
				setCases(res.data);
				//  console.log("Persons" +persons);
						
			  })
			  .catch(function (error) {
				console.log(error);			
			  })
			  ;
		
		  }, [])

  return (
	<BrowserRouter>
		<div className='wrapper'>
			<Header />
			<Main officers={officers} setOfficers={setOfficers} cases={cases} setCases={setCases}/>			

			{/* <Main resourceType={resource}/> */}
			<Footer />
		</div>
	</BrowserRouter>
  )
}

export default App
