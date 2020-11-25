import { Component, OnInit } from '@angular/core';
import * as data from '../assets/app';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    images = data.images;
    imageList = [];

    constructor() { }

    ngOnInit() {
        const imgProps = Object.keys(this.images)
        for (let prop of imgProps) {
            this.imageList.push(this.images[prop])
        }
        console.log("Images: ", this.imageList)
    }
}
