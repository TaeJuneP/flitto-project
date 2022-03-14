import React from "react"
import {PhotoDetailInfoWrapper, PhotoImgWrapper, PhotoInfoWrapper} from "./styled";
import LazyImage from "../../atoms/LazyImg";
import {photoType} from "../../../types/api/photosResponse";
import BasicText from "../../atoms/BasicText";

interface IProps {
    photo: photoType
}

export default function PhotoDetailInfo(props: IProps) {
    const {photo} = props
    return (
        <PhotoDetailInfoWrapper>
            <PhotoImgWrapper>
                <LazyImage imgUrl={photo.download_url} name={photo.author}
                           objectFit={"contain"}/>
            </PhotoImgWrapper>
            <PhotoInfoWrapper>{Object.keys(photo).map((key) =>
                <BasicText key={key} text={`${key} : ${photo[key as keyof photoType]}`}
                           styled={{fontSize: "20px"}}/>)}
            </PhotoInfoWrapper>
        </PhotoDetailInfoWrapper>
    )
}