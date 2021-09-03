import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SongService } from "../../services/song.service";
import { Song } from "../../services/song.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [SongService]
})
export class ListComponent implements OnInit {

  constructor(public songService: SongService) { }

  ngOnInit() {
    this.refreshData();
  };

  refreshData() {
    this.songService.getSongsList().subscribe(res => {
      this.songService.songs = res as Song[];
    });
  };

}
