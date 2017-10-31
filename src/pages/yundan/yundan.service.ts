import {Injectable} from '@angular/core';
import {LoadingController, Platform} from 'ionic-angular';
// import {Storage} from '@ionic/storage';
import {AlertController} from 'ionic-angular';
import {Http, Response} from '@angular/http';
import {Yundan} from './yundan';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import {StorageService} from './StorageService';

// import {isArray} from "ionic-angular/util/util";

@Injectable()
export class YundanService {
  yundans: Yundan[] = [];
  url: string = "http://101.201.28.235/Services/YD/YunDanService/GetList";

  constructor(private http: Http,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private storage: StorageService,
              private platform: Platform) {
    this.getData();
  }

  getAllYundans(): Yundan[] {
    return this.storage.read<Yundan[]>('yd');
  }

  getData(): void {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let webUrl = this.platform.is("android") ? this.url : "/GetList";
    this.httpGetNoAuth(webUrl).then(json => {
      // this.storage.write('yd', json);
      this.yundans = JSON.parse(json);
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: '提示',
        subTitle: '同步数据成功',
        buttons: ['Ok']
      });
      alert.present();
    }).catch(err => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: '错误',
        subTitle: '同步数据出错:' + err,
        buttons: ['Ok']
      });
      alert.present();
    })
  }

  getYundanByNo(no: string): Yundan[] {
    // console.log(isArray(this.yundans));
    // console.log(this.yundans);
    return this.yundans.filter(yundan => yundan.No === no);
  }

  public httpGetNoAuth(url: string) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this.http.get(url, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        // this.handleError(err);
        throw err;
      });
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
