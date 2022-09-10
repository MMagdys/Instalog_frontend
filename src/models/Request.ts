export interface IRequestParams {
    url: string,
    method?: string,
    params?: any,
    data?: any
}

export interface PageInfo {
    currentPage: number;
    pagesCount: number;
    nextPage: number;
    recordsCount: number;
    perPage: number;
}

export interface Page<T> {
    records: T [];
    pageInfo: PageInfo;
}