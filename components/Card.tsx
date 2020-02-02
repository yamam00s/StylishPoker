import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// Class
import CardClass from '../assets/ts/Card';

type CardProps = {
  isOpen: boolean;
  width: number;
  height: number;
  card?: CardClass;
};

class Card extends Component<CardProps, {}> {
  render() {
    const {isOpen, width, height, card} = this.props;
    return (
      <View>
        {isOpen ? (
          <View style={stylesCardSize(width, height).cardSize}>
            <View style={styles.cardFace}>
              <Text style={styles.cardFaceNumberTop}>{card?.number}</Text>
              <Text>{card?.mark}</Text>
              <Text style={styles.cardFaceNumberBottom}>{card?.number}</Text>
            </View>
          </View>
        ) : (
          <View
            style={[stylesCardSize(width, height).cardSize, styles.cardBack]}
          />
        )}
      </View>
    );
  }
}

const stylesCardSize =
(width: number, height: number) =>
  StyleSheet.create({
    cardSize: {
      width: width,
      height: height,
      fontSize: 15,
    },
});

const styles = StyleSheet.create({
  cardFace: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
  },
  cardFaceNumberTop: {
    position:'absolute',
    top: 0,
    left: 0,
  },
  cardFaceNumberBottom: {
    position:'absolute',
    bottom: 0,
    right: 0,
  },
  cardBack: {
    backgroundColor: 'black',
    borderRadius: 4,
    borderWidth: 5.5,
    borderColor: 'white',
  },
});

export default Card;
