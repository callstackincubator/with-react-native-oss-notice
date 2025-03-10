import { androidCommand } from './android/androidCommand';
import { iosCommand } from './ios/iosCommand';

function withReactNativeLegal(androidProjectPath: string, iosProjectPath: string) {
  androidCommand(androidProjectPath);
  iosCommand(iosProjectPath);
}

export default withReactNativeLegal;
