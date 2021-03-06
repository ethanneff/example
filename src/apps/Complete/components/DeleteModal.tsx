import React, {memo} from 'react';
import {View} from 'react-native';
import {Button, Modal, Text} from '../../../components';
import {config} from '../../../utils';

type DeleteModalProps = {
  onDelete: () => void;
  onCancel: () => void;
};

export const DeleteModal = memo(function DeleteModal({
  onCancel,
  onDelete,
}: DeleteModalProps) {
  return (
    <Modal onBackgroundPress={onCancel} showOverlay widthPercent={0.5}>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{paddingBottom: config.padding(2)}}
          title="Are you sure?"
          type="h5"
        />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Button onPress={onCancel} title="close" />
          <Button color="danger" onPress={onDelete} title="delete" />
        </View>
      </View>
    </Modal>
  );
});
