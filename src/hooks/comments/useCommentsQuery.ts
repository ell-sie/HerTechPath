import { useQuery } from '@tanstack/react-query'
import { client } from '../../App'
import { COMMENTS_QUERY_KEY } from '../../constants/queryKeys'
import { listComments } from '../../graphql/queries'

export function useCommentsQuery() {
  const { isPending, error, data } = useQuery({
    queryKey: COMMENTS_QUERY_KEY,
    queryFn: () => client.graphql({ query: listComments }),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
  })

  return {
    isPending,
    error,
    data:
      data?.data.listComments.items.map(post => ({
        ...post,
      })) || [],
  }
}
