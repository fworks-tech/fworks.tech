/** @type {import('lint-staged').Config} */
module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'yarn prettier --write'],
  '**/*.{json,md,yml,yaml,css,scss,html}': ['yarn prettier --write']
};
