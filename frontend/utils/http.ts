import axios from 'axios';
import { constant } from './constant';

const instance = axios.create(constant);
export default instance;