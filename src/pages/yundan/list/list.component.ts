import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Yundan} from '../yundan';
import {YundanService} from '../yundan.service';
import {AboutComponent} from "../../about/about.component";
// import { AudioProvider } from 'ionic-audio';
import {NativeAudio} from '@ionic-native/native-audio';

@Component({
  selector: 'yundan-list',
  templateUrl: 'list.component.html'
})
export class YundanListComponent implements OnInit {
  audios: any[];
  yundan: Yundan = new Yundan();
  yundans: Yundan[] = [];

  ngOnInit(): void {
    //this.yundans = this.todoService.getAllYundans();
    // console.log(this.yundans);
    //初始化这个音频
    this.nativeAudio.preloadSimple('chayan', 'assets/audio/chayan.wav');
    this.nativeAudio.preloadSimple('fangxing', 'assets/audio/fangxing.wav');
    this.nativeAudio.preloadSimple('nomethod', 'assets/audio/nomethod.wav');
    this.nativeAudio.preloadSimple('nostate', 'assets/audio/nostate.wav');
    this.nativeAudio.preloadSimple('nodata', 'assets/audio/nodata.wav');
  }

  constructor(public navCtrl: NavController, private yundanService: YundanService, private nativeAudio: NativeAudio) {
  }

  getYundanByNo($event) {
    if (!this.yundan.No.trim()) {
      // this.yundans = this.todoService.getAllYundans();
      this.yundans = [];
      return;
    }
    $event.target.select();
    this.yundans = this.yundanService.getYundanByNo(this.yundan.No.trim());
    console.log(this.yundans);
    //播放声音
    if (this.yundans.length == 0) {
      // this.audioProvider.play(2);
      this.nativeAudio.play("nodata");

    } else if (this.yundans.length == 1) {
      let yd = this.yundans[0];
      if (yd.State == "放行") {
        this.nativeAudio.play("fangxing");
      } else if (yd.State == "查验") {
        this.nativeAudio.play("chayan");

      } else if (yd.State == "") {
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

  refresh() {
    this.yundanService.getData();
  }
}
