export class Node {
  public data: any;
  public next: Node | null = null;

  public constructor(data?: any) {
    this.data = data != null || data != undefined ? data : null;
    this.next = null;
  }
}
