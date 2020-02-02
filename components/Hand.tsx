import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
//Components
import Card from './Card';
// Class
import CardClass from '../assets/ts/Card';

type HandProps = {
  cards: CardClass[];
  isOpen: boolean;
};
type AppState = {
  isSelected: CardClass[];
};

class Hand extends Component<HandProps> {
  public state: AppState;

  constructor(props: any) {
    super(props);
    this.state = {
      isSelected: [],
    };
  }

  private selectCard(card: CardClass): void {
    const result = [...this.state.isSelected, card];
    this.setState({
      isSelected: result,
    });
    return;
  }

  render() {
    const {cards, isOpen} = this.props;
    console.log();
    return (
      <View style={styles.hand}>
        {cards.map((card, index) => {
          const isSelected = (): boolean => {
            return this.state.isSelected.some(item => item === card);
          };
          return (
            <TouchableOpacity
              onPress={() => this.selectCard(card)}
              style={isSelected() && styles.isSelected}
              key={index}>
              <Card isOpen={isOpen} width={60} height={100} card={card} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  isSelected: {
    opacity: 0.5,
  },
  hand: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 400,
  },
});

export default Hand;
