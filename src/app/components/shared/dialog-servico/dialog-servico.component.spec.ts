import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogServicoComponent } from './dialog-servico.component';

describe('DialogServicoComponent', () => {
  let component: DialogServicoComponent;
  let fixture: ComponentFixture<DialogServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
