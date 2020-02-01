import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

type CardProps = {
  isOpen: boolean;
  width: number;
  height: number;
};

class Card extends Component<CardProps, {}> {
  render() {
    const {isOpen, width, height} = this.props;
    return (
      <View>
        {isOpen ? <View /> : <View style={styles(width, height).cardBack} />}
      </View>
    );
  }
}

const styles = (width: number, height: number) =>
  StyleSheet.create({
    cardBack: {
      width: width,
      height: height,
      backgroundColor: 'black',
      borderRadius: 4,
      borderWidth: 5.5,
      borderColor: 'white',
    },
  });

export default Card;
