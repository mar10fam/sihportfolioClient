import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = () => {
    const { loggedIn } = useContext(AuthContext);

    return (
        loggedIn ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoute