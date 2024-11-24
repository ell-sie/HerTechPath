import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { CreatePathInput, } from '../../API'
import { client } from '../../App'
import { PATHS_QUERY_KEY } from '../../constants/queryKeys'
import { createPath } from '../../graphql/mutations'


async function addPaths(input: CreatePathInput) {
  return client.graphql({
    query: createPath,
    variables: {
      input: {
        id: input.id,
        title: input.title,
        resourcesID: input.resourcesID,
      },
    },
  })
}

export function useAddPathMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, data, mutate } = useMutation({
    mutationFn: addPaths,
    onSuccess: () => {
      toast.success('Path added successfully')
    },
    onError: () => {
      toast.error("The Path couldn't be added")
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: PATHS_QUERY_KEY })
    },
  })

  return {
    isPending,
    error,
    data,
    mutate,
  }
}
