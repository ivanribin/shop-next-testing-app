import Image from 'next/image';

import {type ReactElement, useState} from 'react';

import {ImageSkeleton} from '@shared/ImageSkeleton';

import './style.css';

export interface IImageWithFallbackProps {
    size: number;
    src: string;
    alt: string;
    disabled?: boolean;
}

const DEFAULT_SIZE: number = 200;

const ImageWithFallback = ({
    size = DEFAULT_SIZE,
    src,
    alt,
    disabled = false,
}: IImageWithFallbackProps): ReactElement => {
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

    const handleImageLoad = async (): Promise<void> => {
        setIsImageLoaded(true);
    };

    const disabledClassname: string = !disabled ? '' : 'disabled';

    return (
        <div className={`image-wrapper ${disabledClassname}`}>
            <Image
                src={src}
                alt={alt}
                width={size}
                height={size}
                onLoadingComplete={handleImageLoad}
            />
            {!isImageLoaded && <ImageSkeleton size={'100%'} zIndex={2} />}
        </div>
    );
};

export default ImageWithFallback;
