module.exports = {
    moduleNameMapper: {
      // Mock CSS imports
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest", // Use babel-jest to transpile JavaScript/React files
    },
    transformIgnorePatterns: [
      "/node_modules/"
    ],
  };
  