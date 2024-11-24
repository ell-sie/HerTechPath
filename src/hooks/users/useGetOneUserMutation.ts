import { useQuery } from '@tanstack/react-query';
import { client } from '../../App';
import { USERS_QUERY_KEY } from '../../constants/queryKeys';
import { getUser } from '../../graphql/queries';

export function useGetUserQuery(userId : string | undefined) {
  const { isLoading, error, data } = useQuery({
    queryKey: [USERS_QUERY_KEY, userId], // Cache based on user ID
    queryFn: async () => {
      const result = await client.graphql({
        query: getUser,
        variables: { id: userId as string },
      });
      return result.data.getUser;
    },
    enabled: !!userId, // Only run the query if userId is provided
    staleTime: 1 * 60 * 1000, // 1 minute
  });

  return {
    isLoading,
    error,
    userData: data || null,
  };
}
