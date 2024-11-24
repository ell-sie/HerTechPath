import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UpdateUserInput } from '../../API'
import { client } from '../../App'
import { USERS_QUERY_KEY } from '../../constants/queryKeys'
import { updateUser } from '../../graphql/mutations'



async function updateUserInfo(input: UpdateUserInput) {
  return client.graphql({
    query:updateUser,
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

export function useUpdateUserMutation() {
  const queryClient = useQueryClient()
  const { isPending, error, mutate } = useMutation({
    mutationFn: updateUserInfo,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY })
    },
  })

  return {
    isPending,
    error,
    mutate,
  }
}