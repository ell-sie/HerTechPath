import { useMutation, useQueryClient } from '@tanstack/react-query'
import { DeleteCommentInput } from '../../API'
import { client } from '../../App'
import { COMMENTS_QUERY_KEY } from '../../constants/queryKeys'
import { deleteComment } from '../../graphql/mutations'
import toast from 'react-hot-toast'

async function deleteComments(input: DeleteCommentInput) {
  return client.graphql({
    query: deleteComment,
    variables: {
      input,
    },
  })
}

export function useDeleteCommentMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, data, mutate } = useMutation({
    mutationFn: deleteComments,
    onSuccess: () => {
      toast.success('Comment deleted successfully')
    },
    onError: error => {
      toast.error(error.message)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: COMMENTS_QUERY_KEY })
    },
  })

  return {
    isPending,
    error,
    data,
    mutate,
  }
}

