module.exports = {
  skipFiles: ['_testing/', '_interfaces', 'examples/Resolvers/ERC725/ClaimHolder.sol', 'examples/Resolvers/ERC725/KeyHolder.sol'],
  compileCommand: 'npm run build',
  testCommand: 'npm run test-cover',
  norpc: true,
}
