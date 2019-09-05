# Google Interview Question
This question was asked in an interview at Google, for a Junior Engineer role.

Given an unordered array of integers and a value named sum, `return true` if any two items can be added and equal the value of sum. Otherwise, `return false`.

So, if we were given the array ``[3, 5, 1, 4]`` and the value `9`, our function should `return true`, because `4 + 5 = 9`.

## Solution

Let's approach the solution by writing tests first, see it fail and then make it pass

- Create a js file `google.js`
- Initialize the repo `npm init -y`
- Make changes in `package.json`
  ```js
  "scripts": {
    "test": "mocha"
  },
  ```
- Write code in `google.js` and export the function
- Create a test folder and file `mkdir test` and `touch test/test.js`
- Inside `test.js`, you need to to `require 'chai'` and also `require '../google.js'`
- Write tests inside `test.js`
- Run `npm run test` on the Terminal and see the tests fail
- Come back to `google.js` and write code to make the tests pass
