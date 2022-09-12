import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './containers/aboutPage';
import { HomePage } from './containers/homePage';
import { LoginPage } from './containers/loginPage';
import { SignupPage } from './containers/signupPage';

import { VehiclesPage } from './containers/vehiclesPage';
import { useAuth } from './context/AppProvider';

export const AppRoutes = () => {
	const { isLoggedIn } = useAuth();

	return (
		<Routes>
			{isLoggedIn && (
				<>
					<Route path='/login' element={<LoginPage />} />
					<Route path='/sign-up' element={<SignupPage />} />
				</>
			)}

			{!isLoggedIn && (
				<>
					<Route path='/vehicles' element={<VehiclesPage />} />
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
				</>
			)}
		</Routes>
	);
};
