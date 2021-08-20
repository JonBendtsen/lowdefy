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

import getBlockMatcher from '../getBlockMatcher';

async function Validate({ context, params }) {
  const validationErrors = context.RootBlocks.validate(getBlockMatcher(params));
  if (validationErrors.length > 0) {
    const error = new Error(
      `Your input has ${validationErrors.length} validation error${
        validationErrors.length !== 1 ? 's' : ''
      }.`
    );
    throw error;
  }
}

export default Validate;
