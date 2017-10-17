import React, {Component, PropTypes} from "react";
import {
  View,
  Text,
  Platform,
  TouchableNativeFeedback,
  TouchableHighlight
} from "react-native";

import Icon from '../../../node_modules/react-native-material-design/lib/Icon';
import {TYPO} from '../../../node_modules/react-native-material-design/lib/config';
import {isCompatible} from '../../../node_modules/react-native-material-design/lib/helpers';

export default class Section extends Component {

  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string,
      value: PropTypes.string.isRequired,
      label: PropTypes.string,
      onPress: PropTypes.func,
      onLongPress: PropTypes.func,
      active: PropTypes.bool,
      style: PropTypes.object,
      disabled: PropTypes.bool
    }))
  };

  renderRow = (item, index, color) => {
    return (
      <View
        key={index}
        style={styles.item}
      >
        {item.icon &&
        <Icon
          name={item.icon}
          color={(item.active) ? '#3F51B5' : '#7d7d7d'}
          size={22}
          style={styles.icon}
        />
        }
        <View style={styles.value}>
          <Text style={[TYPO.paperFontBody2, { color }, {lineHeight: 18} ,item.style]}>
            {item.value}
          </Text>
        </View>
        {item.label &&
        <View style={styles.label}>
          <Text style={[TYPO.paperFontBody2, { color }]}>
            {item.label}
          </Text>
        </View>
        }
      </View>
    );
  };

  render() {
    const {theme, title, items} = this.props;

    const textStyleMap = {
      light: {
        'default': '#676767',
        disabled: 'rgba(0,0,0,.38)'
      },
      dark: {
        'default': '#ffffff',
        disabled: 'rgba(255,255,255,.30)'
      }
    };

    const subheaderStyleMap = {
      light: 'rgba(0,0,0,.54)',
      dark: 'rgba(255,255,255,.70)',
    };

    const activeStyleMap = {
      light: '#f5f5f5',
      dark: '#212121',
    };

    const TEXT_COLOR     = textStyleMap[theme]['default'];
    const SUB_TEXT_COLOR = subheaderStyleMap[theme];
    const ACTIVE_COLOR   = activeStyleMap[theme];

    let TouchableElement = TouchableHighlight;
    if (isCompatible('TouchableNativeFeedback')) {
      TouchableElement = TouchableNativeFeedback;
    }

    return (
      <View style={styles.section}>
        {title &&
        <View style={[styles.subheader, styles.item]}>
          <Text style={[TYPO.paperFontBody2, { color: SUB_TEXT_COLOR }]}>
            {title}
          </Text>
        </View>
        }
        {items && items.map((item, i) => {
          if (item.disabled) {
            return this.renderRow(item, i, textStyleMap[theme]['disabled']);
          }

          return (
            <TouchableElement
              key={i}
              underlayColor='#f5f5f5'
              background={TouchableNativeFeedback.Ripple('rgba(153,153,153,.4)')}
              onPress={item.onPress}
              onLongPress={item.onLongPress}
            >
              <View>
                {this.renderRow(item, i, (item.active) ? '#3F51B5' : TEXT_COLOR)}
              </View>
            </TouchableElement>
          );
        })}
      </View>
    );
  }
}

const styles = {
  section: {
    flex: 1,
    marginTop: 8
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingLeft: 16
  },
  subheader: {
    flex: 1,
  },
  icon: {
    position: 'absolute',
    top: 13
  },
  value: {
    flex: 1,
    paddingLeft: 56,
    top: 2
  },
  label: {
    paddingRight: 16,
    top: 2
  }
};