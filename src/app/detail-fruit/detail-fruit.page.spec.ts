import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailFruitPage } from './detail-fruit.page';

describe('DetailFruitPage', () => {
  let component: DetailFruitPage;
  let fixture: ComponentFixture<DetailFruitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailFruitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
