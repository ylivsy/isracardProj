# isracardProj

IsracardProj represnt a login Component.
the user can log in with Facebook or Google account and the main screen represent user name and logo.


# Installation
 run npm-install in the isracard project to install the node moudles folder and this additional packages - 
    "react-native-elements": "^0.19.0",
    "react-native-facebook-login": "^1.6.1",
    "react-native-google-signin": "^0.12.0",
    "react-native-vector-icons": "^4.5.0",
    "react-navigation": "^1.5.8"
    
# Running on simulator
Make sure you have a simulator with Google Play installed.

Also to help with performances, install HAXM from the Android SDK Manager.

 run react-native run-android.

# Troubleshooting 
 
 Q : 
 after run react-native run-android you see this error => 

* What went wrong:
Execution failed for task ':app:processDebugGoogleServices'.
> Failed to delete: C:\Jini\isracardProj\android\app\build\generated\res\google-services\debug 

A: 
run=> cd android
      gradlew clean
      cd..
      react-native run-android
