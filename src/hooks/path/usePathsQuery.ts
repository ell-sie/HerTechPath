import { useQuery } from '@tanstack/react-query'
import { client } from '../../App'
import { PATHS_QUERY_KEY } from '../../constants/queryKeys'
import { listPaths } from '../../graphql/queries'

async function getPaths() {
  return client.graphql({
    query: listPaths,
  })
}

export function usePathsQuery() {
  const { isPending, error, data } = useQuery({
    queryKey: PATHS_QUERY_KEY,
    queryFn: getPaths,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
  })

  return {
    isPending,
    error,
    data:
      data?.data.listPaths.items.map(path => ({
        ...path,
      })) || [],
  }
}
