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
    this.resetter();
    this.refreshData();
  };

  resetter(form?: NgForm) {
    if (form) {
      form.reset();
    };
    this.songService.selectedSong = {
      _id: "",
      title: "",
      artist: "",
      year: "",
      language: "",
      genre: ""
    };
  };

  refreshData() {
    this.songService.getSongsList().subscribe(res => {
      this.songService.songs = res as Song[];
    });
  };

  onDelete(_id: string, title: string, artist: string) {
    console.log(_id);
    if (confirm(`Are you sure you want to remove ${artist} - ${title}?`) === true) {
      this.songService.deleteSong(_id).subscribe(res => {
        alert("Song removed correctly");
        this.refreshData();
      });
    };
  };

  submitterToUpdate(form: NgForm) {
    this.songService.putSong(form.value).subscribe(res => {
      this.resetter();
      alert("The song has been updated successfully!");
      this.resetter(form);
      this.refreshData();
    });
  };

  onEdit(song: Song) {
    this.songService.selectedSong = song;
  };

}
