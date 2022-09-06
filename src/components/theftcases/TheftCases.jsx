import { Switch, Route, Link } from 'react-router-dom'
// import css from './Main.module.css'
// import Board from '../board/Board'
// import TaskDetail from '../task-detail/TaskDetail'

const TheftCases = (props) => {

	const {cases, setCases} = props;
	// const {officers, setOfficers}=props;
	return (
		
		<ul>		  
		{cases?.data?.map(thcase => (
			<li key={thcase._id}>
			<Link to={`/cases/${thcase._id}`}>
			{thcase.licenseNumber}			
			
			</Link>
			</li>))
		}


				
	  </ul>
		
				
		
	)
}

export default TheftCases
