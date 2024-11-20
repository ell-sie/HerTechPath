import { useMutation, useQueryClient } from '@tanstack/react-query'
import { DeletePathInput } from '../../API'
import { client } from '../../App'
import { PATHS_QUERY_KEY } from '../../constants/queryKeys'
import { deletePosts } from '../../graphql-custom-queries'
import toast from 'react-hot-toast'

async function deletePath(input: DeletePathInput) {
  return client.graphql({
    query: deletePosts,
    variables: {
      input,
    },
  })
}

export function useDeletePathMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, data, mutate } = useMutation({
    mutationFn: deletePath,
    onSuccess: () => {
      toast.success('Path deleted successfully')
    },
    onError: error => {
      toast.error(error.message)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: PATHS_QUERY_KEY })
    },
  })

  return {
    isPending,
    error,
    data,
    mutate,
  }
}
