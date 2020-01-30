import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
//Components
import Card from './Card';

type Props = {
  cards: [];
};

class Hand extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {cards} = this.props;
    return (
      <View style={styles.handArea}>
        {/* {cards.map(card => {
          <Text>{card}</Text>;
          <Card isOpen={false} />;
        })} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  handArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Hand;
