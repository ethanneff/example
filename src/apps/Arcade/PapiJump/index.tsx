import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import {Screen} from '../../../components';
import {useColor, useDriver, useDropShadow} from '../../../hooks';

type PapiProps = {size: number; color: string};

const Papi = memo(function PapiMemo({size, color}: PapiProps) {
  const dropShadow = useDropShadow();
  const useNativeDriver = useDriver();
  const location = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  useEffect(() => {
    const toValue = {x: 300, y: 600};
    Animated.timing(location, {
      toValue,
      duration: 3000,
      easing: Easing.bounce,
      useNativeDriver,
    }).start();
  }, [location, useNativeDriver]);

  return (
    <Animated.View
      style={[
        location.getLayout(),
        {
          height: size,
          width: size,
          borderRadius: size,
          backgroundColor: color,
          ...dropShadow(10),
        },
      ]}
    />
  );
});

export const PapiJump = memo(function PapiJump() {
  const color = useColor();
  const {goBack} = useNavigation();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: color.surface,
      flex: 1,
    },
  });
  const navBack = useCallback(() => goBack(), [goBack]);
  return (
    <Screen onLeftPress={navBack} title="Papi Jump">
      <View style={styles.container}>
        <Papi color={color.primary} size={50} />
      </View>
    </Screen>
  );
});
