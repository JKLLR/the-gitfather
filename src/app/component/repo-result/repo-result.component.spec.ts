import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoResultComponent } from './repo-result.component';

describe('RepoResultComponent', () => {
  let component: RepoResultComponent;
  let fixture: ComponentFixture<RepoResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
