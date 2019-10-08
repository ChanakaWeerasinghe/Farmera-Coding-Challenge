import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-log-book',
  templateUrl: './log-book.page.html',
  styleUrls: ['./log-book.page.scss'],
})
export class LogBookPage implements OnInit {
  data: any;
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit() {

    this.data=this.route.snapshot.paramMap.get('data');
  }

}
