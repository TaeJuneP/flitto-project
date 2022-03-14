import {AxiosInstance} from 'axios';
import {APIPaginationRequest, photosResponse} from "../types/api/photosResponse";

const V2_PATH = '/v2';
const DETAIL_PATH = (id: string) => {
    return `/id/${id}/info`
}


function apiPhotos(instance: AxiosInstance) {
    return {
        pages: (params: APIPaginationRequest) =>
            instance.get<photosResponse[]>(V2_PATH + '/list', {params}),
        detail: (id: string) => instance.get<photosResponse>(DETAIL_PATH(id))
    }
}

export default apiPhotos;
