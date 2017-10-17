import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import{ListPage} from '../pages/list/list';
// import { TodoModule } from '../pages/todo/todo.module';
import { YundanModule } from '../pages/yundan/yundan.module';
import { AboutComponent } from '../pages/about/about.component';
// import { IonicAudioModule, AudioProvider, WebAudioProvider, defaultAudioProviderFactory, CordovaMediaProvider } from 'ionic-audio';
// export function myCustomAudioProviderFactory() {
//   return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
// }
import { NativeAudio } from '@ionic-native/native-audio';
@NgModule({
  declarations: [
    MyApp,
    AboutComponent 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // IonicAudioModule.forRoot(defaultAudioProviderFactory),
    YundanModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutComponent 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
