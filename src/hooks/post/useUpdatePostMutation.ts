// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import { client } from '../../App'
// import { updatePosts } from '../../graphql-custom-queries'
// import { UpdatePostInput } from '../../API'
// import { POSTS_QUERY_KEY } from '../../constants/queryKeys'



// async function updatePost(input: UpdatePostInput) {
//   return client.graphql({
//     query: updatePosts,
//     variables: {
//       input: {
//         id: input.id,
//         title: input.title,
//         description: input.description,
//         bloID: input.bloID,
//         pathID: input.pathID,
//       },
//     },
//   })
// }

// export function useUpdateResourceMutation() {
//   const queryClient = useQueryClient()
//   const { isPending, error, mutate } = useMutation({
//     mutationFn: updatePost,
//     onSettled: () => {
//       queryClient.invalidateQueries({ queryKey: POSTS_QUERY_KEY })
//     },
//   })

//   return {
//     isPending,
//     error,
//     mutate,
//   }
// }