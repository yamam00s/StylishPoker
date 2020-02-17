import React, {FC, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
// Components
import Card from './Card';
// Class
import CardClass from '../assets/ts/Card';

type HandProps = {
  cards: CardClass[];
  isOpen: boolean;
  setSelectedCardsProp: (selectedCards: CardClass[]) => void;
};

const Hand: FC<HandProps> = data => {
  const {cards, isOpen, setSelectedCardsProp} = data;
  const [selectedCards, setSelectedCards] = useState<CardClass[] | []>([]);

  const selectCard = (card: CardClass): void => {
    const result = [...selectedCards, card];
    setSelectedCards([...new Set(result)]);
    setSelectedCardsProp(result);
  };

  return (
    <View style={styles.hand}>
      {cards.map((card, index) => {
        /* 選択カードのスタイル変える用の関数
        const isSelected = (): boolean => {
          return this.state.selectedCards.some(item => item === card);
        };
        */
        return (
          <TouchableOpacity onPress={() => selectCard(card)} key={index}>
            <Card isOpen={isOpen} width={60} height={100} card={card} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

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
