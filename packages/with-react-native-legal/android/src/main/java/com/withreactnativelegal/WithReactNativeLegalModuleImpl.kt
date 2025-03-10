package com.withreactnativelegal

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.mikepenz.aboutlibraries.LibsBuilder

object WithReactNativeLegalModuleImpl {
    const val NAME = "WithReactNativeLegalModule"

    fun launchLicenseListScreen(reactContext: ReactApplicationContext, licenseHeaderText: String) {
        val context = reactContext.currentActivity ?: return
        val intent = Intent(context, WithReactNativeLegalActivity::class.java).apply {
            this.putExtra("data", LibsBuilder())
            this.putExtra(LibsBuilder.BUNDLE_TITLE, licenseHeaderText)
        }

        context.startActivity(intent)
    }
}
