import login from "../../assets/images/login/login.svg";
import { GrFacebookOption } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {

    const {loginUser, loginWithGoogle} = useContext(AuthContext);



    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        }).catch(err => console.error(err))
        e.target.reset();
    }

    const handleGoogleLogIn = () => {
        loginWithGoogle()
        .then(result => {
            const user = result.user;
            console.log('google log in user', user)
        }).catch(err => console.error(err))
    }

    return (
        <div className='grid grid-cols-1 gap-16 md:grid-cols-2 my-14'>
            <div className='flex justify-center'>
                <img className='w-2/4' src={login} alt="" />
            </div>
            <div className='border border-[#D0D0D0] rounded-lg p-2 md:p-20'>
                    <form onSubmit={handleLogin}>
                    <h1 className="font-semibold text-center mb-10 text-4xl">Login</h1>
                        <label htmlFor="email" className='font-semibold text-lg'>Email</label> <br />
                        <input className='border w-full p-5 rounded-lg my-5 ' type="email" name="email" id="" placeholder='Your email' /> <br />
                        <label htmlFor="password" className='font-semibold text-lg'>Confirm Password</label> <br />
                        <input className='my-5 border w-full p-5 rounded-lg' type="password" name="password" id="" placeholder='Your password' /> <br />
                        <input type="submit" className='btn btn-secondary font-semibold text-xl w-full h-16 capitalize mb-7 text-white' value="Sign in" />
                    </form>
                    <p className="font-medium text-lg text-center">Or Sign In with</p>
                    <div className="flex w-48 mx-auto mt-10 mb-16">
                    <GrFacebookOption className="w-14 h-12 text-[#3B5998] bg-[#F5F5F8] mr-4 rounded-full p-3"></GrFacebookOption>
                    <FaLinkedinIn className="w-14 h-12 text-[#0A66C2] bg-[#F5F5F8] mr-4 rounded-full p-3"></FaLinkedinIn>
                    <FcGoogle onClick={handleGoogleLogIn} className="w-14 h-12 hover:cursor-pointer bg-[#F5F5F8] mr-4 rounded-full p-3"></FcGoogle>
                    </div>
                    <p className="text-center">{`Don't`} Have an account? <span className="text-secondary font-bold"><Link to='/register'>Sign UP</Link></span></p>
            </div>
        </div>
    );
};

export default Login;