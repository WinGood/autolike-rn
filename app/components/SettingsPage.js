import React, {Component} from 'react';
import {
  Container,
  Content
} from 'native-base';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';

class SettingsPage extends Component {
  constructor(props, context) {
    super(props);

    const {navbar} = context;

    navbar.setActions([{
      icon: 'check',
      onPress() {
        alert('saved!')
      }
    }]);

    this.onFocusInput = this.onFocusInput.bind(this);
    this.onBlurInput  = this.onBlurInput.bind(this);
    this.state        = {
      inputUnderlight: '#c4c6c9'
    };
  }

  onFocusInput() {
    this.setState({
      inputUnderlight: '#3F51B5'
    });
  }

  onBlurInput() {
    this.setState({
      inputUnderlight: '#c4c6c9'
    });
  }

  render() {
    const {navigator} = this.context;

    return (
      <Container>
        <Content style={styles.contentStyle}>
          <View
            style={[styles.statItem, {borderBottomColor: this.state.inputUnderlight}]}>
            <Text style={styles.statText}>Ваш логин:</Text>
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              defaultValue="ja23"
              autoCorrect={false}
              onBlur={this.onBlurInput}
              onFocus={this.onFocusInput}
              style={styles.input}/>
          </View>
          <View style={styles.buttonArea}>
            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => navigator.toWithoutAnimation('auth')}>
              <Text style={styles.buttonText}>Выход</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

SettingsPage.contextTypes = {
  navbar: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired
};

SettingsPage.propTypes = {}

const styles = StyleSheet.create({
  contentStyle: {
    backgroundColor: '#ebedf0'
  },
  statItem: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 11,
    marginBottom: 16
  },
  statText: {
    flex: 1,
  },
  input: {
    flex: 2,
    padding: 0,
    paddingHorizontal: 16,
    textAlignVertical: 'center'
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: '#3F51B5',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  }
});

export default SettingsPage;