import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import css from './ThaftAnnounceForm.css'
// import css from './Main.module.css'
// import Board from '../board/Board'
// import TaskDetail from '../task-detail/TaskDetail'

class TheftAnnounce extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		  officerName: "",
		  licnumber:"",
		  byctype:"",
		  username: ""
		};
	  }
	
	  handleNameChange = (event) => {
		this.setState({ username: event.target.value });
	  };

	 
	 
	 
	 
	  handleSubmit = event => {
		const { username } = this.state;
	
		alert(`Username is ${username}`);
		event.preventDefault();
	  };

	  
	
	// const {officers} = this.props
	render(){
		return (
		
			<form className="contact-form" onSubmit={this.handleSubmit}>
	
	
	<h1>Сообщить о краже</h1>
	<label>ФИО владельца
	<input 
	type="text" 
	name="fname"
	value={this.state.user}
              onChange={this.handleNameChange}
	
	></input>
	</label>
	  
	
	  {/* <label for="licnumber">Лицензионный номер</label>
	  <input type="text" id="licnumber" name="lname"></input> */}
			
	  {/* <label for="byctype">Тип</label>
	
	<select name="byctype" id="byctype">
	  <option value="gor">Городской</option>
	  <option value="shos">Шоссейный</option>
	  <option value="gorn">Горный</option>
	  <option value="special">Специальный</option>
	</select>  */}
	
	
	
	  {/* <label for="licnumber">Цвет</label>
	  <input type="text" id="licnumber" name="licnumber"></input>
	
	  <label for="date">Дата</label>
	  <input type="date" id="date" name="date"></input> */}
	
	  
	  {/* <label for="officer">Сотрудник</label>
	  <select id="officer"
	//   ref={id} className={css.select} onChange={replaceTask} 
	  > 
					<option className={css.option}></option>
					{/* {replaceTasks.map(task => {
						return <option key={task.id} value={task.id} className={css.option}>{task.title}</option>;
					})} */}
					{/* </select> */} 
	
					{/* <label for="additinfo">Дополнительная информация</label>
	
	<textarea id="additinfo" name="additinfo" rows="4" cols="50"> </textarea> */}
			
			
			
			
			<button className="contact-submit"
									// onClick={event => {
									//     event.preventDefault()
									//     createReport()
									// }}
									type="submit"
							>
								Сообщить
							</button>
			
			
			</form>
			
		)

	}
	
}

export default TheftAnnounce
