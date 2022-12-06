import React, { useCallback, useEffect, useState } from 'react';
import {
    addProduct,
    deleteProduct,
    getAllProducts,
    updateProduct,
} from '../../api/products';
import { Product } from '../../types/product';
import Input from './Input';
import Item from './Item';

type Props = {
    source: string;
};

const List = ({ source }: Props) => {
    const [data, setData] = useState<Product[]>([]);

    const fetchProducts = useCallback(async () => {
        const products = await getAllProducts(source);
        setData(products);
    }, [source]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <div className="bg-blue-200 p-4 rounded">
            <p className="mb-2">
                Source{' '}
                <span className="bg-white py-1 px-2 rounded font-bold">
                    {source.toUpperCase()}
                </span>
            </p>
            <Input
                onAdd={async (product) => {
                    await addProduct(source, { name: product.name });
                    fetchProducts();
                }}
            />
            {data.map((item) => (
                <Item
                    product={item}
                    key={item._id}
                    onDelete={async () => {
                        await deleteProduct(source, item._id);
                        fetchProducts();
                    }}
                    onEdit={async (product) => {
                        await updateProduct(source, product);
                        fetchProducts();
                    }}
                />
            ))}
        </div>
    );
};

export default List;
