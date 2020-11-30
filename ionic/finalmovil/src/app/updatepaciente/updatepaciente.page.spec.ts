import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatepacientePage } from './updatepaciente.page';

describe('UpdatepacientePage', () => {
  let component: UpdatepacientePage;
  let fixture: ComponentFixture<UpdatepacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepacientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatepacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
