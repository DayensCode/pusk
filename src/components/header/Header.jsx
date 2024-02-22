import './header.css';
import logo from "./../../img/logo.svg";

const Header = () => {
	return (
      <header className="header">
			<div className="container">
				<div className="header__wrapper">

					<span className="header__signature">Криптокошелёк pusk</span>
					<h1 className="header__title">Криптомир, который был адаптирован для тебя</h1>


					<div className="header__row">
						<div className="container container--flex">
							<a href="/">
								<img src={logo} alt="logo" className="header__logo" />
							</a>
							<nav className="header__nav">
								<ul className="header__list">
									<li><a href="/">Главная</a></li>
									<li><a href="#">Вакансии</a></li>
									<li><a href="#">Контакты</a></li>
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