/*
  Copyright 2020-2021 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import { get } from '@lowdefy/helpers';
import { gql } from '@apollo/client';

export const GET_LOGIN = gql`
  query openIdAuthorizationUrl($openIdAuthorizationUrlInput: OpenIdAuthorizationUrlInput!) {
    openIdAuthorizationUrl(openIdAuthorizationUrlInput: $openIdAuthorizationUrlInput)
  }
`;

const createLogin = (client, windowContext) => async ({ input, pageId, urlQuery } = {}) => {
  try {
    const result = await client.query({
      query: GET_LOGIN,
      fetchPolicy: 'network-only',
      variables: {
        openIdAuthorizationUrlInput: {
          input,
          pageId,
          urlQuery,
        },
      },
    });
    console.log(result);
    if (get(result, 'data.openIdAuthorizationUrl')) {
      windowContext.location.href = get(result, 'data.openIdAuthorizationUrl');
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default createLogin;
