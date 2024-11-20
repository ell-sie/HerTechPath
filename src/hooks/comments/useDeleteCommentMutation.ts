import { useMutation, useQueryClient } from '@tanstack/react-query'
import { DeleteCommentInput } from '../../API'
import { client } from '../../App'
import { COMMENTS_QUERY_KEY } from '../../constants/queryKeys'
import { deleteComments } from '../../graphql-custom-queries'
import toast from 'react-hot-toast'

async function deleteComment(input: DeleteCommentInput) {
  return client.graphql({
    query: deleteComments,
    variables: {
      input,
    },
  })
}

export function useDeletePathMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, data, mutate } = useMutation({
    mutationFn: deleteComment,
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

