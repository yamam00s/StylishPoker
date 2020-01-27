export default class Card {
  public readonly mark!: string;
  public readonly card!: number;

  constructor(init: Partial<Card>) {
    Object.assign(this, init);
  }
}
