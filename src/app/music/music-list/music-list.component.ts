import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MusicList } from 'src/app/interfaces/music-list';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicListComponent implements OnInit {

  @Output() isMenuOpen = new EventEmitter<boolean>();
  musicList: MusicList[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getMusicList();
  }

  closeMenu() {
    this.isMenuOpen.emit(false)
  }

  getMusicList() {
    this.httpClient.get<MusicList[]>('assets/json/music-list.json').subscribe((res) => {
    this.musicList = res;
      console.log('--- result :: ',  res);
    });
  }

}
