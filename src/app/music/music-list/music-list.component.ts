import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  @Output() isMenuOpen = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu() {
    this.isMenuOpen.emit(false)
  }

}
