import React, {Component} from 'react';
import {
  Container,
  Content
} from 'native-base';

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  View
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

const {height, width} = Dimensions.get('window');

class AuthPage extends Component {
  constructor(props) {
    super(props);

    this.nextStep          = this.nextStep.bind(this);
    this.backStep          = this.backStep.bind(this);
    this.pointStyle        = this.pointStyle.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleCodeChange  = this.handleCodeChange.bind(this);
    this.checkCode         = this.checkCode.bind(this);

    this.state = {
      step: 1,
      phone: '7',
      code: '',
      spinner: false
    };
  }

  handlePhoneChange(event) {
    this.setState({
      phone: event.nativeEvent.text
    });
  }

  handleCodeChange(event) {
    this.setState({
      code: event.nativeEvent.text
    });
  }

  checkCode() {
    this.setState({
      spinner: true
    });

    setTimeout(() => {
      this.setState({
        spinner: false
      });

      this.context.navigator.toWithoutAnimation('home');
    }, 1000);
  }

  nextStep() {
    if (!this.state.phone.match(/^7\d{10}$/)) {
      alert('Вы не заполнили поле Телефон!');
    } else {
      this.setState({
        step: 2
      });
    }
  }

  backStep() {
    this.setState({
      step: 1
    });
  }

  pointStyle(index) {
    let result = [styles.point];

    if (index === 1) {
      result.push(styles.firstPoint);
    }

    if (this.state.step === index) {
      result.push(styles.pointFilled);
    }

    return result;
  }

  render() {
    return (
      <Container>
        <Content>
          <Spinner visible={this.state.spinner} overlayColor="rgba(0,0,0,0.5)"/>
          <Image
            source={require('../img/auth_background.jpg')}
            style={styles.background}>
            <View style={styles.topLogo}>
              <Image
                source={require('../img/logo_text.png')}
                style={styles.logo}/>
            </View>
            <View style={styles.form}>
              {
                (this.state.step === 1)
                  ?
                  <View>
                    <View style={styles.formInput}>
                      <Text style={styles.label}>Телефон</Text>
                      <TextInput
                        underlineColorAndroid='rgba(0,0,0,0)'
                        keyboardType="numeric"
                        value={this.state.phone}
                        placeholder="Введите номер телефона"
                        onChange={this.handlePhoneChange}
                        style={styles.input}/>
                    </View>
                    <View style={styles.formActions}>
                      <TouchableOpacity onPress={this.nextStep}
                                        style={styles.formBtn}
                                        activeOpacity={0.7}>
                        <Text style={styles.formBtnText}>ПОЛУЧИТЬ СМС</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  :
                  <View>
                    <View style={[styles.formInput, styles.formSecondInput]}>
                      <Text style={styles.label}>Код с смс</Text>
                      <TextInput
                        underlineColorAndroid='rgba(0,0,0,0)'
                        keyboardType="numeric"
                        placeholder="Введите код из смс"
                        onChange={this.handleCodeChange}
                        style={styles.input}/>
                    </View>
                    <View style={styles.formDescWrapper}>
                      <Text style={styles.formDesc}>
                        На ваш номер +{this.state.phone} отправлен код
                      </Text>
                      <Text style={styles.formDesc}>
                        Не пришел пароль? Отправить еще раз
                      </Text>
                    </View>
                    <View style={[styles.formActions, styles.formActionsSmMr]}>
                      <TouchableOpacity onPress={this.backStep}
                                        style={[styles.formBtn, styles.formBtnWhite]}
                                        activeOpacity={0.7}>
                        <Text style={styles.formBtnTextBlack}>НАЗАД</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.7}
                                        onPress={this.checkCode}
                                        style={styles.formBtn}>
                        <Text style={styles.formBtnText}>ВХОД</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              }
              <View style={styles.steps}>
                <View style={styles.stepLine}/>
                <View style={styles.stepPoints}>
                  <View style={this.pointStyle(1)}/>
                  <View style={this.pointStyle(2)}/>
                </View>
                <View style={styles.stepLine}/>
              </View>
            </View>
          </Image>
        </Content>
      </Container>
    );
  }
}

AuthPage.contextTypes = {
  navigator: React.PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height - 25,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topLogo: {
    marginTop: 100
  },
  logo: {
    width: 155,
    height: 116
  },
  form: {
    marginBottom: 115,
    width: width * 0.7
  },
  formInput: {
    flex: 1
  },
  label: {
    color: '#fc2a27',
    marginBottom: 10
  },
  input: {
    padding: 0,
    textAlignVertical: 'top',
    borderColor: '#fc2a27',
    borderBottomWidth: 1
  },
  formDescWrapper: {
    marginTop: 10
  },
  formDesc: {
    fontSize: 12,
    textAlign: 'center'
  },
  formActions: {
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row'
  },
  formActionsSmMr: {
    marginTop: 15
  },
  formBtn: {
    flex: 1,
    backgroundColor: '#fc2a27',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center'
  },
  formBtnWhite: {
    backgroundColor: '#fff',
    marginRight: 10
  },
  formBtnText: {
    textAlign: 'center',
    color: '#FFF'
  },
  formBtnTextBlack: {
    textAlign: 'center',
    color: '#232323'
  },
  steps: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  stepLine: {
    flex: 2,
    borderBottomWidth: 1,
    borderColor: '#FFF'
  },
  stepPoints: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstPoint: {
    marginRight: 5
  },
  point: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    borderWidth: 1,
    borderColor: '#FFF'
  },
  pointFilled: {
    backgroundColor: '#FFF'
  }
});

export default AuthPage;