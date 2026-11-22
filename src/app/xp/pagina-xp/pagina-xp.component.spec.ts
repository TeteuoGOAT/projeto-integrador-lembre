import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaXpComponent } from './pagina-xp.component';

describe('PaginaXpComponent', () => {
  let component: PaginaXpComponent;
  let fixture: ComponentFixture<PaginaXpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaXpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaXpComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
