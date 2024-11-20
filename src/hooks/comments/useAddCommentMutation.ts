import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { CreateCommentInput } from '../../API'
import { client } from '../../App'
import { COMMENTS_QUERY_KEY } from '../../constants/queryKeys'
import { createComments } from '../../graphql-custom-queries'

async function addComments(input: CreateCommentInput) {
  return client.graphql({
    query: createComments,
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

export function useAddResourceMutation() {
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
