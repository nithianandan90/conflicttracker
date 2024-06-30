import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  createHttpLink,
} from '@apollo/client';
import { AUTH_TYPE, AuthOptions, createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import config from '../aws-exports';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { setContext } from '@apollo/client/link/context';

const url = config.aws_appsync_graphqlEndpoint;
const region = config.aws_appsync_region;

// const httpLink = createHttpLink({ uri: url });

const httpLink = createHttpLink({ uri: config.aws_appsync_graphqlEndpoint });

// Set up the auth link to include the API key in the headers of each request
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-api-key': config.aws_appsync_apiKey, // Use the API key from your aws-exports file
    },
  };
});

export const mergeLists = (existing = { items: [] }, incoming = { items: [] }) => {
  return {
    ...existing,
    ...incoming,
    items: [...(existing.items || []), ...incoming.items],
  };
};

const typePolicies = {
  Query: {
    fields: {
      commentsForPost: {
        keyArgs: ['postID', 'createdAt', 'sortDirection', 'filter'],
        merge: mergeLists,
      },
      postByDate: {
        keyArgs: ['type', 'createdAt', 'sortDirection', 'filter'],
        merge: mergeLists,
      },
    },
  },
};

const Client = ({ children }) => {
  //   const { user } = useAuthContext();

  const client = useMemo(() => {
    // const jwtToken = user?.getSignInUserSession()?.getAccessToken().getJwtToken() || '';
    // console.log(JSON.stringify(jwtToken, null, 3));

    // const auth = {
    //   type: config.aws_appsync_authenticationType,
    //   jwtToken: '',
    // };

    // const link = ApolloLink.from([
    //   createAuthLink({ url, region, auth }),
    //   createSubscriptionHandshakeLink({ url, region }, httpLink),
    // ]);

    const link = ApolloLink.from([
      authLink, // Make sure the authLink is before the httpLink
      httpLink,
    ]);

    console.log('link', link);

    return new ApolloClient({
      link,
      cache: new InMemoryCache({ typePolicies }),
      defaultOptions: {
        watchQuery: {
          // Set your preferred errorPolicy here (e.g., 'all', 'none', 'ignore')
          errorPolicy: 'all', // Change this to your preferred errorPolicy
        },
        query: {
          errorPolicy: 'all', // Change this to your preferred errorPolicy
        },
        mutate: {
          errorPolicy: 'all',
        },
      },
    });
  }, []);
  //   user removed from dependency array
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

Client.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Client;
