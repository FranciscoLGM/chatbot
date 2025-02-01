module.exports = {
  preset: "@shelf/jest-mongodb",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironment: "node",
  testTimeout: 30000,
};
