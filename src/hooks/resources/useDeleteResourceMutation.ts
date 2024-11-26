import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { client } from '../../App'
import { DeleteResourcesInput } from '../../API'
import { RESOURCES_QUERY_KEY } from '../../constants/queryKeys'
import { deleteResources } from '../../graphql/mutations'



async function deleteProject(input: DeleteResourcesInput) {
  return client.graphql({
    query: deleteResources,
    variables: {
      input: {
        id: input.id,
      },
    },
  })
}
export function useDeleteResourceMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, data, mutate } = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      toast.success('Resource deleted successfully')
    },
    onError: error => {
      toast.error(error.message)
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
