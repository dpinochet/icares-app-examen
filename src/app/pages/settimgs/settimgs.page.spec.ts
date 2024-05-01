import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettimgsPage } from './settimgs.page';

describe('SettimgsPage', () => {
  let component: SettimgsPage;
  let fixture: ComponentFixture<SettimgsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettimgsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettimgsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
