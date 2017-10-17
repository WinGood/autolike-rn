import React, {Component} from 'react';
import {Icon} from 'native-base';
import ModalPicker from './ModalPicker';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import NBTheme from './NBTheme';

class SubToolbarSelect extends Component {
  constructor(props) {
    super(props);

    this.openPicker = this.openPicker.bind(this);
  }

  openPicker() {
    this.picker.open();
  }

  render() {
    let index  = 0;
    const data = [
      {key: index++, label: 'Fruits'},
      {key: index++, label: 'Red Apples'},
      {key: index++, label: 'Cherries'},
      {key: index++, label: 'Cranberries'},
      {key: index++, label: 'Pink Grapefruit'},
      {key: index++, label: 'Raspberries'},
      {key: index++, label: 'Vegetables'},
      {key: index++, label: 'Beets'},
      {key: index++, label: 'Red Peppers'},
      {key: index++, label: 'Radishes'},
      {key: index++, label: 'Radicchio'},
      {key: index++, label: 'Red Onions'},
      {key: index++, label: 'Red Potatoes'},
      {key: index++, label: 'Rhubarb'},
      {key: index++, label: 'Tomatoes'}
    ];
    
    return (
      <TouchableOpacity activeOpacity={0.7}
                        style={styles.dropDown}
                        onPress={this.openPicker}>
        <View style={styles.dropDownBody}>
          <ModalPicker
            data={data}
            selectTextStyle={styles.dropDownText}
            selectStyle={styles.reset}
            initValue={this.props.text}
            ref={(picker) => {this.picker = picker}}
            cancelText="отмена"
            onChange={(option)=>{ alert(`${option.label} (${option.key})`) }}/>
          <Icon name="arrow-drop-down" theme={NBTheme} style={styles.dropDownIcon}/>
        </View>
      </TouchableOpacity>
    );
  }
}

SubToolbarSelect.propTypes = {
  text: React.PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  dropDown: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dropDownText: {
    fontSize: 16,
    color: 'rgba(255,255,255,.7)'
  },
  dropDownIcon: {
    fontSize: 18,
    marginTop: 4,
    marginLeft: 6,
    color: 'rgba(255,255,255,.7)',
  },
  reset: {
    borderRadius: 0,
    padding: 0,
    margin: 0,
    borderWidth: 0
  },
});

export default SubToolbarSelect;