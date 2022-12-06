import React from 'react';
import { Icon } from '../../types/icon';

const Add = ({ height, width, className }: Icon) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            height={height}
            width={width}
            className={className}>
            <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" />
        </svg>
    );
};

export default Add;
