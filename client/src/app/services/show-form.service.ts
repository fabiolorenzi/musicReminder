import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShowFormService {
  private showUpdateForm: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleShowUpdateForm(): void {
    this.showUpdateForm = !this.showUpdateForm;
    this.subject.next(this.showUpdateForm);
  };

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  };
}
