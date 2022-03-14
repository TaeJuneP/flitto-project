import React from "react"
import {ThumbnailGrid} from "./styled";
import ThumbnailImgBox from "../../molecules/ThumbnailImgBox";
import {photoType} from "../../../types/api/photosResponse";

interface IProps {
    photoList: photoType[]
}

export default function ThumbnailGridList(props: IProps) {

    const {photoList} = props

    return (
        <ThumbnailGrid>
            {photoList.map((photo, idx) =>
                <ThumbnailImgBox key={idx} photo={photo}/>
            )}
        </ThumbnailGrid>
    )
}