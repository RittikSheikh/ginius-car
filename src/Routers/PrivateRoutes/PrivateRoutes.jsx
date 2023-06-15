import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    
    if (loading) {
        return <div className='my-[25%] flex justify-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-secondary"></div></div>
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>

};

export default PrivateRoutes;