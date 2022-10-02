import { Switch, Route, Link, useMatch, useParams } from 'react-router-dom'
import React, { useState } from 'react'




const AssociateDetail = props => {
	
	const {officerID} = useParams();
	const {officers, setOfficers} = props;
	
	const officer = officers.officers.find(officer => officer._id === officerID)
	// // const [clicked, setClicked] = useState(false);

	 
	  	
		
		return (
		  <ul>
			
			{officer.email};
			{officer.firstName};
			
		  </ul>
		)
	  


}


	
	
	
	
	
export default AssociateDetail

