import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Yundan } from '../yundan';
import { YundanService } from '../yundan.service';

@Component({
    selector: 'yundan-item',
    templateUrl: './item.component.html'
})
export class YundanItemComponent {
    @Input() yundan: Yundan;

    constructor(public navCtrl: NavController, private yundanService: YundanService) {
    }
}