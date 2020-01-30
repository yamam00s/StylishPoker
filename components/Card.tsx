import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  isOpen: boolean;
};

class Card extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View>
        {this.props.isOpen ? <View /> : <View style={styles.cardBack} />}
      </View>
    );
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
