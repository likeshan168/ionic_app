import { Injectable } from '@angular/core';
import { Yundan } from './yundan';

@Injectable()
export class YundanService {
    yundans: Yundan[] = [];
    constructor() {
        this.yundans.push({ no: "123", state: '放行' });
        this.yundans.push({ no: "qwe", state: '查验' });
    }
    getAllYundans(): Yundan[] {
        return this.yundans;
    }

    getYundanByNo(no: string): Yundan[] {
        return this.yundans.filter(yundan => yundan.no === no);
    }
}