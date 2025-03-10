package com.withreactnativelegal

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = WithReactNativeLegalModule.NAME)
class WithReactNativeLegalModule(
    reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = NAME

    @ReactMethod
    fun launchLicenseListScreen(licenseHeaderText: String) {
        WithReactNativeLegalModuleImpl.launchLicenseListScreen(reactApplicationContext, licenseHeaderText)
    }

    companion object {
        const val NAME = WithReactNativeLegalModuleImpl.NAME
    }
}
