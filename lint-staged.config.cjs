/** @type {import('lint-staged').Config} */
module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '**/*.{json,md,yml,yaml,css,scss,html}': ['prettier --write']
};
