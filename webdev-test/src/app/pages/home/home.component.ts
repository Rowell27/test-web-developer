import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/app';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    images = data.images;
    imageList = [];

    constructor() { }

    ngOnInit() {
        const imgProps = Object.keys(this.images)
        for (let prop of imgProps) {
            this.imageList.push(this.images[prop])
        }
    }
}
