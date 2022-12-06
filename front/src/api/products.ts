import axios from 'axios';
import { Product } from '../types/product';

const baseURL = `http://localhost:888/api`;

export const getAllProducts = (source: string) => {
    return axios
        .get<{ data: Product[]; status: string }>(
            `${baseURL}/products/${source}`
        )
        .then((response) => {
            return response.data.data;
        });
};

export const addProduct = (source: string, product: Omit<Product, '_id'>) => {
    return axios
        .post(`${baseURL}/products/${source}`, product)
        .then((response) => {
            return response.data.data;
        });
};

export const deleteProduct = (source: string, id: string) => {
    return axios
        .delete(`${baseURL}/products/${source}/${id}`)
        .then((response) => {
            return response.data.data;
        });
};

export const updateProduct = (source: string, product: Product) => {
    const { _id, ...body } = product;
    return axios
        .put(`${baseURL}/products/${source}/${_id}`, body)
        .then((response) => {
            return response.data.data;
        });
};
