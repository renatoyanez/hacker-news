export interface IApiResponse<T> {
	data: IResponseData<T>;
}

export interface IResponseData<T> {
	hits: T;
	page: number;
	nbPages: number;
	hitsPerPage: number;
	query: string;
}
