import axios from 'axios';
//import AxiosErrorHandler from '@utils' // create your own api handler
const API_PROPERTY='www.apilink.com/properties'

// we define our axios Error handler. 
axios.interceptors.response.use((response) => response, AxiosErrorHandler);
axios.defaults.headers.common.accept = 'application/json';

// we use propertiesApiAxios for managing Properties api calls
export const propertiesApiAxios = axios.create({
    baseURL: API_PROPERTY,
});

function AxiosErrorHandler(error: any) {
    throw new Error('Function not implemented.');
}
