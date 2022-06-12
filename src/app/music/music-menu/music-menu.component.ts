import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-music-menu',
  templateUrl: './music-menu.component.html',
  styleUrls: ['./music-menu.component.scss'],
})
export class MusicMenuComponent implements OnInit {
  menuIsOpen: boolean = false

  constructor() { }

  ngOnInit(): void {}

  openMusicMenu() {
    this.menuIsOpen = true;
  }

  appOnMenuStateEmit(menuState: boolean) {
    this.menuIsOpen = menuState;
  }

}
