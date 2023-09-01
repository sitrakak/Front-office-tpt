import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEtapeComponent } from './details-etape.component';

describe('DetailsEtapeComponent', () => {
  let component: DetailsEtapeComponent;
  let fixture: ComponentFixture<DetailsEtapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsEtapeComponent]
    });
    fixture = TestBed.createComponent(DetailsEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
