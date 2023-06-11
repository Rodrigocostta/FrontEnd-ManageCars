import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogclienteComponent } from './dialog-cliente.component';

describe('Dailog', () => {
  let component: DialogclienteComponent;
  let fixture: ComponentFixture<DialogclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
