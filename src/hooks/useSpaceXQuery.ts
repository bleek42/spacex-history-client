import { useQuery, useLazyQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';

const useSpaceXQuery = (gqlQuery: DocumentNode) => {
    const { data, loading, error } = useQuery(gqlQuery);
};
