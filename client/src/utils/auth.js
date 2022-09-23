import decode from 'jwt-decode';

class AuthService {
	getProfile() {
		return decode(this.getToken());
	}

	loggedIn() {
		const token = this.getToken();
		return !!token && !this.isTokenExpired(token);
	}

	isTokenExpired(token) {
		try {
			const decoded = decode(token);
			if (decoded.exp < Date.now() / 1000) {
				this.logout();
				return true;
			} else return false;
		} catch (err) {
			console.info(err.message);
		}
	}

	getToken() {
		return localStorage.getItem('id_token');
	}

	login(idToken) {
		localStorage.setItem('id_token', idToken);
	}

	logout() {
		localStorage.removeItem('id_token');
		localStorage.removeItem('user')
		// this will reload the page and reset the state of the application
		window.location.assign('/');
	}
}

export default new AuthService();
