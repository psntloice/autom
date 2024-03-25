import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OservicesComponent } from './oservices.component';

describe('OservicesComponent', () => {
  let component: OservicesComponent;
  let fixture: ComponentFixture<OservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
