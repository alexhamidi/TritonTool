import { useNavigate } from 'react-router-dom';

export function useAuthErrorHandler(setAuthenticated) {
    const navigate = useNavigate();

    return function handleAuthError(error) {
        console.error('Error:', error);
        if (error.response && error.response.status === 401) {
            setAuthenticated(false);
            navigate('/login');
        }
    }
}