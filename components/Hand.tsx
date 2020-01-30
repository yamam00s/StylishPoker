import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
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
    console.log(cards);
    return (
      <View>
        {cards.map((card, index) => {
          <View key={index}>
            <Text>{card.number}</Text>;
            <Card isOpen={isOpen} />;
          </View>;
        })}
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   handArea: {
//     backgroundColor: 'black',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default Hand;
