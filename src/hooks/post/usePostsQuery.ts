import { useQuery } from '@tanstack/react-query'
import { client } from '../../App'
import { POSTS_QUERY_KEY } from '../../constants/queryKeys'
import { listPosts } from '../../graphql/queries'

export function usePostsQuery() {
  const { isPending, error, data } = useQuery({
    queryKey: POSTS_QUERY_KEY,
    queryFn: () => client.graphql({ query: listPosts }),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
  })

  return {
    isPending,
    error,
    data:
      data?.data.listPosts.items.map(post => ({
        ...post,
      })) || [],
  }
}
