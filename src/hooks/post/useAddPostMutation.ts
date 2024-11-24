// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import toast from 'react-hot-toast'
// import { CreatePostInput } from '../../API'
// import { client } from '../../App'
// import { POSTS_QUERY_KEY } from '../../constants/queryKeys'
// import { createPosts } from '../../graphql-custom-queries'

// async function addPosts(input: CreatePostInput) {
//   return client.graphql({
//     query: createPosts,
//     variables: {
//       input: {
//         id: input.id,
//         title: input.title,
//         description: input.description,
//         pathID: input.pathID,
//         bloID: input.bloID,
//       },
//     },
//   })
// }

// export function useAddResourceMutation() {
//   const queryClient = useQueryClient()
//   const { isPending, error, data, mutate } = useMutation({
//     mutationFn: addPosts,
//     onSuccess: () => {
//       toast.success('Post added successfully')
//     },
//     onError: () => {
//       toast.error("The Post couldn't be added")
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries({ queryKey: POSTS_QUERY_KEY })
//     },
//   })

//   return {
//     isPending,
//     error,
//     data,
//     mutate,
//   }
// }
