import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistromedicosComponent } from './registromedicos.component';

describe('RegistromedicosComponent', () => {
  let component: RegistromedicosComponent;
  let fixture: ComponentFixture<RegistromedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistromedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistromedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
