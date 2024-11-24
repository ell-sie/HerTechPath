import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { CreateUserInput } from '../../API'
import { client } from '../../App'
import { USERS_QUERY_KEY } from '../../constants/queryKeys'
import { createUser } from '../../graphql/mutations'


async function addUsers(input: CreateUserInput) {
  return client.graphql({
    query: createUser,
    variables: {
      input: {
        id: input.id,
        name: input.name,
        email: input.email,
        technicalskills: input.technicalskills,
        softskills: input.softskills,
        shorttermgoals: input.shorttermgoals,
        longtermgoals: input.longtermgoals,
        hrsperweek: input.hrsperweek,
        interests: input.interests,
        feedback: input.feedback,
        challenges: input.challenges,
        motivation: input.motivation,
        level: input.level,
      },
    },
  })
}

export function useAddUserMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, data, mutate } = useMutation({
    mutationFn: addUsers,
    onSuccess: () => {
      toast.success('User added successfully')
    },
    onError: () => {
      toast.error("The user couldn't be added")
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY })
    },
  })

  return {
    isPending,
    error,
    data,
    mutate,
  }
}
