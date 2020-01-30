import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

type CardProps = {
  isOpen: boolean;
};

class Card extends Component<CardProps, {}> {
  render() {
    const {isOpen} = this.props;
    return <View>{isOpen ? <View /> : <View style={styles.cardBack} />}</View>;
  }
}

const styles = StyleSheet.create({
  cardBack: {
    width: 100,
    height: 150,
    backgroundColor: 'black',
    borderRadius: 4,
    borderWidth: 5.5,
    borderColor: 'white',
  },
});

export default Card;
