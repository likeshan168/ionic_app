import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {HttpModule} from '@angular/http';
// import {LoadingController} from 'ionic-angular';
// import {Storage} from '@ionic/storage';
// import {AlertController} from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import {YundanListComponent} from './list/list.component';
import {YundanItemComponent} from './item/item.component';
import {YundanService} from './yundan.service';
import {StorageService} from './StorageService';

@NgModule({
  imports: [IonicModule.forRoot(MyApp),HttpModule],
  declarations: [YundanListComponent, YundanItemComponent],
  entryComponents: [YundanListComponent],
  providers: [StorageService,YundanService],
  exports: [IonicModule]
})
export class YundanModule {
}
