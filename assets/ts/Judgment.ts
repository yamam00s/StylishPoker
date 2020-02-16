/* eslint-disable eslint-comments/no-unlimited-disable */
import Card from './Card';

const isAllSame = (cards: Card[], comparison: 'mark' | 'number'): boolean => {
  return cards.every(card => cards[0][comparison] === card[comparison]);
};

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

  get handNumber(): number[] {
    return this.hand.map(current => current.number);
  }

  set result(result: string) {
    this._result = result;
  }

  private getPairs(comparison: 'mark' | 'number'): Card[] {
    return this.hand.filter(card => {
      return this.hand.find(
        item => item !== card && item[comparison] === card[comparison],
      );
    });
  }

  private getNumberPairsLength(): number {
    const pairs = this.getPairs('number');
    return pairs.length;
  }

  private isSerialNumber(): boolean {
    const handNumberByAsc = this.handNumber.sort((a, b) => a - b);
    return handNumberByAsc.every(
      (cardNum, i) => i === 0 || cardNum - handNumberByAsc[i - 1] === 1,
    );
  }

  /* ポーカーの役を判定するメソッド */

  private checkRoyalStraightFlush(): boolean {
    const royalNumber = [10, 11, 12, 13, 1];
    const isRoyalNumber =
      [...new Set([...royalNumber, ...this.handNumber])].length === 5;
    if (isAllSame(this.hand, 'mark') && isRoyalNumber) {
      this.result = 'ロイヤル・ストレート・フラッシュ💵⚾️✨';
      return true;
    }
    return false;
  }

  private checkStraightFlush(): boolean {
    if (this.isSerialNumber() && isAllSame(this.hand, 'mark')) {
      this.result = 'ストレート・フラッシュ⚾️✨';
      return true;
    }
    return false;
  }

  private checkFourCard(): boolean {
    const pairs = this.getPairs('number');
    if (this.getNumberPairsLength() === 4 && isAllSame(pairs, 'number')) {
      this.result = 'フォーカード👍👍👍👍';
      return true;
    }
    return false;
  }

  private checkFullHouse(): boolean {
    if (this.getNumberPairsLength() === 5) {
      this.result = 'フルハウス🏘';
      return true;
    }
    return false;
  }

  private checkFlush(): boolean {
    if (isAllSame(this.hand, 'mark')) {
      this.result = 'フラッシュ✨';
      return true;
    }
    return false;
  }

  private checkStraight(): boolean {
    if (this.isSerialNumber()) {
      this.result = 'ストレート⚾️';
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
    if (this.checkRoyalStraightFlush()) return;
    if (this.checkStraightFlush()) return;
    if (this.checkFourCard()) return;
    if (this.checkFullHouse()) return;
    if (this.checkFlush()) return;
    if (this.checkStraight()) return;
    if (this.checkThreeCard()) return;
    if (this.checkTwoPair()) return;
    if (this.checkOnePair()) return;
  }
}
