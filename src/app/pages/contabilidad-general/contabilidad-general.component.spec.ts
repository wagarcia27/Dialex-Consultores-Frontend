import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabilidadGeneralComponent } from './contabilidad-general.component';

describe('ContabilidadGeneralComponent', () => {
  let component: ContabilidadGeneralComponent;
  let fixture: ComponentFixture<ContabilidadGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContabilidadGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContabilidadGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
