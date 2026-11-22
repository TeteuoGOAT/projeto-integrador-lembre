import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaTarefasComponent } from './pagina-tarefas.component';

describe('PaginaTarefasComponent', () => {
  let component: PaginaTarefasComponent;
  let fixture: ComponentFixture<PaginaTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaTarefasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaTarefasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
