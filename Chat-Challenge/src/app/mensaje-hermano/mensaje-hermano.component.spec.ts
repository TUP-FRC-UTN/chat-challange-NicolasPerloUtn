import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeHermanoComponent } from './mensaje-hermano.component';

describe('MensajeHermanoComponent', () => {
  let component: MensajeHermanoComponent;
  let fixture: ComponentFixture<MensajeHermanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeHermanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeHermanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
