import {type ReactElement} from 'react';

import './style.css';

export interface IImageSkeletonProps {
    size: string;
    zIndex: number;
}

const ImageSkeleton = ({size, zIndex}: IImageSkeletonProps): ReactElement => {
    return (
        <div
            style={{width: size, height: size, zIndex}}
            className="image-skeleton"></div>
    );
};

export default ImageSkeleton;
