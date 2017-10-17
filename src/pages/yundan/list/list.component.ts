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
        this.nativeAudio.preloadSimple('chayan', 'assets/audio/chayan.wav').then((msg)=>{},(msg)=>{

            console.log(msg);
        });
        
    }

    constructor(public navCtrl: NavController, private todoService: YundanService, private nativeAudio: NativeAudio) { }

    getYundanByNo($event) {
        if (!this.yundan.no.trim()) {
            this.yundans = this.todoService.getAllYundans();
        }
        $event.target.select();
        this.yundans = this.todoService.getYundanByNo(this.yundan.no.trim());
        //播放声音
        if (this.yundans.length == 0) {
            // this.audioProvider.play(2);

        } else if (this.yundans.length == 1) {
            let yd = this.yundans[0];
            if (yd.state == "放行") {
                
            } else if (yd.state == "查验") {
                console.log("查验")
                this.nativeAudio.play("chayan",()=>{
                    console.log("play complete")
                });
            } else if (yd.state == "") {
                
            }
        } else {
            
        }
    }
    // get yundans() {
    //     return this.todoService.getAllYundans();
    // }
    gotoAbout() {
        this.navCtrl.push(AboutComponent)
    }
}