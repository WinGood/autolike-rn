import {Platform} from 'react-native';

/**
 * Detect whether a specific feature is compatible with the device
 * @param feature
 * @returns bool
 */

export function isCompatible(feature) {
  const version = Platform.Version;

  switch (feature) {
    case 'TouchableNativeFeedback':
      return version >= 21;
      break;
    case 'elevation':
      return version >= 21;
      break;
    default:
      return true;
      break;
  }
}