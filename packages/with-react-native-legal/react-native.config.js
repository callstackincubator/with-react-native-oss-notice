module.exports = {
  commands: [
    {
      name: 'legal-generate',
      description: 'Set up all native boilerplate for OSS licenses notice',
      func: ([], { project: { android, ios } }, {}) => {
        const withReactNativeLegal = require('./bare-plugin/build').default;

        withReactNativeLegal(android.sourceDir, ios.sourceDir);
      },
    },
  ],
};
