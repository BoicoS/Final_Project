import { Switch, Route, Routes, BrowserRouter } from 'react-router-dom'
import css from './Main.module.css'
import Board from '../board/Board'
// import TaskDetail from '../task-detail/TaskDetail'
import Associates from '../associates/Associates'
import TheftAnnounce from '../theftannounce/TheftAnnounce'
import TheftCases from '../theftcases/TheftCases'
import Login from '../Login/Login'
import AssociateDetail from '../associates/AssociateDetail'
import React from 'react'

// import axios from 'axios'

// const api = axios.create({
// 	baseURL:"https://sf-final-project.herokuapp.com/api"
// }

// )

// const persons = [];
// api.get('/officers/', {headers:{Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTU3MjBiYzgyOTQxMTNiMWVkM2FmMiIsImlhdCI6MTY2MDQxNTEwMywiZXhwIjoxNjYxMDE5OTAzfQ.3BrsE3OzyfauKWHg_9Zw_DVgFDmKeAbpdFqPnISbPNI`}})
// 		  .then(res => {
// 			persons = res.data;
// 			// this.setState({ persons });
// 		  })



const Main = (props) => {	
	
	//   componentDidMount() {
	// 	api.get('/officers/', {headers:{Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTU3MjBiYzgyOTQxMTNiMWVkM2FmMiIsImlhdCI6MTY2MDQxNTEwMywiZXhwIjoxNjYxMDE5OTAzfQ.3BrsE3OzyfauKWHg_9Zw_DVgFDmKeAbpdFqPnISbPNI`}})
	// 	  .then(res => {
	// 		const persons = res.data;
	// 		this.setState({ persons });
	// 	  })
	//   }

		return (
		
			<main className={css.main}>
		
			<Routes>
			<Route  path="/associates" element={<Associates></Associates>}>
				{/* <Associates {...props} /> */}/
			</Route>
	
			<Route  path="/theftannounce" element={<TheftAnnounce></TheftAnnounce>}>
				{/* <Associates {...props} /> */}/
			</Route>
	
			<Route  path="/theftcases" element={<TheftCases></TheftCases>}>
				{/* <Associates {...props} /> */}/
			</Route>
	
			<Route  path="/associates" element={<Associates {...props} />}> 
							
			</Route>
			<Route  path="/associates/:officerID" element={<AssociateDetail ></AssociateDetail>}>
				{/* <Associates {...props} /> */}/
			</Route>
	
			<Route  path="/login" element={<Login></Login>}>
				{/* <Associates {...props} /> */}/
			</Route>
	
	
	
			{/* <Route path={'/tasks/:taskId'}>
				<TaskDetail {...props} />
			</Route> */}
			</Routes>
					
				
			</main>
		
		)


	}
	
	
	

export default Main
