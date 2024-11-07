import './App.css';
import ChatBar from './components/ChatBar';
import Login from './components/pages/login/login';

function App() {
	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<ChatBar />
			<Login />
		</div>
	);
}

export default App;
