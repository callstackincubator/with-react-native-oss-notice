import NativeWithReactNativeLegal from './NativeWithReactNativeLegal';

export const WithReactNativeLegal = {
  launchLicenseListScreen: (licenseHeaderText?: string) => {
    /**
     * On Android, the licenses list is displayed as a custom activity
     */
    NativeWithReactNativeLegal.launchLicenseListScreen(licenseHeaderText ?? 'OSS Licenses');
  },
};
