import './utp.css';
import backgroundImage from './../../img/gradient-background.svg';

const Utp = () => {
	return (
		<section className="utp">
			<div className="utp__background">
				<img src={backgroundImage} alt="image"/>
			</div>
			<div className="container">
				<h2 className="reused-title utp__title">Pusk — инструмент,<br /> который доступен всем</h2>
				<span className="reused-signature" id="muted">Наше приложение — это десятки микросервисов, доступных в одном экране, в привычном и удобном для тебя дизайне</span>
			</div>
		</section>
	);
}

export default Utp;