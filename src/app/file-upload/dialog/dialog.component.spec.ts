import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FileUploadService } from '../file-upload.service';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
    let component: DialogComponent;
    let fixture: ComponentFixture<DialogComponent>;

    const mockDialogRef = {
        close: jasmine.createSpy('close')
      };
    
    const mockFileUploadService = {
        close:jasmine.createSpy('close')
    }
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[MatDialogModule],
            declarations: [DialogComponent],
            providers: [
            {
                provide: MatDialogRef,
                useValue: mockDialogRef
            },
            {
                provide: FileUploadService,
                useValue: mockFileUploadService
            },
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should Add Files button created', () => {
        const fixture = TestBed.createComponent(DialogComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('button').textContent).toContain('Add Files');
    });

    it('should not include Finish button when the dialog opened', () => {
        const fixture = TestBed.createComponent(DialogComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('button').textContent).not.toContain('Finish');
    });
});