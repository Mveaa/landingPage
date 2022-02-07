export class InitialScrollEventParams {
  public scrollTop = 0;
  public height = 0;
  public scrollHeight = 0;
  public offsetTop = 0;
}

export class ScrollEventParams extends InitialScrollEventParams {
  constructor(elem: HTMLElement) {
    super();
    this.scrollHeight = elem.scrollHeight;
    this.height = elem.offsetHeight;
    this.scrollTop = elem.scrollTop;
    this.offsetTop = elem.getBoundingClientRect().top;
  }
}
