import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Song } from "./song.model";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  selectedSong!: Song;
  songs!: Song[];
  readonly baseUrl = "http://localhost:8082/songs";

  constructor(private http: HttpClient) { }

  getSongsList() {
    return this.http.get(this.baseUrl);
  };

  postSong(song: Song) {
    return this.http.post(this.baseUrl, song);
  };

  putSong(song: Song) {
    return this.http.put(this.baseUrl + `/${song._id}`, song);
  };

  deleteSong(_id: string) {
    return this.http.delete(this.baseUrl + '/${_id}');
  };
}
