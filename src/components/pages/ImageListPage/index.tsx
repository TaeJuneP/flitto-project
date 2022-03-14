import React, {useCallback, useEffect, useState} from "react"
import api from "../../../api";
import ThumbnailGridList from "../../organisms/ThumbnailGridList";
import {photoType} from "../../../types/api/photosResponse";


export default function ImageListPage() {
    const [photoList, setPhotoList] = useState<photoType[]>([])
    const [page, setPage] = useState(1)

    const getPhotoList = useCallback(async () => {
        await api.apiPhotos.pages({page: page, limit: 20}).then(res => {
                if (res.data.length > 0) {
                    setPhotoList(photoList => photoList?.concat(res.data))
                }
            }
        ).catch(err => console.log(err))
    }, [page])

    const handleScroll =useCallback(() => {
        let userScrollHeight = window.innerHeight + window.scrollY;
        let windowBottomHeight = document.documentElement.offsetHeight;
        if (userScrollHeight >= windowBottomHeight) {
            setPage(page => page + 1)
        }
    },[])

    useEffect(() => {
        getPhotoList();
    }, [getPhotoList])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    });

    return (
        <ThumbnailGridList photoList={photoList}/>
    )
}