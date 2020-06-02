import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Screen} from '../../../../components';
import {useNav} from '../../../../hooks';
import Walkthrough from './Walkthrough';

const styles = StyleSheet.create({
  row: {flexDirection: 'row', justifyContent: 'space-around'},
});

export default memo(function PortfolioLanding() {
  const nav = useNav();
  return (
    <Screen title="Landing">
      <Walkthrough />
      <View style={styles.row}>
        <Button title="Login" onPress={nav.to('portfolioLogin')} />
        <Button title="Main" onPress={nav.to('portfolio')} />
        <Button title="Settings" onPress={nav.to('portfolioSettings')} />
      </View>
      <View style={styles.row}>
        <Button title="Checklist" onPress={nav.to('checklists')} />
        <Button title="CantHurtMe" onPress={nav.to('cantHurtMe')} />
        <Button title="Focus" onPress={nav.to('focus')} />
      </View>
      <View style={styles.row}>
        <Button title="Journal" onPress={nav.to('journal')} />
        <Button title="Activity" onPress={nav.to('activity')} />
      </View>
      <View style={styles.row}>
        <Button title="FlappyBird" onPress={nav.to('gamesFlappyBird')} />
        <Button title="Snake" onPress={nav.to('gamesSnake')} />
        <Button title="PapiJump" onPress={nav.to('gamesPapiJump')} />
        <Button title="Archero" onPress={nav.to('gamesArchero')} />
      </View>
      <View style={styles.row}>
        <Button title="Playground" onPress={nav.to('playground')} />
      </View>
    </Screen>
  );
});
