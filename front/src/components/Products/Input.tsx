import React, { useState } from 'react';
import { Product } from '../../types/product';
import Add from '../icons/Add';

type Props = {
    onAdd: (product: Omit<Product, '_id'>) => void;
};

const Input = ({ onAdd }: Props) => {
    const [name, setName] = useState('');

    return (
        <div className="flex items-center gap-2 mb-2">
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="bg-blue-50 border border-black rounded px-2 outline-none"
            />
            <div
                onClick={async () => {
                    if (!name) return;
                    await onAdd({ name });
                    setName('');
                }}>
                <Add
                    height={28}
                    width={28}
                    className="fill-gray-600 cursor-pointer hover:fill-gray-800 active:fill-gray-500"
                />
            </div>
        </div>
    );
};

export default Input;
