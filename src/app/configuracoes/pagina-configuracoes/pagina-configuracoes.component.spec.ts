import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaConfiguracoesComponent } from './pagina-configuracoes.component';

describe('PaginaConfiguracoesComponent', () => {
  let component: PaginaConfiguracoesComponent;
  let fixture: ComponentFixture<PaginaConfiguracoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaConfiguracoesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaConfiguracoesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
