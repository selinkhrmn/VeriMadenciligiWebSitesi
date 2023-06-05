import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UygulamaComponent } from './uygulama.component';

describe('UygulamaComponent', () => {
  let component: UygulamaComponent;
  let fixture: ComponentFixture<UygulamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UygulamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UygulamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
