#import "WithReactNativeLegalModule.h"

#import "WithReactNativeLegal-Swift.h"

#if RCT_NEW_ARCH_ENABLED
#import "WithReactNativeLegal.h"

@interface WithReactNativeLegalModule () <NativeWithReactNativeLegalSpec>
@end
#endif

@implementation WithReactNativeLegalModule

RCT_EXPORT_MODULE(WithReactNativeLegalModule)

RCT_EXPORT_METHOD(launchLicenseListScreen : (NSString *)licenseHeaderText)
{
    [WithReactNativeLegalModuleImpl launchLicenseListScreenWithLicenseHeaderText:licenseHeaderText];
}

#if RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeWithReactNativeLegalSpecJSI>(params);
}
#endif

@end
