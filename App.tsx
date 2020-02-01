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
};

class App extends Component {
  public readonly deck: DeckClass;
  public state: AppState;

  constructor(props: any) {
    super(props);
    this.state = {
      hand: [],
    };
    this.deck = new DeckClass();
  }

  private dealCards(): void {
    this.deck.shuffle();
    this.setState({
      hand: this.deck.deal(5),
    });
  }

  render() {
    return (
      <View style={styles.flexView}>
        <View style={styles.deckArea}>
          <Button
            title="カードを配る"
            color="black"
            onPress={() => this.dealCards()}
          />
          <Card isOpen={false} width={100} height={150} />
        </View>
        <View style={styles.handArea}>
          {this.state.hand.length ? (
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
    flex: 1,
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
