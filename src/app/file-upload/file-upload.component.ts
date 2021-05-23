import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { FileUploadService } from './file-upload.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FileInfo } from './models/fileInfo';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit, AfterViewInit {
  data: FileInfo[] = [];
  displayedColumns: string[] = ['FileName', 'FileSize', 'FileType', 'UploadedDate'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }
  constructor(public dialog: MatDialog, public uploadService: FileUploadService) { 

  }

  ngOnInit(): void { 
    this.uploadService.getFiles().subscribe(x=> {this.dataSource.data = x.data; });
  }

  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
