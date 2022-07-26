import css from './Footer.module.css'
import { LIST_TYPES, LIST_COPY } from '../../config'

const Footer = props => {
	// const {tasks} = props
	return (
		<footer className={css.footer}>
			{/* <div className={css.counts} />
			{Object.values(LIST_TYPES).map( type => {
				const listCount = tasks.filter (task => task.status === type)
				if (!listCount.length) return null
				return (
					<div key ={type} className= {css.count}>{LIST_COPY[type]}: {listCount.length}</div>
				)
			})} */}

			<div className={css.copy}>
				Created by <a href='https://github.com/BoicoS/Kanban-board.git' target='_blank' rel='noreferrer'>Кадочникова Ульяна, {(new Date().getFullYear())}</a>
			</div>
		</footer>
	)
}

export default Footer
