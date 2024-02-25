import Utp from "../components/utp/Utp";
import Intro from "../components/intro/Intro";

const Home = () => {
	return (
		<main>
			<Intro 
				title="Криптомир, который был адаптирован для тебя" 
				signatureHome="Криптокошелёк pusk"
			/>
			<Utp />
			{/* зарабатывай инвестируй используй */}
			{/* Идеальный кошелёк тот, который только твой */}
		</main>
	);
}

export default Home;