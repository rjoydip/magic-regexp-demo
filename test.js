import assert from 'node:assert';
import { createRegExp, anyOf } from 'magic-regexp';

// File extension regex
const fileExtRegexp = createRegExp('.', anyOf('js', 'css', 'ts'));

assert.equal(fileExtRegexp.test('index.js'), true);
assert.equal(fileExtRegexp.test('index.ps'), false);

// Folder ignore regex
const folderIgnoreRegexp = createRegExp(anyOf('node_modules', 'cache'));

assert.equal(folderIgnoreRegexp.test('/node_modules/index.js'), true);
assert.equal(folderIgnoreRegexp.test('/abc/index.js'), false);

// Combining both in one regex
const regex = createRegExp(
  '.',
  anyOf('js', 'css', 'ts'),
  anyOf('node_modules', 'cache')
);
assert.equal(regex.test('/abc/index.json'), false);
