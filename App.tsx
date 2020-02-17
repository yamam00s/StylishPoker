import React, {FC, useState, useEffect} from 'react';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
//Components
import Card from './components/Card';
import Hand from './components/Hand';
// Class
import DeckClass, {checkCardIncludes} from './assets/ts/Deck';
import CardClass from './assets/ts/Card';
import JudgmentClass from './assets/ts/Judgment';

const deck: DeckClass = new DeckClass();

const App: FC = () => {
  const [hand, setHand] = useState<CardClass[] | []>([]);
  const [selectedCards, setSelectedCards] = useState<CardClass[] | []>([]);
  const [isDealDone, setIsDealDone] = useState(false);
  const [isChangeDone, setIsChangeDone] = useState(false);
  const isActionButton: boolean = !isDealDone || !isChangeDone;

  useEffect(() => {
    deck.shuffle();
  });

  const dealCards = (): void => {
    setHand(deck.deal(5));
    setIsDealDone(true);
  };

  const changeCards = (): void => {
    deck.createExcludeDeck(hand);
    const excludeHand = hand.filter(
      card => !checkCardIncludes(selectedCards, card),
    );
    const dearthLength = 5 - excludeHand.length;
    setHand([...excludeHand, ...deck.deal(dearthLength, true)]);
    setIsChangeDone(true);
  };

  const Judge = (): void => {
    const judgeClass = new JudgmentClass({hand: hand});
    judgeClass.Judge();
    Alert.alert(judgeClass.result);
  };

  const actionButton = () => {
    if (!isDealDone) {
      return {
        title: 'カードを配る',
        onPress: () => dealCards(),
      };
    }
    return {
      title: 'チェンジする',
      onPress: () => changeCards(),
    };
  };

  return (
    <View style={styles.flexView}>
      <View style={styles.deckArea}>
        <Card isOpen={false} width={100} height={150} />
        {isActionButton && <Button color="black" {...actionButton()} />}
        {isDealDone && (
          <Button color="black" title="判定する" onPress={() => Judge()} />
        )}
      </View>
      <View style={styles.handArea}>
        {isDealDone ? (
          <Hand
            cards={hand}
            isOpen={true}
            setSelectedCardsProp={setSelectedCards}
          />
        ) : (
          <Text>カードを配れ</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexView: {
    backgroundColor: 'green',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  handArea: {
    flex: 1,
  },
});

export default App;
