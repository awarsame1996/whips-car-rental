import './App.css';
import { LoginForm } from './components/loginForm';
import { Navbars } from './components/navBar';

export const App = () => {
	return (
		<div>
			<Navbars></Navbars>
			<LoginForm></LoginForm>;
		</div>
	);
};
