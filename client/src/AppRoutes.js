import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { AboutPage } from './containers/aboutPage';
import { AccountPage } from './containers/accountsPage';
import { BookingPage } from './containers/bookingPage';
import { HomePage } from './containers/homePage';
import { LoginPage } from './containers/loginPage';
import { SignupPage } from './containers/signupPage';

import { VehiclesPage } from './containers/vehiclesPage';
import { useAuth } from './context/AppProvider';

import { AnimatePresence } from 'framer-motion';

export const AppRoutes = () => {
	const { isLoggedIn } = useAuth();
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				{!isLoggedIn && <Route path='/login' element={<LoginPage />} />}
				{!isLoggedIn && <Route path='/sign-up' element={<SignupPage />} />}
				{/* <Route path='/vehicles' element={<VehiclesPage />} /> */}

				<Route
					path='/vehicles'
					element={isLoggedIn ? <VehiclesPage /> : <Navigate to='/' />}
				/>
				<Route path='/about' element={<AboutPage />} />
				<Route path='/bookings' element={<BookingPage />} />
				<Route path='/accounts' element={<AccountPage />} />

				<Route path='/' element={<HomePage />} />
			</Routes>
		</AnimatePresence>
	);
};
