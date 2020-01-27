import Card from 'assets/ts/Card';

const marks = ['S', 'H', 'D', 'C'];
const numbers = [...Array(13).keys()].map(i => ++i);

export default class Deck {
  public readonly cards!: Card[];

  constructor() {
    this.cards = marks.reduce((prev: Card[], mark) => {
      numbers.map(num => {
        prev.push(new Card({mark: mark, card: num}));
      });
      return prev;
    }, []);
  }
}
