import React, {Component} from 'react';
import {StyleSheet, Button, View} from 'react-native';

//Components
import Card from './components/Card';
// import Hand from './components/Hand';
// Class
import DeckClass from './assets/ts/Deck';
import CardClass from './assets/ts/Card';

class App extends Component {
  public readonly deck: DeckClass;
  public hand: CardClass[];

  constructor(props: any) {
    super(props);
    this.deck = new DeckClass();
    this.hand = [];
  }

  private dealCards(): void {
    this.deck.shuffle();
    this.hand = this.deck.deal(5);
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
});

export default App;
