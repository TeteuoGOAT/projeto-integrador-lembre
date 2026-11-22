import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaAmigosComponent } from './pagina-amigos.component';

describe('PaginaAmigosComponent', () => {
  let component: PaginaAmigosComponent;
  let fixture: ComponentFixture<PaginaAmigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaAmigosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaAmigosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
