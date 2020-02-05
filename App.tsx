import React, {Component, JSXElementConstructor} from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
//Components
import Card from './components/Card';
import Hand from './components/Hand';
// Class
import DeckClass, {checkCardIncludes} from './assets/ts/Deck';
import CardClass from './assets/ts/Card';

type AppState = {
  hand: CardClass[];
  selectedCards: CardClass[];
  isDealDone: boolean;
  isChangeDone: boolean;
};

class App extends Component {
  public readonly deck: DeckClass;
  public state: AppState;

  constructor(props: any) {
    super(props);
    this.state = {
      hand: [],
      selectedCards: [],
      isDealDone: false,
      isChangeDone: false,
    };
    this.deck = new DeckClass();
  }

  public setSelectedCards = (selectedCards: CardClass[]) => {
    this.setState({
      selectedCards: selectedCards,
    });
  };

  private dealCards(): void {
    this.deck.shuffle();
    this.setState({
      hand: this.deck.deal(5),
      isDealDone: true,
    });
  }

  private changeCards(): void {
    this.deck.createExcludeDeck(this.state.hand);
    const excludeHand = this.state.hand.filter(
      card => !checkCardIncludes(this.state.selectedCards, card),
    );
    const dearthLength = 5 - excludeHand.length;
    this.setState({
      hand: [...excludeHand, ...this.deck.deal(dearthLength, true)],
      isChangeDone: true,
    });
  }

  render() {
    const {isDealDone} = this.state;
    type ActionButton = {title: string; onPress: () => void};
    const actionButton = (): ActionButton => {
      if (!isDealDone) {
        return {
          title: 'カードを配る',
          onPress: () => this.dealCards(),
        };
      }
      return {
        title: 'チェンジする',
        onPress: () => this.changeCards(),
      };
    };

    return (
      <View style={styles.flexView}>
        <View style={styles.deckArea}>
          <Card isOpen={false} width={100} height={150} />
          <Button color="black" {...actionButton()} />
        </View>
        <View style={styles.handArea}>
          {isDealDone ? (
            <Hand
              cards={this.state.hand}
              isOpen={true}
              setSelectedCards={this.setSelectedCards}
            />
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
