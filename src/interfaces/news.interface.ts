import { IApiResponse } from './apiResponse.interface';

export interface IHits {
	objectID: string;
	created_at: string;
	author: string;
	story_title: string;
	story_url: string;
}

export type INews = IApiResponse<IHits[]>;
