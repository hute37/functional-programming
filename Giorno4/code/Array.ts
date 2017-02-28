export class Arr<A> {
  static of<B>(b: B): Arr<B> {
    return new Arr([b])
  }
  constructor(public value: Array<A>) {}
  map<B>(f: (a: A) => B): Arr<B> {
    return new Arr(this.value.map(f))
  }
  chain<B>(f: (a: A) => Arr<B>): Arr<B> {
    return new Arr(this.value.reduce((acc: Array<B>, a) => acc.concat(f(a).value), []))
  }
  ap<B>(fab: Arr<(a: A) => B>): Arr<B> {
    // return new Arr(fab.value.reduce((acc, f) => acc.concat(this.map(f).value), [] as Array<B>))
    return fab.chain(f => this.map(f))
  }
}
