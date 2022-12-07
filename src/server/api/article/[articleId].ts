import { baseFetch } from '~~/src/server/fn'
import type { ArticleItem, FetchData } from '~~/src/types'

export default defineEventHandler(async (event) => {
  const { articleId } = event.context.params
  const url = `/article/${articleId}`
  const response = await baseFetch<FetchData<ArticleItem>>(url)
  return response
})
