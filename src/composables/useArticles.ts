import type { Ref } from 'vue'
import type { ArticleItem, FetchData, FetchRow, QueryParams } from '~~/src/types'

export async function useArticles(categoryId: Ref<number | string>, queryParams?: Ref<QueryParams>) {
  const { data, pending, refresh } = await useRequest<FetchRow<ArticleItem>>(() => `/api/article/list/${categoryId.value}`, {
    query: queryParams?.value,
    key: categoryId.value.toString(),
  })

  const articleList = computed(() => {
    if (data.value?.code === OK_CODE) {
      return data.value.rows
    }
    return []
  })
  const total = computed(() => data.value?.total ?? 0)

  // back to first page when category changed
  watch(categoryId, () => {
    if (queryParams?.value) {
      queryParams.value.pageNum = 1
    }
    refresh()
  })

  await refresh()

  return {
    articleList,
    total,
    pending,
    refresh,
  }
}

export async function useArticle(articleId: Ref<number>) {
  const { data, pending, refresh } = useRequest<FetchData<ArticleItem>>(() => `/api/article/${articleId.value}`, {
    key: `${articleId.value}`,
  })

  const article = computed(() => data.value?.data ?? null)

  watch(articleId, refresh)

  await refresh()

  return {
    article,
    pending,
    refresh,
  }
}
