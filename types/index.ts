export interface FetchData<T> {
  msg: string
  code: number
  data: T
}
export interface FetchRow<T> {
  total: number
  rows: Array<T>
  code: number
  msg: number
}

export interface ArticleItem {
  id: number
  title: string
  content: string
}

export interface QueryParams {
  pageNum: number
  pageSize: number
}
