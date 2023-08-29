import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheInfosComponent } from './fiche-infos.component';

describe('FicheInfosComponent', () => {
  let component: FicheInfosComponent;
  let fixture: ComponentFixture<FicheInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheInfosComponent]
    });
    fixture = TestBed.createComponent(FicheInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
