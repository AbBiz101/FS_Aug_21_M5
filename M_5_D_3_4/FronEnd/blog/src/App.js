import './App.css';
import Cards from './Cards';
import Inputform from './InputForm';
import { Container } from 'react-bootstrap';
function App() {
	return (
		<Container>
			<Inputform />
			<Cards />
		</Container>
	);
}
export default App;
