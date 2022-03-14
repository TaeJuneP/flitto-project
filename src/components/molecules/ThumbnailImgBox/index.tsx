import React from "react"
import {useNavigate} from "react-router-dom";
import {ImgWrapper, TextWrapper, ThumbnailImgBoxWrapper} from "./styled";
import LazyImg from "../../atoms/LazyImg";
import BasicText from "../../atoms/BasicText";
import {photoType} from "../../../types/api/photosResponse";

interface IProps {
    photo: photoType
}


export default function ThumbnailImgBox(props: IProps) {
    const {photo} = props;
    const navigate = useNavigate();

    const moveDetailPage = () => {
        navigate(`/detail/${photo.id}`, {state: {photo}})
    }

    return (
        <ThumbnailImgBoxWrapper>
            <ImgWrapper onClick={() => moveDetailPage()}>
                <LazyImg imgUrl={photo.download_url} name={photo.author} objectFit={"cover"}/>
            </ImgWrapper>
            <TextWrapper>
                <BasicText text={photo.author} styled={{fontSize: "16px", fontWeight:"bold"}}/>
            </TextWrapper>
        </ThumbnailImgBoxWrapper>
    )
}