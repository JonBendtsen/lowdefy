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

/* eslint-disable max-classes-per-file */
import WebParser from '../../src/webParser';

const logger = console.log;
const mockLogger = jest.fn();
beforeEach(() => {
  console.log = mockLogger;
  mockLogger.mockReset();
});
afterAll(() => {
  console.log = logger;
});

const args = {
  string: 'args',
  arr: [{ a: 'args1' }, { a: 'args2' }],
};

const context = {
  config: {
    string: 'config',
    arr: [{ a: 'config1' }, { a: 'config2' }],
  },
  input: {
    string: 'input',
    arr: [{ a: 'input1' }, { a: 'input2' }],
  },
  lowdefyGlobal: {
    string: 'global',
    arr: [{ a: 'global1' }, { a: 'global2' }],
  },
  menus: [
    {
      menuId: 'default',
    },
    {
      menuId: 'm_1',
    },
    {
      menuId: 'm_2',
    },
  ],
  mutations: {
    not_loaded: { loading: true, response: 'fail' },
    string: { loading: false, response: 'mutation String' },
    number: { loading: false, response: 500 },
    arr: { loading: false, response: [{ a: 'mutation a1' }, { a: 'mutation a2' }] },
  },
  requests: {
    not_loaded: { loading: true, response: 'fail' },
    string: { loading: false, response: 'request String' },
    number: { loading: false, response: 500 },
    arr: { loading: false, response: [{ a: 'request a1' }, { a: 'request a2' }] },
  },
  state: {
    string: 'state',
    arr: [{ a: 'state1' }, { a: 'state2' }],
  },
  urlQuery: {
    string: 'urlQuery',
    arr: [{ a: 'urlQuery1' }, { a: 'urlQuery2' }],
  },
};

const contexts = {};

const arrayIndices = [1];

test('_log a string', () => {
  const input = { a: { _log: 'value' } };
  const parser = new WebParser({ context, contexts });
  const res = parser.parse({ input, args, location: 'locationId', arrayIndices });
  expect(res.output).toEqual({
    a: 'value',
  });
  expect(mockLogger).toHaveBeenCalledWith('value');
});

test('_log a number', () => {
  const input = { a: { _log: 1 } };
  const parser = new WebParser({ context, contexts });
  const res = parser.parse({ input, args, location: 'locationId', arrayIndices });
  expect(res.output).toEqual({
    a: 1,
  });
  expect(mockLogger).toHaveBeenCalledWith(1);
});

test('_log a null', () => {
  const input = { a: { _log: null } };
  const parser = new WebParser({ context, contexts });
  const res = parser.parse({ input, args, location: 'locationId', arrayIndices });
  expect(res.output).toEqual({
    a: null,
  });
  expect(mockLogger).toHaveBeenCalledWith(null);
});

// TODO: Confirm if this is expected behaviour??
test('_log a undefined', () => {
  const input = { a: { _log: undefined } };
  const parser = new WebParser({ context, contexts });
  const res = parser.parse({ input, args, location: 'locationId', arrayIndices });
  expect(res.output).toEqual({
    a: {},
  });
  expect(mockLogger).not.toHaveBeenCalled();
});

test('_log a 0', () => {
  const input = { a: { _log: 0 } };
  const parser = new WebParser({ context, contexts });
  const res = parser.parse({ input, args, location: 'locationId', arrayIndices });
  expect(res.output).toEqual({
    a: 0,
  });
  expect(mockLogger).toHaveBeenCalledWith(0);
});

test('_log a false', () => {
  const input = { a: { _log: false } };
  const parser = new WebParser({ context, contexts });
  const res = parser.parse({ input, args, location: 'locationId', arrayIndices });
  expect(res.output).toEqual({
    a: false,
  });
  expect(mockLogger).toHaveBeenCalledWith(false);
});

test('_log a object', () => {
  const input = { a: { _log: { b: 1 } } };
  const parser = new WebParser({ context, contexts });
  const res = parser.parse({ input, args, location: 'locationId', arrayIndices });
  expect(res.output).toEqual({
    a: { b: 1 },
  });
  expect(mockLogger).toHaveBeenCalledWith({ b: 1 });
});

test('_log a array', () => {
  const input = { a: { _log: [{ b: 1 }] } };
  const parser = new WebParser({ context, contexts });
  const res = parser.parse({ input, args, location: 'locationId', arrayIndices });
  expect(res.output).toEqual({
    a: [{ b: 1 }],
  });
  expect(mockLogger).toHaveBeenCalledWith([{ b: 1 }]);
});