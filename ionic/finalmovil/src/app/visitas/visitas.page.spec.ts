import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitasPage } from './visitas.page';

describe('VisitasPage', () => {
  let component: VisitasPage;
  let fixture: ComponentFixture<VisitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
