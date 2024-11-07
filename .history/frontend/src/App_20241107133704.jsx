import './App.css';
import ChatBar from './components/ChatBar';
import Login from './components/pages/login/login';

function App() {
	return (
		<div className='max-w-22'>
			<ChatBar />
			<Login />
		</div>
	);
}

export default App;
