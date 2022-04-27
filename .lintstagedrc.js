module.exports = {
  './*/**/*.{ts,tsx,js,jsx}': [
    'yarn lint',
    'prettier --write',
  ],
}
