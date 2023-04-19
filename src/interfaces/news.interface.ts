import { IApiResponse } from './apiResponse.interface';

export interface IHits {
	created_at: string;
	author: string;
	story_title?: string | null;
	story_url?: string | null;
}

export type INews = IApiResponse<IHits[]>;
