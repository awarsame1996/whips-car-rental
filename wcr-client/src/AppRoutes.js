import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage } from './containers/aboutPage';
import { HomePage } from './containers/homePage';
import { LoginPage } from './containers/loginPage';
import { SignupPage } from './containers/signupPage';

import { VehiclesPage } from './containers/vehiclesPage';
import { useAuth } from './context/AppProvider';

export const AppRoutes = () => {
	const { isLoggedIn } = useAuth();
	console.log(isLoggedIn);
	return (
		<Routes>
			{!isLoggedIn && <Route path='/login' element={<LoginPage />} />}
			{!isLoggedIn && <Route path='/sign-up' element={<SignupPage />} />}
			{/* <Route path='/vehicles' element={<VehiclesPage />} /> */}
			<Route
				path='/vehicles'
				element={isLoggedIn ? <VehiclesPage /> : <LoginPage />}
			/>
			{/* <Navigate to={isLoggedIn ? '/vehicles' : '/login'} /> */}
			<Route path='/' element={<HomePage />} />
			<Route path='/about' element={<AboutPage />} />

			<Route path='/modal' element={<SignupPage />} />
		</Routes>
	);
};
