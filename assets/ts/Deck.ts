import Card from './Card';

const marks = ['♠️', '❤️', '♦️', '♣️'];
const numbers = [...Array(13).keys()].map(i => ++i);

export default class Deck {
  public readonly cards!: Card[];

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

  public deal(num: number): Card[] {
    return this.cards.slice(0, num);
  }
}
