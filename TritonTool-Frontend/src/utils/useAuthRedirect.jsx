import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuthRedirect(authenticated) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!authenticated) {
            localStorage.clear()
            sessionStorage.clear()
            navigate('/login');
        }
    }, [authenticated, navigate]);
}
