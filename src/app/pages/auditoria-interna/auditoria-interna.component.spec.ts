import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaInternaComponent } from './auditoria-interna.component';

describe('AuditoriaInternaComponent', () => {
  let component: AuditoriaInternaComponent;
  let fixture: ComponentFixture<AuditoriaInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditoriaInternaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
