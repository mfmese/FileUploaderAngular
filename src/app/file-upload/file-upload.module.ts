import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { MatButtonModule, MatDialogModule, MatListModule, MatProgressBarModule, MatTableModule, MatSortModule  } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileUploadService } from './file-upload.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatListModule, FlexLayoutModule, HttpClientModule, BrowserAnimationsModule, MatProgressBarModule, MatTableModule, MatSortModule ],
  declarations: [FileUploadComponent, DialogComponent],
  exports: [FileUploadComponent],
  entryComponents: [DialogComponent], 
  providers: [FileUploadService]
})
export class FileUploadModule { }
