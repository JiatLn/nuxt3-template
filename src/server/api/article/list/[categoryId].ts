import { baseFetch } from '~/server/fn'
import type { ArticleItem, FetchRow } from '~~/src/types'

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as any
  const { categoryId } = event.context.params
  const url = `/article/list/${categoryId}`
  const response = await baseFetch<FetchRow<ArticleItem>>(url, query)
  return response
})
