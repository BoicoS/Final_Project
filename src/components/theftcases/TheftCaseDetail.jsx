import { Switch, Route, Link, useMatch, useParams } from 'react-router-dom'
import React, { useState } from 'react'




const TheftCaseDetail = props => {
	
	const {caseID} = useParams();
	const {cases, setCases} = props;
	
	const thcase = cases.data.find(thcase => thcase._id === caseID)
	// // const [clicked, setClicked] = useState(false);

	 
	  	
		
		return (
		  <ul>
			
			{thcase.createdAt};
			{thcase.ownerFullName};
			
		  </ul>
		)
	  


}


	
	
	
	
	
export default TheftCaseDetail

