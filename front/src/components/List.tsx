import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = `http://localhost:${
    process.env.NODE_ENV === 'production' ? '888' : '3001'
}/api`;

type Product = {
    id: string;
    name: string;
};

type Props = {
    source: string;
};

const List = ({ source }: Props) => {
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        axios
            .get<{ data: Product[]; status: string }>(
                `${baseURL}/products/${source}`
            )
            .then((response) => {
                setData(response.data.data);
            });
    }, [source]);
    return (
        <div>
            {data.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
        </div>
    );
};

export default List;
