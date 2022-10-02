import { Switch, Route, Link } from 'react-router-dom'
import React, { useState } from 'react'
import clsx from 'clsx'
import css from './Forms.module.css'
import axios from 'axios'

const api = axios.create({
	baseURL:"https://sf-final-project.herokuapp.com/api"
}

)

const Associates = (props)=> {


	const {officers, setOfficers} = props;
	
	const removeData = (id) => {

        api.delete(`/officers/${id}`
		, {headers
			:{Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzlkZTZkM2E2NWMyMDVkOGQyYTk4OCIsImlhdCI6MTY2NDczNjkwNywiZXhwIjoxNjY1MzQxNzA3fQ.lp5F3J8Ck1jD127i3uNVRFq5nd1QNqAEXGA2iitggd4`}})
		.then(res => {
            const del = officers.officers.filter(officer => id !== officer._id)
            setOfficers(del);
			
        })
    }

	return(
		<ul>		  
			{officers?.officers?.map(officer => (
				<li key={officer._id}>
				<Link to={`/associates/${officer._id}`}>
				{officer.email}	
				{officer._id}				
				</Link>
				<button className={clsx(css.button, css.submit)}  onClick={() => removeData(officer._id)}>Delete</button>	

				
				</li>))
			}			
		  </ul>
	)
}

	

export default Associates
