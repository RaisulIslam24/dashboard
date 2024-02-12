import './Login.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
	const history = useHistory();

	const handleClick = () => {
		history.push('/dashboard')
	}

    return (
        <>
            <section className="section-header">
                <div className="loginbox ">
                    <form className="login-form">
                        <input type="text" name="email" placeholder="Enter Email" />
                        <input type="password" name="password" placeholder="Enter Password" />
                        <input onClick={handleClick} type="submit" value="Login" style={{ cursor: 'context-menu', backgroundColor: 'gray' }} />
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;