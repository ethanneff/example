import {Platform} from 'react-native';
import {useRootSelector} from '../../utils';

export const useDriver = (): boolean => {
  const emulator = useRootSelector((state) => state.device.isEmulator);

  return !(process.env.JEST_WORKER_ID || emulator || Platform.OS === 'web');
};
