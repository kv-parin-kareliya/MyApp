import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipSetComponent } from './chip-set.component';

describe('ChipSetComponent', () => {
  let component: ChipSetComponent;
  let fixture: ComponentFixture<ChipSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
