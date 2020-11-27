import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicosPage } from './medicos.page';

describe('MedicosPage', () => {
  let component: MedicosPage;
  let fixture: ComponentFixture<MedicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
