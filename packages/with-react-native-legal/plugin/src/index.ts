import type { ConfigPlugin } from 'expo/config-plugins';
import { createRunOncePlugin, withPlugins } from 'expo/config-plugins';

import { withAndroidNotice } from './android/withAndroidNotice';
import { withIosNotice } from './ios/withIosNotice';

// eslint-disable-next-line import/no-extraneous-dependencies
const pak = require('with-react-native-legal/package.json');

const withReactNativeLegal: ConfigPlugin = (config) => {
  return withPlugins(config, [withAndroidNotice, withIosNotice]);
};

export default createRunOncePlugin(withReactNativeLegal, pak.name, pak.version);
