package com.withreactnativelegal

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = WithReactNativeLegalModule.NAME)
class WithReactNativeLegalModule(
    reactContext: ReactApplicationContext
) : NativeWithReactNativeLegalSpec(reactContext) {
    override fun getName() = NAME

    override fun launchLicenseListScreen(licenseHeaderText: String) {
        WithReactNativeLegalModuleImpl.launchLicenseListScreen(reactApplicationContext, licenseHeaderText)
    }

    companion object {
        const val NAME = WithReactNativeLegalModuleImpl.NAME
    }
}
