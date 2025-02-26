import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostosIndustrialesComponent } from './costos-industriales.component';

describe('CostosIndustrialesComponent', () => {
  let component: CostosIndustrialesComponent;
  let fixture: ComponentFixture<CostosIndustrialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostosIndustrialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostosIndustrialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
