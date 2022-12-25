module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-paper/babel',
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
