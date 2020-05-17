import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private masterData: BehaviorSubject<any> = new BehaviorSubject('');

  constructor() { }

  setData(receivedData: any) {
    this.masterData.next(receivedData);
  }

  getData(): Observable<any> {
    return this.masterData.asObservable();
  }
}
