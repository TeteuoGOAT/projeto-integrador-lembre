import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaCalendarioComponent } from './pagina-calendario.component';

describe('PaginaCalendarioComponent', () => {
  let component: PaginaCalendarioComponent;
  let fixture: ComponentFixture<PaginaCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaCalendarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaCalendarioComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
