import { Switch, Route, Link } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

const api = axios.create({
	baseURL:"https://sf-final-project.herokuapp.com/api"
}

)

class AssociateDetail extends React.Component {
	state = {
		persons: []
	  }

	  componentDidMount() {
		api.get('/officers/', {headers:{Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDZhNGMyYTMzZTZkNTIzYjJiNjJjZSIsImlhdCI6MTY1OTgwOTgzMiwiZXhwIjoxNjYwNDE0NjMyfQ.Eh8lbTk6gPor-2xxxSIqQJ8CUM-A5NFVnCE-KNyOQKU`}})
		  .then(res => {
			const persons = res.data;
			this.setState({ persons });
		  })
	  }
	  render() {		
		// console.log(this.state.persons.officers(0))
		return (
		  <ul>
			{ this.state.persons?.officers?.map(officer => <li key={officer.id}><Link to={`/associates/${officer._id}`}>{officer.email} {officer.firstName} {officer.lastName}</Link></li>)}
			
		  </ul>
		)
	  }


}


	
	
	
	
	
export default AssociateDetail

