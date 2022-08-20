import Logo from '../../assets/logo.svg'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	NavLink,
	Redirect,
  } from 'react-router-dom';
import DropDown from '../dropdown/DropDown'
import css from './Header.module.css'
import Associates from '../associates/Associates';

// const Home = () => <div>Home</div>;
// const TheftAnnounce = () => (
//   <div> Сообщить о краже </div>
// );

// const Auth = () => <div>Авторизация</div>;
// const Registration = () => <div>Регистрация пользователя</div>;

// const TheftMsg = props => (
//   <div>
//     Архив случаев краж
//     {/* <Route path={`${props.match.url}/post`} component={Post} /> */}
//   </div>
// );

// const Assoiciates = props => (
//   <div>
//     Ответственные сотрудники
//     {/* <Route path={`${props.match.url}/post`} component={Post} /> */}
//   </div>
// );

const NotFound = () => <div>404</div>;

const Header = () => {
	return (
		<header className={css.header}>
		
			<ul>
          <li>
            <NavLink to="/" isActive={() => true}>
              Главная
            </NavLink>
          </li>

          <li>
            <NavLink to="/theftannounce" isActive={() => true}>
              Сообщить о краже
            </NavLink>
          </li>

          <li>
            <NavLink to="/theftcases" activeClassName="is-active">
             База угонов
            </NavLink>
          </li>
          <li>
            <Link to="/associates" activeStyle={{ color: 'green' }}>
              Ответственные сотрудники
            </Link>
          </li>

          <li>
            <Link to="/login" activeStyle={{ color: 'green' }}>
              Войти
            </Link>
          </li>
        </ul>
		
		
		
		</header>

		
	)
}

export default Header
