import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input() isFavourte: boolean = false;
  email = "";
  representm = "";
  width: number = 100000;
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.isFavourte = !this.isFavourte;
  }
  doSomethin() {
    this.representm = this.email;
  }
}
