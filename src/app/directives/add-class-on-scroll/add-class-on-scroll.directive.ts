import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map,startWith } from 'rxjs/operators';
import { ScrollEventParams } from './scroll-params';

@Directive({
  selector: '[addClassOnScroll]',
})
export class AddClassOnScrollDirective implements OnInit, OnDestroy {
  @Input()
  public addClassOnScroll = '';
  // @ts-ignore
  private scrollPositionSubs: Subscription;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {}

  ngOnInit(): void {
    this.scrollPositionSubs = fromEvent<UIEvent>(window, 'scroll', {passive: false}).pipe(
      map(() => new ScrollEventParams(window.document.body)),
      startWith(new ScrollEventParams(window.document.body)),
      map(scrollParams => scrollParams.offsetTop < 0),
    ).subscribe((scrolledDown: boolean) => this.toggle(scrolledDown));
  }

  ngOnDestroy() {
    this.scrollPositionSubs.unsubscribe();
  }

  toggle(applyClass: boolean) {
    applyClass ?
      this.renderer.addClass(this.hostElement.nativeElement, this.addClassOnScroll) :
      this.renderer.removeClass(this.hostElement.nativeElement, this.addClassOnScroll);
  }
}
