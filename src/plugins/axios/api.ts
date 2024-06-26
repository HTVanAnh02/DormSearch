import type { IBodyResponse, ICommonListQuery, ICommonListQueryByHome, IGetListResponse } from '@/common/interface/interfaces';
import localStorageAuthService from '@/common/storages/authStorage';
import { type AxiosInstance } from 'axios';


interface IServiceOption {
    baseUrl: string;
}

export class ApiService {
    client: AxiosInstance;
    baseUrl: string;

    constructor(params: IServiceOption, axios: AxiosInstance) {
        this.client = axios;
        this.baseUrl = params.baseUrl;
    }

    get detailUrl(): string {
        return this.baseUrl;
    }

    get createUrl(): string {
        return this.baseUrl;
    }

    get updateUrl(): string {
        return this.baseUrl;
    }

    get deleteUrl(): string {
        return this.baseUrl;
    }
    get profileUrl(): string {
        return this.baseUrl;
    }
    useClient(axios: AxiosInstance): void {
        this.client = axios;
    }

    _getList<T>(
        queryString: ICommonListQuery,
    ): Promise<IBodyResponse<IGetListResponse<T>>> {
        return this.client.get(`${this.baseUrl}`, {
            params: queryString,
            headers: {
                'Authorization': 'Bearer '+localStorageAuthService.getAccessToken()
              }
            }
        );
    }

    _ItemById(id:any):Promise<any> {
        console.log("Id là" + id)
        return this.client.get(`https://localhost:44309/api/Houses/${id}`);
    }
    _getListByHome<T>(
        queryString: ICommonListQueryByHome,
    ): Promise<IBodyResponse<any>> {
        return this.client.get(`${this.baseUrl}`, {
            params: queryString
            }
        );
    }
    _getDetail<R>(id: number | string): Promise<R> {
        return this.client.get<R, R>(this.detailUrl + '/' + id,{
            headers: {
                'Authorization': 'Bearer '+localStorageAuthService.getAccessToken()
              }
        });
    }
    _getProfile<R>(): Promise<R> {
        return this.client.get<R, R>(this.profileUrl, {
            headers: {
                'Authorization': 'Bearer ' + localStorageAuthService.getAccessToken()
            }
        });
    }
    _create<P, R>(params: P): Promise<R> {
        return this.client.post(this.createUrl, params);
    }

    _update<P, R>(id: number | string, params: P): Promise<R> {
        return this.client.patch(this.updateUrl + '/' + id, params);
    }

    _delete<R>(id: number | string ): Promise<R> {
        return this.client.delete<R, R>(this.deleteUrl + '/' + id,{
            headers: {
                'Authorization': 'Bearer '+localStorageAuthService.getAccessToken()
            }
        });
    }
}
