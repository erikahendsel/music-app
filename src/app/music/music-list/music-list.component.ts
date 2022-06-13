import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MusicList } from 'src/app/interfaces/music-list';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss'],
})
export class MusicListComponent implements OnInit {

  @Input() musicList: MusicList[] = [];
  @Output() isMenuOpen = new EventEmitter<boolean>();
  @Output() selectedSongId = new EventEmitter<MusicList>();

  constructor() { }

  ngOnInit(): void {
  }

  appOnSongClicked(songId: MusicList) {
    this.selectedSongId.emit(songId);
    this.closeMenu();
  }

  closeMenu() {
    this.isMenuOpen.emit(false)
  }

}
