import { useQuery } from '@tanstack/react-query'
import { client } from '../../App'
import { RESOURCES_QUERY_KEY } from '../../constants/queryKeys'
import { listResources } from '../../graphql/queries'

export function useResourcesQuery() {
  const { isPending, error, data } = useQuery({
    queryKey: RESOURCES_QUERY_KEY,
    queryFn: () => client.graphql({ query: listResources }),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
  })

  return {
    isPending,
    error,
    data:
      data?.data.listResources.items.map(resource => ({
        ...resource,
      })) || [],
  }
}
