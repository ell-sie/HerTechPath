import { useMutation, useQueryClient } from '@tanstack/react-query'
import { DeletePostInput } from '../../API'
import { client } from '../../App'
import { POSTS_QUERY_KEY } from '../../constants/queryKeys'
import { deletePost } from '../../graphql/mutations'
import toast from 'react-hot-toast'

async function deletePath(input: DeletePostInput) {
  return client.graphql({
    query: deletePost,
    variables: {
      input,
    },
  })
}

export function useDeletePostMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, data, mutate } = useMutation({
    mutationFn: deletePath,
    onSuccess: () => {
      toast.success('Post deleted successfully')
    },
    onError: error => {
      toast.error(error.message)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: POSTS_QUERY_KEY })
    },
  })

  return {
    isPending,
    error,
    data,
    mutate,
  }
}

