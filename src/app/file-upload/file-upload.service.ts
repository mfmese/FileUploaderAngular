import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse
} from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { FileUploadResponse } from './models/fileUploadResponse';

const url = 'http://localhost:3000/FileUpload/UploadFile';

@Injectable()
export class FileUploadService {
  constructor(private http: HttpClient) { }

  public getFiles():Observable<FileUploadResponse>{

    let files = new Subject<FileUploadResponse>();

    const request = new HttpRequest('GET', "http://localhost:3000/FileUpload/GetAllFiles");
    
    this.http.request(request).subscribe((response:any) => {

      if (response instanceof HttpResponse) {
        files.next(response.body);
        files.complete();
      }
    });

    return files.asObservable();
  }

  public upload(
    files: Set<File>
  ): { [key: string]: { progress: Observable<number>, body: Observable<FileUploadResponse>  } } {
 
    const status: { [key: string]: { progress: Observable<number>, body: Observable<FileUploadResponse> } } = {};

    files.forEach(file => {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      const request = new HttpRequest('POST', url, formData, {
        reportProgress: true
      });
      const progress = new Subject<number>();
      let body = new Subject<FileUploadResponse>();
      this.http.request(request).subscribe((event:any) => {
        if (event.type === HttpEventType.UploadProgress) {
          const percentDone = Math.round((100 * event.loaded) / event.total);
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          body.next(event.body);
          progress.complete();
          body.complete()
        }
      });

      status[file.name] = {
        progress: progress.asObservable(),
        body: body.asObservable()
      };
    });

    // return the map of progress.observables
    return status;
  }
}
