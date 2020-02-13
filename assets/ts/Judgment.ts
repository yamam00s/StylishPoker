/* eslint-disable eslint-comments/no-unlimited-disable */
import Card from './Card';

export default class Judgment {
  public readonly hand!: Card[];
  private _result!: string;

  constructor(init: Partial<Judgment>) {
    Object.assign(this, init);
    this._result = 'ブタ🐖';
  }

  get result(): string {
    return this._result;
  }

  set result(result: string) {
    this._result = result;
  }

  private checkPairNumber(): number {
    const pairs = this.hand.filter(current => {
      return this.hand.find(
        item => item !== current && item.number === current.number,
      );
    });
    console.log(pairs);
    return pairs.length / 2;
  }

  // private checkRoyalStraightFlush(): void {
  //   const pokerHand: Card[] = [10, 11, 12, 13, 1].reduce(
  //     (prev: Card[], num: number) => {
  //       prev.push(new Card({mark: '♠️', number: num}));
  //       return prev;
  //     },
  //     [],
  //   );
  // }

  private checkOnePair(): boolean {
    if (this.checkPairNumber() === 1) {
      this.result = 'ワンペア👍';
      return true;
    }
    return false;
  }

  private checkTwoPair(): boolean {
    if (this.checkPairNumber() === 2) {
      this.result = 'ツーペア👍👍';
      return true;
    }
    return false;
  }

  public Judge(): void {
    /* eslint-disable */
    if (this.checkOnePair()) return;
    if (this.checkTwoPair()) return;

  }
}
