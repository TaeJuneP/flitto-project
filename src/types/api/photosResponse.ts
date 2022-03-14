
export type APIResponse<T> =  T;

export type photosResponse = APIResponse<photoType>;

export interface photoType {
    id: number;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

export interface APIPaginationRequest {
    page?: number;
    limit?: number;
}