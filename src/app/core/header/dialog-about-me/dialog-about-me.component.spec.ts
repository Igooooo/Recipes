import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAboutMeComponent } from './dialog-about-me.component';

describe('DialogAboutMeComponent', () => {
  let component: DialogAboutMeComponent;
  let fixture: ComponentFixture<DialogAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
