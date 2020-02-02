import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
//Components
import Card from './Card';
// Class
import CardClass from '../assets/ts/Card';

type HandProps = {
  cards: CardClass[];
  isOpen: boolean;
  setSelectedCards: (selectedCards: CardClass[]) => void;
};
type AppState = {
  selectedCards: CardClass[];
};

class Hand extends Component<HandProps> {
  public state: AppState;

  constructor(props: any) {
    super(props);
    this.state = {
      selectedCards: [],
    };
  }

  private selectCard(card: CardClass): void {
    const result = [...this.state.selectedCards, card];
    this.setState({
      selectedCards: new Set(result),
    });
    this.props.setSelectedCards(result);
  }

  render() {
    const {cards, isOpen} = this.props;
    return (
      <View style={styles.hand}>
        {cards.map((card, index) => {
          /* 選択カードのスタイル変える用の関数
            const isSelected = (): boolean => {
              return this.state.selectedCards.some(item => item === card);
            };
          */
          return (
            <TouchableOpacity onPress={() => this.selectCard(card)} key={index}>
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
