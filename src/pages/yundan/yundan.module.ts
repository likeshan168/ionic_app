import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { MyApp } from '../../app/app.component';
import { YundanListComponent } from './list/list.component';
import { YundanItemComponent } from './item/item.component';
import { YundanService } from './yundan.service';

@NgModule({
  imports: [IonicModule.forRoot(MyApp)],
  declarations: [YundanListComponent, YundanItemComponent],
  entryComponents: [YundanListComponent],
  providers: [YundanService],
  exports: [IonicModule]
})
export class YundanModule { }