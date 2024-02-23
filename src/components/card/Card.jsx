import './card.css';

const Card = ({ title, pay, experience, workFormat, dutiesFirst, dutiesSecond }) => {
	return (
		<li className="card">
			<a href="#!">
				<div className="card__top">
					<h3 className="card__title">{title}</h3>
					<div className="card__conditions">
						<div className="card__condition">
							Зароботная плата
							<span>{pay}</span>
						</div>
						<div className="card__condition">
							Опыт работы
							<span>{experience}</span>
						</div>
						<div className="card__condition">
							Формат работы
							<span>{workFormat}</span>
						</div>
					</div>
				</div>
				<div className="card__body">
					<h4 className="card__subtitle">Что предстоит делать</h4>
					<ul className="card__duties">
						<li>{dutiesFirst}</li>
						<li>{dutiesSecond}</li>
						<li>{dutiesFirst}</li>
						<li>{dutiesSecond}</li>
					</ul>
				</div>
				<button type="button" className="card__button">Смотреть вакансию</button>
			</a>
		</li>
	);
}

export default Card;