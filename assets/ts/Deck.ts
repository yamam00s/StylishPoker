import Card from './Card';

const marks = ['S', 'H', 'D', 'C'];
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
}
