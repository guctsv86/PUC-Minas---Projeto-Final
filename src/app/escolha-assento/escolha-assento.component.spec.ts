import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaAssentoComponent } from './escolha-assento.component';

describe('EscolhaAssentoComponent', () => {
  let component: EscolhaAssentoComponent;
  let fixture: ComponentFixture<EscolhaAssentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscolhaAssentoComponent]
    });
    fixture = TestBed.createComponent(EscolhaAssentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
