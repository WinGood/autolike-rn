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

class Select extends Component {
  constructor(props) {
    super(props);

    this.openPicker     = this.openPicker.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  openPicker() {
    this.picker.open();
  }

  handleOnChange(row) {
    this.props.onChange(this.props.field, row);
  }

  render() {
    const {data, initIndex, placeholder} = this.props;
    const initValue = (initIndex) ? data[initIndex].label : placeholder;
    
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.container, this.props.containerStyles]}
        onPress={(!this.props.disabled) ? this.openPicker : null}
      >
        <View style={[styles.body]}>
          <ModalPicker
            data={this.props.data}
            selectTextStyle={styles.text}
            selectStyle={styles.reset}
            initValue={initValue}
            disabled={this.props.disabled}
            ref={(picker) => {this.picker = picker}}
            cancelText="отмена"
            onChange={this.handleOnChange}/>
          <Icon name="arrow-drop-down" theme={NBTheme} style={styles.icon}></Icon>
        </View>
      </TouchableOpacity>
    );
  }
}

Select.propTypes = {
  containerStyles: React.PropTypes.object,
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.number.isRequired,
    label: React.PropTypes.string.isRequired
  })).isRequired,
  initIndex: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  placeholder: React.PropTypes.string.isRequired,
  field: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 12,
    paddingBottom: 12
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  reset: {
    borderRadius: 0,
    padding: 0,
    margin: 0,
    borderWidth: 0
  },
  text: {
    fontSize: 14
  },
  icon: {
    marginLeft: 5,
    fontSize: 22,
    color: '#A9A9A9'
  }
});

export default Select;