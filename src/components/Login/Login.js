import './Login.css';

const Login = () => {

    return (
        <>
            <section className="section-header">
                <div className="loginbox ">
                    <form className="login-form">
                        <input type="text" name="email" placeholder="Enter Email" />
                        <input type="password" name="password" placeholder="Enter Password" />
                        <input type="submit" value="Login" style={{ cursor: 'context-menu', backgroundColor: 'gray' }} />
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;