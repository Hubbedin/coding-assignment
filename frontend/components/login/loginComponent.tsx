import style from './style.module.scss';
import { constant } from '../../utils/constant';

const LoginComponent = () => {
    const login = () => {
        window.location.href = `${constant.baseURL}/login`;
    }

    return (
        <div className={`${style.center} ${style.wrap}`}>
            <h2 className={`${style.center} text-center`}>Get Started!</h2>
            <button className={`${style.center} btn btn-outline-success`} onClick={() => login()}>
                SIGN UP/SIGN IN
            </button>
        </div>
    );
}

export default LoginComponent;