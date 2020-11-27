import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacientePage } from './paciente.page';

describe('PacientePage', () => {
  let component: PacientePage;
  let fixture: ComponentFixture<PacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
