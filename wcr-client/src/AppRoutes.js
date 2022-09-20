import { Routes, Route, Navigate } from 'react-router-dom';
import { TestModal } from './components/test-modal';
import { AboutPage } from './containers/aboutPage';
import { AccountPage } from './containers/accountsPage';
import { BookingPage } from './containers/bookingPage';
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
      {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
      {!isLoggedIn && <Route path="/sign-up" element={<SignupPage />} />}
      {/* <Route path='/vehicles' element={<VehiclesPage />} /> */}

      <Route
        path="/vehicles"
        element={isLoggedIn ? <VehiclesPage /> : <Navigate to="/" />}
      />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/bookings" element={<BookingPage />} />
      <Route path="/accounts" element={<AccountPage />} />

      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
