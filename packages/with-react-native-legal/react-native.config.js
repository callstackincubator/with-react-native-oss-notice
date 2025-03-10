module.exports = {
  commands: [
    {
      name: 'with-react-native-legal',
      description: 'Set up all native boilerplate for OSS licenses notice',
      func: ([], { project: { android, ios } }, {}) => {
        const withLegal = require('./bare-plugin/build').default;

        withLegal(android.sourceDir, ios.sourceDir);
      },
    },
  ],
};
