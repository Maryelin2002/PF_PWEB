import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadvisitasComponent } from './cantidadvisitas.component';

describe('CantidadvisitasComponent', () => {
  let component: CantidadvisitasComponent;
  let fixture: ComponentFixture<CantidadvisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantidadvisitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadvisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
