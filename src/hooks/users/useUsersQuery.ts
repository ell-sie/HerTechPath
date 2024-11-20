import { useQuery } from '@tanstack/react-query'
import { client } from '../../App'
import { USERS_QUERY_KEY } from '../../constants/queryKeys'
import { listUsers } from '../../graphql/queries'

export function useUsersQuery() {
  const { isPending, error, data } = useQuery({
    queryKey: USERS_QUERY_KEY,
    queryFn: () => client.graphql({ query: listUsers }),
    staleTime: 1 * 60 * 1000, // 1 minutes
    gcTime: 1 * 60 * 60 * 1000, // 1 hours
  })

  return {
    isPending,
    error,
    data:
      data?.data.listUsers.items.map(user => ({
        ...user,
      })) || [],
  }
}
