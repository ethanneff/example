import React, {memo, useCallback, useState} from 'react';
import {Keyboard, View} from 'react-native';
import {Icon, TextInput, TouchableOpacity} from '../../../components';
import {useColor} from '../../../hooks';
import {useRootSelector} from '../../../utils';
import {config} from '../configs';

type ListItemProps = {
  itemId: string;
};

export const ListItem = memo(function ListItem({itemId}: ListItemProps) {
  const item = useRootSelector((s) => s.completeItem.items[itemId]);
  const color = useColor();
  const [title, setTitle] = useState(item.title);
  const [showControls, setShowControls] = useState(false);

  const onTextChange = useCallback((value) => {
    setTitle(value);
  }, []);

  const onItemTitleClose = useCallback(() => {
    setTitle(item.title);
    Keyboard.dismiss();
  }, [item.title]);
  const onItemTitleSubmit = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const onFocus = useCallback(() => setShowControls(true), []);
  const onBlur = useCallback(() => setShowControls(false), []);

  return (
    <TouchableOpacity
      key={item.id}
      style={{
        flex: 1,
        borderRadius: config.borderRadius,
        marginBottom: config.padding,
        backgroundColor: color.surface,
        flexDirection: 'row',
      }}>
      <TextInput
        backgroundColor={color.surface}
        flex
        onBlur={onBlur}
        onChangeText={onTextChange}
        onFocus={onFocus}
        onSubmitEditing={onItemTitleSubmit}
        placeholder="Item name..."
        returnKeyType="done"
        value={title}
      />
      {showControls ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="close" onPress={onItemTitleClose} padded />
          <Icon
            color={color.primary}
            name="send"
            onPress={onItemTitleSubmit}
            padded
          />
        </View>
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="dots-horizontal" onPress={onItemTitleClose} padded />
          <Icon name="chevron-right" onPress={onItemTitleSubmit} padded />
        </View>
      )}
    </TouchableOpacity>
  );
});