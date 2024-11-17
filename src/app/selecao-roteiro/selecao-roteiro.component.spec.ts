import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoRoteiroComponent } from './selecao-roteiro.component';

describe('SelecaoRoteiroComponent', () => {
  let component: SelecaoRoteiroComponent;
  let fixture: ComponentFixture<SelecaoRoteiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecaoRoteiroComponent]
    });
    fixture = TestBed.createComponent(SelecaoRoteiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
