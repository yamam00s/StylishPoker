import Card from './Card';

const marks = ['♠️', '❤️', '♦️', '♣️'];
const numbers = [...Array(13).keys()].map(i => ++i);

export default class Deck {
  public readonly cards!: Card[];
  public excludeDeck!: Card[];

  constructor() {
    this.cards = marks.reduce((prev: Card[], mark: string) => {
      numbers.map(num => {
        prev.push(new Card({mark: mark, number: num}));
      });
      return prev;
    }, []);
  }

  public shuffle(): void {
    const {length} = this.cards;
    for (let i = length - 1; i >= 0; i--) {
      const random: number = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[random]] = [this.cards[random], this.cards[i]];
    }
  }

  public deal(num: number, reDeal: boolean = false): Card[] {
    if (reDeal) {
      return this.excludeDeck.slice(0, num);
    }
    return this.cards.slice(0, num);
  }

  public createExcludeDeck(exclude: Card[]): void {
    // setオブジェクトは重複を消してくれるだけなので用途的に違った
    // this.excludeDeck = [...new Set([...this.cards, ...exclude])];
    this.excludeDeck = [...this.cards, ...exclude].filter(card => {
      return !(
        checkCardIncludes(this.cards, card) && checkCardIncludes(exclude, card)
      );
    });
  }
}

export const checkCardIncludes = (deck: Card[], card: Card): boolean => {
  return deck.some(
    item => item.mark === card.mark && item.number === card.number,
  );
};
