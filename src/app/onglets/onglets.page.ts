import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onglets',
  templateUrl: './onglets.page.html',
  styleUrls: ['./onglets.page.scss'],
})
export class OngletsPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // if(this.route.p != '')
    // localStorage.removeItem("cat");
  }

}
