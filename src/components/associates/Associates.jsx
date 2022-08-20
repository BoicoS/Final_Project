import { Switch, Route, Link } from 'react-router-dom'
import React, { useState } from 'react'




const Associates = (props)=> {

	const {officers, setOfficers} = props;
	
		return (
		  <ul>
			{officers?.map(officer => {
				<li key={officer.id}>
				<Link to={`/associates/${officer._id}`}>
				{officer.email} {officer.firstName} {officer.lastName}
				</Link>
				</li>})
			};
	
			
		  </ul>
		)
	  
}

	

export default Associates
