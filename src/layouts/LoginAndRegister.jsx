import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';

const LoginAndRegister = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginAndRegister;