import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MusicList } from 'src/app/interfaces/music-list';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss'],
})
export class MusicListComponent implements OnInit {

  @Output() isMenuOpen = new EventEmitter<boolean>();
  @Output() selectedSongId = new EventEmitter<MusicList>();

  musicList: MusicList[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getMusicList();
  }

  appOnSongClicked(songId: MusicList) {
    this.selectedSongId.emit(songId);
    this.closeMenu();
  }

  closeMenu() {
    this.isMenuOpen.emit(false)
  }

  getMusicList() {
    this.httpClient.get<MusicList[]>('assets/json/music-list.json').subscribe((res) => {
      this.musicList = res;
    });
  }

}
