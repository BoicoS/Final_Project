import { Switch, Route, Link } from 'react-router-dom'
import React, { useState } from 'react'




const Associates = (props)=> {

	const {officers, setOfficers} = props;
	console.log({officers})
	
		return (
		  <ul>		  
			{officers?.officers?.map(officer => {
				<li key={officer._id}>
				<Link to={`/associates/${officer._id}`}>
				{officer.email}			
				
				</Link>
				</li>})
			}			
		  </ul>
		)
	  
}

	

export default Associates
