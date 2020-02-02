import React, {Component} from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
//Components
import Card from './components/Card';
import Hand from './components/Hand';
// Class
import DeckClass from './assets/ts/Deck';
import CardClass from './assets/ts/Card';

type AppState = {
  hand: CardClass[];
  deck: CardClass[];
};

const isCardIncludes = (deck: CardClass[], card: CardClass): boolean => {
  return deck.some(
    item => item.mark === card.mark && item.number === card.number,
  );
};

class App extends Component {
  public readonly deck: DeckClass;
  public state: AppState;

  constructor(props: any) {
    super(props);
    this.state = {
      hand: [],
      deck: [],
    };
    this.deck = new DeckClass();
  }

  private dealCards(): void {
    this.deck.shuffle();
    this.setState({
      hand: this.deck.deal(5),
    });
  }

  private changeCards(): void {
    const result = [...this.deck.cards, ...this.state.hand].filter(card => {
      return !(
        isCardIncludes(this.deck.cards, card) &&
        isCardIncludes(this.state.hand, card)
      );
    });
    this.setState({
      deck: result,
    });
  }

  render() {
    const isDeal: boolean = this.state.hand.length > 0;
    return (
      <View style={styles.flexView}>
        <View style={styles.deckArea}>
          <Card isOpen={false} width={100} height={150} />
          {!isDeal ? (
            <Button
              title="カードを配る"
              color="black"
              onPress={() => this.dealCards()}
            />
          ) : (
            <Button
              title="チェンジする"
              color="black"
              onPress={() => this.changeCards()}
            />
          )}
        </View>
        <View style={styles.handArea}>
          {isDeal ? (
            <Hand cards={this.state.hand} isOpen={true} />
          ) : (
            <Text>カードを配れ</Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexView: {
    backgroundColor: 'green',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  handArea: {
    flex: 1,
  },
});

export default App;
