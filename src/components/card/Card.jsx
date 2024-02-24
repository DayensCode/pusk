import { NavLink } from 'react-router-dom';

import './card.css';

const Card = ({ id, title, pay, experience, workFormat, dutiesFirst, dutiesSecond }) => {
	return (
		<li className="card">
			<NavLink to={`/job/${id}`}>
				<div className="card__top">
					<h3 className="card__title">{title}</h3>
					<div className="card__conditions">
						<div className="card__condition">
							Заработная плата
							<span id="muted">{pay}</span>
						</div>
						<div className="card__condition">
							Опыт работы
							<span id="muted">{experience}</span>
						</div>
						<div className="card__condition">
							Формат работы
							<span id="muted">{workFormat}</span>
						</div>
					</div>
				</div>
				<div className="card__body">
					<h4 className="card__subtitle">Что предстоит делать</h4>
					<ul className="card__duties">
						<li className="card__dutie" id="muted">{dutiesFirst}</li>
						<li className="card__dutie" id="muted">{dutiesSecond}</li>
						<li className="card__dutie" id="muted">{dutiesFirst}</li>
						<li className="card__dutie" id="muted">{dutiesSecond}</li>
					</ul>
				</div>
				<button type="button" className="card__button">Смотреть вакансию</button>
			</NavLink>
		</li>
	);
}

export default Card;