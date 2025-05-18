module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/Assets',
          '@screens': './src/Screens',
          '@navigation': './src/Navigation',
          '@components': './src/Components',
          '@constants': './src/Constants',
          '@utils': './src/Utils',
          '@themes': './src/Theme',
          '@mocks': './src/Mock',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
