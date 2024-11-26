import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UpdateCommentInput } from '../../API'
import { client } from '../../App'
import { COMMENTS_QUERY_KEY } from '../../constants/queryKeys'
import { updateComment } from '../../graphql/mutations'

async function updateComments(input: UpdateCommentInput) {
  return client.graphql({
    query: updateComment,
    variables: {
      input: {
        id: input.id,
        postID: input.postID,
        userID: input.userID,
      },
    },
  })
}

export function useUpdateCommentMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, mutate } = useMutation({
    mutationFn: updateComments,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: COMMENTS_QUERY_KEY })
    },
  })

  return {
    isPending,
    error,
    mutate,
  }
}