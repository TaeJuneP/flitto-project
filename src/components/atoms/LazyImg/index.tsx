import React from 'react';
import {LazyImgWrapper} from './styled';
import loading from "../../../asset/loadingImg.gif";

interface IProps {
    imgUrl: string;
    name?: string;
    objectFit: string;
}

export default function LazyImage(props: IProps) {
    const {imgUrl, name, objectFit} = props
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const imgRef = React.useRef<HTMLImageElement>(null);
    const observer = React.useRef<IntersectionObserver>();
    React.useEffect(() => {
        observer.current = new IntersectionObserver(intersectionObserver);
        imgRef.current && observer.current.observe(imgRef.current);
    }, [])

    const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                io.unobserve(entry.target);
                setIsLoading(true);
            }
        })
    }

    return (
        <LazyImgWrapper ref={imgRef} src={isLoading ? imgUrl : loading} alt={name} objectFit={objectFit}/>
    )
}

