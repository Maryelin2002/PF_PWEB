import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZodiacoPage } from './zodiaco.page';

describe('ZodiacoPage', () => {
  let component: ZodiacoPage;
  let fixture: ComponentFixture<ZodiacoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZodiacoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZodiacoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
