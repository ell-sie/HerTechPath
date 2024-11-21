import { useMutation, useQueryClient } from '@tanstack/react-query'
import { client } from '../../App'
import { PATHS_QUERY_KEY } from '../../constants/queryKeys'
import { updatePaths } from '../../graphql-custom-queries'
import { UpdatePathInput } from '../../API'


async function updatePath(input: UpdatePathInput) {
  return client.graphql({
    query: updatePaths,
    variables: {
      input: {
        id: input.id,
        name: input.name,
        userID: input.userID,
        status: input.status,
      },
    },
  })
}

export function useUpdatePathMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, mutate } = useMutation({
    mutationFn: updatePath,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: PATHS_QUERY_KEY })
    },
  })

  return {
    isPending,
    error,
    mutate,
  }
}
