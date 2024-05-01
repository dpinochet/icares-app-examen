import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamenDetallePage } from './examen-detalle.page';

describe('ExamenDetallePage', () => {
  let component: ExamenDetallePage;
  let fixture: ComponentFixture<ExamenDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamenDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
