module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  rules: {
    // JSX not allowed in files with extension '.js' 에러 해결
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }],

    // Expected linebreaks to be 'LF' but found 'CRLF' 에러 해결
    'linebreak-style': 0,

    // Strings must use singlequote 에러 해결
    quotes: ['off', 'single'],
  },
};

/*
    'React' must be in scope when using JSX 에러 해결을 위해서는
    해당 파일 맨 위에 import React from 'react'를 작성해주세요
*/
