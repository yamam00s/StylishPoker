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

  private isAllSame(cards: Card[], comparison: 'mark' | 'number'): boolean {
    return cards.every(current => cards[0][comparison] === current[comparison]);
  }

  private getPairs(comparison: 'mark' | 'number'): Card[] {
    return this.hand.filter(current => {
      return this.hand.find(
        item => item !== current && item[comparison] === current[comparison],
      );
    });
  }

  private getNumberPairsLength(): number {
    const pairs = this.getPairs('number');
    return pairs.length;
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

  private checkFourCard(): boolean {
    const pairs = this.getPairs('number');
    if (this.getNumberPairsLength() === 4 && this.isAllSame(pairs, 'number')) {
      this.result = 'フォーカード👍👍👍👍';
      return true;
    }
    return false;
  }

  private checkThreeCard(): boolean {
    if (this.getNumberPairsLength() === 3) {
      this.result = 'スリーカード👍👍👍';
      return true;
    }
    return false;
  }

  private checkTwoPair(): boolean {
    if (this.getNumberPairsLength() / 2 === 2) {
      this.result = 'ツーペア👍👍';
      return true;
    }
    return false;
  }

  private checkOnePair(): boolean {
    if (this.getNumberPairsLength() / 2 === 1) {
      this.result = 'ワンペア👍';
      return true;
    }
    return false;
  }

  public Judge(): void {
    /* eslint-disable */
    if (this.checkFourCard()) return;
    if (this.checkThreeCard()) return;
    if (this.checkTwoPair()) return;
    if (this.checkOnePair()) return;
  }
}
