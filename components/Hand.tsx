import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
//Components
import Card from './Card';
// Class
import CardClass from '../assets/ts/Card';

type HandProps = {
  cards: CardClass[];
  isOpen: boolean;
};

class Hand extends Component<HandProps> {
  render() {
    const {cards, isOpen} = this.props;
    return (
      <View style={styles.hand}>
        {cards.map((card, index) => {
          return (
            <View key={index}>
              <Card isOpen={isOpen} width={60} height={100} card={card} />
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hand: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 400,
  },
});

export default Hand;
