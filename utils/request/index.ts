import axios from 'axios';
import './requestInterceptors';
import './responseInterceptors';

type ResponseHandle = (data: ResponseData<any>) => unknown;

interface RequestData {
    [key: string]: unknown;
}

interface ResponseData<T> {
    msg: string;
    code: number;
    data: T;
}

export const get = <T>(
    url: string,
    params: RequestData = {},
    filter?: ResponseHandle,
): Promise<[any, ResponseData<T> | undefined]> =>
    new Promise((resolve) => {
        axios
            .get(url, { params })
            .then((result) => {
                let res: ResponseData<T>;
                if (filter !== undefined) {
                    res = filter(result.data) as unknown as ResponseData<T>;
                } else {
                    res = result.data as ResponseData<T>;
                }
                resolve([null, res as ResponseData<T>]);
            })
            .catch((err) => {
                resolve([err, undefined]);
            });
    });

export const post = <T>(
    url: string,
    data: RequestData,
    params: RequestData = {},
): Promise<[any, ResponseData<T> | undefined]> => {
    return new Promise((resolve) => {
        axios
            .post(url, data, { params })
            .then((result) => {
                resolve([null, result.data as ResponseData<T>]);
            })
            .catch((err) => {
                resolve([err, undefined]);
            });
    });
};

export const put = <T>(
    url: string,
    data: RequestData,
    params: RequestData = {},
): Promise<[any, ResponseData<T> | undefined]> => {
    return new Promise((resolve) => {
        axios
            .post(url, data, { params })
            .then((result) => {
                resolve([null, result.data as ResponseData<T>]);
            })
            .catch((err) => {
                resolve([err, undefined]);
            });
    });
};

export const del = <T>(
    url: string,
    data: RequestData,
    params: RequestData = {},
): Promise<[any, ResponseData<T> | undefined]> => {
    return new Promise((resolve) => {
        axios
            .post(url, data, { params })
            .then((result) => {
                resolve([null, result.data as ResponseData<T>]);
            })
            .catch((err) => {
                resolve([err, undefined]);
            });
    });
};
