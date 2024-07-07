import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
  }

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '94c06ffe6e8d4169b0ed63f048a29c94'
    }
    
})


class apiClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    };

    get =(id: number | string)=>{
        return axiosInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data)
    }

}


export default apiClient