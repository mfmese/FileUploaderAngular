import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse
} from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { FileUploadResponse } from './models/fileUploadResponse';
import { environment } from 'src/environments/environment';

const url = environment.apiUrl; 

@Injectable()
export class FileUploadService {
  constructor(private http: HttpClient) { }

  public getFiles():Observable<FileUploadResponse>{

    let files = new Subject<FileUploadResponse>();

    const request = new HttpRequest('GET', url + "FileUpload/GetAllFiles");
    
    this.http.request(request).subscribe((response:any) => {

      if (response instanceof HttpResponse) {
        files.next(response.body);
        files.complete();
      }
    });

    return files.asObservable();
  }

  public upload(files: Set<File>): { [key: string]: { progress: Observable<number>, body: Observable<FileUploadResponse>  } } {
 
    const fileResponse: { [key: string]: { progress: Observable<number>, body: Observable<FileUploadResponse> } } = {};

    files.forEach(file => {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      const request = new HttpRequest('POST', url + 'FileUpload/UploadFile', formData, {
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

      fileResponse[file.name] = {
        progress: progress.asObservable(),
        body: body.asObservable()
      };
    });

    return fileResponse;
  }
}
