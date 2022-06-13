import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MusicList } from 'src/app/interfaces/music-list';

@Component({
  selector: 'app-music-menu',
  templateUrl: './music-menu.component.html',
  styleUrls: ['./music-menu.component.scss'],
})
export class MusicMenuComponent implements OnInit {

  menuIsOpen: boolean = false
  currentSong: MusicList = {} as MusicList;
  musicList: MusicList[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getMusicList();
  }

  openMusicMenu() {
    this.menuIsOpen = true;
  }

  appOnMenuStateEmit(menuState: boolean) {
    this.menuIsOpen = menuState;
  }

  appOnSelectedSongEmit(selectedSong: MusicList) {
    this.currentSong = selectedSong;
  }

  getMusicList() {
    this.httpClient.get<MusicList[]>('assets/json/music-list.json').subscribe((res: MusicList[]) => {
      this.musicList = res;
      this.currentSong = res[0];
    });
  }

}
