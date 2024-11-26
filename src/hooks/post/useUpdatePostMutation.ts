import { useMutation, useQueryClient } from '@tanstack/react-query'
import { client } from '../../App'
import { updatePost } from '../../graphql/mutations'
import { UpdatePostInput } from '../../API'
import { POSTS_QUERY_KEY } from '../../constants/queryKeys'

async function updatePosts(input: UpdatePostInput) {
  return client.graphql({
    query: updatePost,
    variables: {
      input: {
        id: input.id,
        title: input.title,
        description: input.description,
      },
    },
  })
}

export function useUpdatePostMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, mutate } = useMutation({
    mutationFn: updatePosts,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: POSTS_QUERY_KEY })
    },
  })

  return {
    isPending,
    error,
    mutate,
  }
}