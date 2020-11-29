import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconsultaComponent } from './updateconsulta.component';

describe('UpdateconsultaComponent', () => {
  let component: UpdateconsultaComponent;
  let fixture: ComponentFixture<UpdateconsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateconsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
