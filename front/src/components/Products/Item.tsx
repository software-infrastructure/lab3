import React, { useState } from 'react';
import { Product } from '../../types/product';
import Close from '../icons/Close';
import Delete from '../icons/Delete';
import Done from '../icons/Done';
import Edit from '../icons/Edit';

type Props = {
    product: Product;
    onDelete: () => void;
    onEdit: (product: Product) => void;
};

const Item = ({ product, onDelete, onEdit }: Props) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editValue, setEditValue] = useState(product.name);

    return (
        <div className="flex items-center gap-2 h-8">
            {isEdit ? (
                <>
                    <div
                        onClick={async () => {
                            if (!editValue) return;
                            await onEdit({ ...product, name: editValue });
                            setIsEdit(false);
                        }}>
                        <Done
                            height={16}
                            width={16}
                            className="fill-gray-600 cursor-pointer hover:fill-gray-800 active:fill-gray-500"
                        />
                    </div>
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="bg-blue-50 border border-black rounded px-2 outline-none w-3/5"
                    />
                </>
            ) : (
                <>
                    <div onClick={onDelete}>
                        <Delete
                            height={16}
                            width={16}
                            className="fill-gray-600 cursor-pointer hover:fill-gray-800 active:fill-gray-500"
                        />
                    </div>
                    <p>{product.name}</p>
                </>
            )}
            <div
                onClick={() => {
                    if (!isEdit) {
                        setEditValue(product.name);
                    }
                    setIsEdit((prev) => !prev);
                }}>
                {isEdit ? (
                    <Close
                        height={16}
                        width={16}
                        className="fill-gray-600 cursor-pointer hover:fill-gray-800 active:fill-gray-500"
                    />
                ) : (
                    <Edit
                        height={16}
                        width={16}
                        className="fill-gray-600 cursor-pointer hover:fill-gray-800 active:fill-gray-500"
                    />
                )}
            </div>
        </div>
    );
};

export default Item;
