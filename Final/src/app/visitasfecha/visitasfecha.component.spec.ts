import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasfechaComponent } from './visitasfecha.component';

describe('VisitasfechaComponent', () => {
  let component: VisitasfechaComponent;
  let fixture: ComponentFixture<VisitasfechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitasfechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasfechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
