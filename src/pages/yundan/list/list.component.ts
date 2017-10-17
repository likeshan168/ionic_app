import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Yundan } from '../yundan';
import { YundanService } from '../yundan.service';
import { AboutComponent } from "../../about/about.component";
// import { AudioProvider } from 'ionic-audio';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
    selector: 'yundan-list',
    templateUrl: 'list.component.html'
})
export class YundanListComponent implements OnInit {
    audios: any[];
    yundan: Yundan = new Yundan();
    yundans: Yundan[] = [];
    ngOnInit(): void {
        this.yundans = this.todoService.getAllYundans();
        this.nativeAudio.preloadSimple('chayan', 'assets/audio/chayan.wav');
        this.nativeAudio.preloadSimple('fangxing', 'assets/audio/fangxing.wav');
        this.nativeAudio.preloadSimple('nomethod', 'assets/audio/nomethod.wav');
        this.nativeAudio.preloadSimple('nostate', 'assets/audio/nostate.wav');
        this.nativeAudio.preloadSimple('nodata', 'assets/audio/nodata.wav');
    }

    constructor(public navCtrl: NavController, private todoService: YundanService, private nativeAudio: NativeAudio) { }

    getYundanByNo($event) {
        if (!this.yundan.no.trim()) {
            this.yundans = this.todoService.getAllYundans();
            return;
        }
        $event.target.select();
        this.yundans = this.todoService.getYundanByNo(this.yundan.no.trim());
        //播放声音
        if (this.yundans.length == 0) {
            // this.audioProvider.play(2);
            this.nativeAudio.play("nodata");
            
        } else if (this.yundans.length == 1) {
            let yd = this.yundans[0];
            if (yd.state == "放行") {
                this.nativeAudio.play("fangxing");
            } else if (yd.state == "查验") {
                this.nativeAudio.play("chayan");

            } else if (yd.state == "") {
                this.nativeAudio.play("nostate");
            }
        } else {
            this.nativeAudio.play("nomethod");
        }
    }
    // get yundans() {
    //     return this.todoService.getAllYundans();
    // }
    gotoAbout() {
        this.navCtrl.push(AboutComponent)
    }
}