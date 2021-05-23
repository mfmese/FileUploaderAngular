import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material';

import { FileUploadComponent } from './file-upload.component';
import { FileUploadService } from './file-upload.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { FileUploadResponse } from './models/fileUploadResponse';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;
  let httpMock: HttpTestingController;
  let fileUploadService: FileUploadService;


  const mockDialog = {
    close: jasmine.createSpy('close')
  };

  const mockFileUploadService = {
    close:jasmine.createSpy('close')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ FileUploadComponent ],
      providers: [
          {
              provide: MatDialog,
              useValue: mockDialog
          },
          {
            provide: FileUploadService
          },
        ]
    })
    .compileComponents();
  });

    

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fileUploadService = TestBed.get(FileUploadService);
    httpMock = TestBed.get(HttpTestingController);
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('calls the fake service getFiles() method', function() {
    
    var result = new Observable<FileUploadResponse>(); 
      fileUploadService.getFiles = jasmine.createSpy().and.returnValue(result);
      expect(fileUploadService.getFiles()).toBeTruthy(of(result));
  });

  it('should render Updated Files table', () => {
    const fixture = TestBed.createComponent(FileUploadComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Uploaded Files');
  });

});
