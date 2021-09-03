import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SongService } from "../../services/song.service";
import { Song } from "../../services/song.model";

@Component({
  selector: 'app-add-song-form',
  templateUrl: './add-song-form.component.html',
  styleUrls: ['./add-song-form.component.css'],
  providers: [SongService]
})
export class AddSongFormComponent implements OnInit {

  constructor(public songService: SongService) { }

  ngOnInit() {
    this.resetter();
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

  submitter(form: NgForm) {
    this.songService.postSong(form.value).subscribe(res => {
      this.resetter();
      alert("The song has been added successfully!");
    });
  };

}
