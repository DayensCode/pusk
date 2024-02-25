import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './header.css';
import logo from "./../../img/logo.svg";
import moon from "./../../img/moon.svg";
import sun from "./../../img/sun.svg";


const Header = () => {
	const normalLink = "link header__link";
	const activeLink = "link header__link header__link--active";

	const { pathname } =  useLocation();

	const themeButton = useRef(null); 

	const [ themeMode, setThemeMode ] = useState('dark');

	useEffect(() => {

		const conditions = document.querySelectorAll('.card__condition, .intro__job-value');
		const subtitles = document.querySelectorAll('.card__subtitle');

		const markers = document.querySelectorAll('.card__dutie');
		const infoMarkers = document.querySelectorAll('.info__offer');
		const header = document.querySelector('.header');
		const muteds = document.querySelectorAll('[id="muted"]');

		if (themeMode === 'dark') {
			themeButton.current.classList.add('header__button--dark');
			document.body.classList.remove('light');

			conditions.forEach((link) => link.classList.remove('link--dark'));
			subtitles.forEach((link) => link.classList.remove('link--dark'));
			muteds.forEach((link) => link.classList.remove('muted'));

			markers.forEach((marker) => marker.style.setProperty('--marker','#FFFFFF'));
			infoMarkers.forEach((marker) => marker.style.setProperty('--marker','#FFFFFF'));
			header.classList.remove('header--light');
		} else {
			themeButton.current.classList.remove('header__button--dark');
			document.body.classList.add('light');

			conditions.forEach((link) => link.classList.add('link--dark'));
			subtitles.forEach((link) => link.classList.add('link--dark'));
			muteds.forEach((link) => link.classList.add('muted'));

			markers.forEach((marker) => marker.style.setProperty('--marker','#000000'));
			infoMarkers.forEach((marker) => marker.style.setProperty('--marker','#000000'));
			header.classList.add('header--light');
		}

	},[themeMode, pathname]) //если менется путь то эффект отрабатывает по новой(смотрит актулаьное состояние темы и добавляет/удаляет все необходимые классы)

	function toggleThemeButton() {
		setThemeMode((currentTheme) => {
			return currentTheme === 'dark' ? 'light' : 'dark';
		})
	}

	return (
		<header className="header">
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
					</ul>
					<button ref={themeButton} className="header__button" onClick={toggleThemeButton}>
						<img src={sun} alt="image" className="header__button-icon" />
						<img src={moon} alt="image" className="header__button-icon" />
					</button>
				</nav>
			</div>
		</header>
	);
}

export default Header;