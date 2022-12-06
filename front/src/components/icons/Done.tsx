import React from 'react';
import { Icon } from '../../types/icon';

const Done = ({ height, width, className }: Icon) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            height={height}
            width={width}
            className={className}>
            <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
        </svg>
    );
};

export default Done;
