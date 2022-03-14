import React, {useEffect, useState} from "react"
import {useLocation, useParams} from 'react-router-dom';
import api from "../../../api";
import {photoType} from "../../../types/api/photosResponse";
import PhotoDetailInfo from "../../organisms/PhotoDetailInfo";

interface CustomizedState {
    photo: photoType;
}

export default function ImageDetailPage() {
    const [photo, setPhoto] = useState<photoType>()
    const {id} = useParams();
    const location = useLocation();
    let state: CustomizedState = location.state as CustomizedState;


    useEffect(() => {
        if (!state || !state.photo) {
            if (id) {
                api.apiPhotos.detail(id).then(res => setPhoto(res.data)).catch(err => console.log(err))
            } else {
                console.log("no matched id")
            }
        } else {
            setPhoto(state.photo)
        }
    }, [id, state])

    return photo ? <PhotoDetailInfo photo={photo}/> : <div>no matched id</div>
}