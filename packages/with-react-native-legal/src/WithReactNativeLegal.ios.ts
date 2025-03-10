import NativeWithReactNativeLegal from './NativeWithReactNativeLegal';

export const WithReactNativeLegal = {
  launchLicenseListScreen: (licenseHeaderText?: string) => {
    /**
     * On iOS, the licenses list is displayed as a custom table view controller
     */
    NativeWithReactNativeLegal.launchLicenseListScreen(licenseHeaderText ?? 'OSS Licenses');
  },
};
