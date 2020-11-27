import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FechaPage } from './fecha.page';

describe('FechaPage', () => {
  let component: FechaPage;
  let fixture: ComponentFixture<FechaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FechaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
