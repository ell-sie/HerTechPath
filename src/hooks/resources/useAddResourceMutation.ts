import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { CreateResourcesInput } from '../../API'
import { client } from '../../App'
import { RESOURCES_QUERY_KEY } from '../../constants/queryKeys'
import { createResources } from '../../graphql/mutations'
async function addResources(input: CreateResourcesInput) {
  return client.graphql({
    query: createResources,
    variables: {
      input: {
        title: input.title,
        description: input.description,
        link: input.link,
        author: input.author,
        hours: input.hours,
      },
    },
  })
}

export function useAddResourceMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, data, mutate } = useMutation({
    mutationFn: addResources,
    onSuccess: () => {
      toast.success('Resource added successfully')
    },
    onError: () => {
      toast.error("The Resource couldn't be added")
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: RESOURCES_QUERY_KEY })
    },
  })

  return {
    isPending,
    error,
    data,
    mutate,
  }
}
