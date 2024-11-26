import { useMutation, useQueryClient } from '@tanstack/react-query'
import { client } from '../../App'
import { updateResources } from '../../graphql/mutations'
import { UpdateResourcesInput } from '../../API'
import { RESOURCES_QUERY_KEY } from '../../constants/queryKeys'



async function updateResource(input: UpdateResourcesInput) {
  return client.graphql({
    query: updateResources,
    variables: {
      input: {
        id: input.id,
        title: input.title,
        description: input.description,
        link: input.link,
        author: input.author,
        hours: input.hours,
      },
    },
  })
}

export function useUpdateResourceMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, mutate } = useMutation({
    mutationFn: updateResource,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: RESOURCES_QUERY_KEY })
    },
  })

  return {
    isPending,
    error,
    mutate,
  }
}