import { Switch, Route, Routes, BrowserRouter } from 'react-router-dom'
import css from './Main.module.css'
import Board from '../board/Board'
// import TaskDetail from '../task-detail/TaskDetail'
import Associates from '../associates/Associates'
import TheftAnnounce from '../theftannounce/TheftAnnounce'
import TheftCases from '../theftcases/TheftCases'
import Login from '../Login/Login'
import AssociateDetail from '../associates/AssociateDetail'
import TheftCaseDetail from '../theftcases/TheftCaseDetail'
import React, { useEffect } from 'react'





const Main = (props) => {	
	
	

		return (
		
			<main className={css.main}>
		
			<Routes>
			<Route  path="/associates" element={<Associates officers={props.officers} />} />
	
			<Route  path="/theftannounce" element={<TheftAnnounce></TheftAnnounce>}>
				{/* <Associates {...props} /> */}/
			</Route>
	
			<Route  path="/cases" element={<TheftCases cases={props.cases}/>}/>
			<Route  path="/cases/:caseID" element={<TheftCaseDetail cases={props.cases} />}/>
	
			
			
			<Route  path="/associates/:officerID" element={<AssociateDetail officers={props.officers} ></AssociateDetail>}>
			
			</Route>
	
			<Route  path="/login" element={<Login></Login>}>
				{/* <Associates {...props} /> */}/
			</Route>
	
	
	
			
			</Routes>
					
				
			</main>
		
		)


	}
	
	
	

export default Main
