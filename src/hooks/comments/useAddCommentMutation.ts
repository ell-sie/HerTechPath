import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { CreateCommentInput } from '../../API'
import { client } from '../../App'
import { COMMENTS_QUERY_KEY } from '../../constants/queryKeys'
import { createComment } from '../../graphql/mutations'

async function addComments(input: CreateCommentInput) {
  return client.graphql({
    query: createComment,
    variables: {
      input: {
        id: input.id,
        description: input.description,
        postID: input.postID,
        userID: input.userID,
      },
    },
  })
}

export function useAddCommentMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, data, mutate } = useMutation({
    mutationFn: addComments,
    onSuccess: () => {
      toast.success('Comment added successfully')
    },
    onError: () => {
      toast.error("The Comment couldn't be added")
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
