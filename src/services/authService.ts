import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

interface LoginResponse {
    success: boolean;
    data?: any;
    error?: string;
}

class AuthService {
    async login(email: string, password: string): Promise<LoginResponse> {
        try {
            const response = await axios.get(`${apiUrl}/login`, {
                params: {
                    login: email,
                    password: password
                }
            });

            if (response.status === 200 && response.data) {
                localStorage.setItem('user', JSON.stringify(response.data));
                return { success: true, data: response.data };
            }

            return { success: false, error: 'Error desconocido' };

        }
        catch (error: any) {
            if (error.response && error.response.status === 401) {
                return { success: false, error: 'Usuario o contraseña incorrectos' };
            }
            return { success: false, error: 'Ha ocurrido un error en el inicio de sesión' };
        }
    }

    logout() {
        localStorage.removeItem('user');
    }

}

export default new AuthService();
