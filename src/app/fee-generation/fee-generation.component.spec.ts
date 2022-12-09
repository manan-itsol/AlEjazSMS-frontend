import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeGenerationComponent } from './fee-generation.component';

describe('FeeGenerationComponent', () => {
  let component: FeeGenerationComponent;
  let fixture: ComponentFixture<FeeGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
