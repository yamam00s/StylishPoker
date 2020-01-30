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
    this.state = {hand: []};
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
        <Button
          title="カードを配る"
          color="black"
          onPress={() => this.dealCards()}
        />
        <Card isOpen={false} />
        <View style={styles.handArea}>
          {this.state.hand.length ? (
            <Hand cards={this.state.hand} isOpen={false} />
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  handArea: {
    margin: 30,
    backgroundColor: 'black',
  },
});

export default App;
