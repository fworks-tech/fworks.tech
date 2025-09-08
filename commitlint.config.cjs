module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0, 'always', ['sentence-case', 'lower-case']],
    'header-max-length': [2, 'always', 500]
  }
};
