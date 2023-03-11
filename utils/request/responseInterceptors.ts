import axios from 'axios';
import handleError from './handleError';

const router = useRouter();

axios.interceptors.response.use(
    (response) => {
        //
        if (response.status !== 200) return Promise.reject(response.data);

        handleError.handleAuthError(response.data.code);
        handleError.handleGeneralError(
            response.data.errno,
            response.data.errmsg,
        );

        return response;
    },
    (err) => {
        // 对响应错误做处理
        handleError.handleNetworkError(err.response.status);
        Promise.reject(err.response);
    },
);
