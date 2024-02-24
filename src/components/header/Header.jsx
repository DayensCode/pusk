import './header.css';
import logo from "./../../img/logo.svg";

import { NavLink } from 'react-router-dom';

const Header = () => {
	const normalLink = "header__link";
	const activeLink = "header__link header__link--active";

	return (
      <header className="header">
			<div className="container">
				<div className="header__wrapper">

					<span className="header__signature">Криптокошелёк pusk</span>
					<h1 className="header__title">Криптомир, который был адаптирован для тебя</h1>


					<div className="header__row">
						<div className="container container--flex">
							<NavLink to="/">
								<img src={logo} alt="logo" className="header__logo" />
							</NavLink>

							<nav className="header__nav">
								<ul className="header__list">
									<li>
										<NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>Главная</NavLink>
									</li>
									<li>
										<NavLink to="/vacancy" className={({isActive}) => isActive ? activeLink : normalLink}>Вакансии</NavLink>
									</li>
									<li>
										<NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>Контакты</NavLink>
									</li>
								</ul>
							</nav>
						</div>
					</div>

				</div>
			</div>
		</header>
	);
}

export default Header;