import { useMutation, useQueryClient } from '@tanstack/react-query'
import { client } from '../../App'
import { updateComments } from '../../graphql-custom-queries'
import { UpdateCommentInput } from '../../API'
import { COMMENTS_QUERY_KEY } from '../../constants/queryKeys'



async function updateComment(input: UpdateCommentInput) {
  return client.graphql({
    query: updateComments,
    variables: {
      input: {
        id: input.id,
        text: input.text,
        like: input.like,
        postID: input.postID,
      },
    },
  })
}

export function useUpdateResourceMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, mutate } = useMutation({
    mutationFn: updateComment,
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