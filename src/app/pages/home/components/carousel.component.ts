import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

const enum CarouselSize {
  LARGE = 4,
  MEDIUM = 3,
  SMALL = 2
}

@Component({
  selector: 'app-home-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carousel')
  public carousel: ElementRef;
  private container: HTMLDivElement;
  private slides: number;
  private interval: number;

  constructor() { }

  ngAfterViewInit(): void {
    this.container = this.carousel.nativeElement as HTMLDivElement;
    this.slides = this.container.children.length;

    let i = 0;
    const limit = this.slides - CarouselSize.LARGE;

    this.interval = setInterval(() => {
      if (i < limit) {
        i++;
      } else {
        i = 0;
      }

      this.container.style.transform = `translateX(${i * -25}%)`;
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
