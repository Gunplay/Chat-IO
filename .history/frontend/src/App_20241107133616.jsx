import './App.css';
import ChatBar from './components/ChatBar';
import Login from './components/pages/login/login';

function App() {
	return (
		<div className='flex flex-row items-center'>
			<ChatBar />
			<Login />
		</div>
	);
}

export default App;
