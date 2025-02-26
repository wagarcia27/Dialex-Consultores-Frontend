import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisoriaFiscalComponent } from './revisoria-fiscal.component';

describe('RevisoriaFiscalComponent', () => {
  let component: RevisoriaFiscalComponent;
  let fixture: ComponentFixture<RevisoriaFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisoriaFiscalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisoriaFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
