import Login from '../../components/login/loginComponent';
import Main from '../../components/layout/main';

const LoginPage = () => {
    return (
        <Main children={<Login/>}/>
    );
}

export default LoginPage;