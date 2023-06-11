import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOrdemServicoComponent } from './info-ordem-servico.component';

describe('InfoOrdemServicoComponent', () => {
  let component: InfoOrdemServicoComponent;
  let fixture: ComponentFixture<InfoOrdemServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoOrdemServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
