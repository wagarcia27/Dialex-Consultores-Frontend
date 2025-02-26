import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaExternaComponent } from './auditoria-externa.component';

describe('AuditoriaExternaComponent', () => {
  let component: AuditoriaExternaComponent;
  let fixture: ComponentFixture<AuditoriaExternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditoriaExternaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriaExternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
