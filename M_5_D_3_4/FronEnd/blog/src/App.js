import './App.css';
import Cards from './Cards';
import Inputform from './InputForm';
import Inputauthor from './Inputauthor';
import { Container } from 'react-bootstrap';
function App() {
	return (
		// <Container className="bigbox">
		// 	<div className="container_1">
		// 		<Inputform title="BlogPost" />
		// 		<Inputauthor title="Author" />
		// 	</div>
		// 	<div className="container_2">
		// 	</div>
		// </Container>
				<Cards />
	);
}
export default App;
