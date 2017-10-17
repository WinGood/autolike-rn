import React, {Component} from 'react';
import {Container, Content, Icon} from 'native-base';
import {Row, Grid} from "react-native-easy-grid";
import ModalPicker from './ModalPicker';

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import SubToolbarSelect from './SubToolbarSelect';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.openPicker = this.openPicker.bind(this);
  }

  openPicker() {
    this.picker.open();
  }

  componentWillMount() {
    const {navbar} = this.context;

    navbar.setSubToolbar(
      <View style={styles.subNavBar}>
        <SubToolbarSelect text="Все города" />
        <SubToolbarSelect text="Все авто" />
      </View>
    );
  }

  render() {
    const {navigator} = this.context;

    return (
      <Container>
        <Content style={styles.contentStyle}>
          <Grid>
            <Row style={styles.firstRow}>
              <TouchableOpacity activeOpacity={0.5}
                                style={styles.col}
                                onPress={() => navigator.forward('detail', 'Test')}>
                <Image
                  style={styles.colImage}
                  source={require('../img/gasoline-pump1.png')}
                />

                <Text style={styles.text}>АЗС</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}
                                style={styles.col}
                                onPress={() => navigator.forward('detail', 'Test')}>
                <Image
                  style={styles.colImage}
                  source={require('../img/car-washing-machine.png')}
                />
                <Text style={styles.text}>Мойки</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.col}
                                onPress={() => navigator.forward('detail', 'Test')}>
                <Image
                  style={styles.colImage}
                  source={require('../img/oil-drop-with-car-drawing.png')}
                />
                <Text style={styles.text}>Замена масла</Text>
              </TouchableOpacity>
            </Row>
            <Row style={styles.row}>
              <TouchableOpacity activeOpacity={0.5} style={styles.col}
                                onPress={() => navigator.forward('detail', 'Test')}>
                <Image
                  style={styles.colImage}
                  source={require('../img/tire.png')}
                />
                <Text style={styles.text}>Шиномонтаж</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.col}
                                onPress={() => navigator.forward('detail', 'Test')}>
                <Image
                  style={styles.colImage}
                  source={require('../img/two-settings-cogwheels.png')}
                />
                <Text style={styles.text}>Запчасти</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.col}
                                onPress={() => navigator.forward('detail', 'Test')}>
                <Image
                  style={styles.colImage}
                  source={require('../img/shopping-cart.png')}
                />
                <Text style={styles.smText}>Доп. оборудование</Text>
              </TouchableOpacity>
            </Row>
            <Row style={styles.row}>
              <TouchableOpacity activeOpacity={0.5} style={styles.col}
                                onPress={() => navigator.forward('detail', 'Test')}>
                <Image
                  style={styles.colImage}
                  source={require('../img/hours-delivery.png')}
                />
                <Text style={styles.text}>Автосервисы</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.col}
                                onPress={() => navigator.forward('detail', 'Test')}>
                <Image
                  style={styles.colImage}
                  source={require('../img/car-insurance.png')}
                />
                <Text style={styles.text}>Страховка</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.col}
                                onPress={() => navigator.forward('detail', 'Test')}>
                <Image
                  style={styles.colImage}
                  source={require('../img/specialist-user.png')}
                />
                <Text style={styles.smText}>Юристы, Оценщики, Коммисары</Text>
              </TouchableOpacity>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

HomePage.contextTypes = {
  navbar: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  contentStyle: {
    backgroundColor: '#ebedf0'
  },
  subNavBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#3F51B5',
    position: 'absolute',
    top: 56,
    left: 0,
    right: 0,
    height: 56,
  },
  firstRow: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c6c9',
    paddingTop: 10,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
    marginBottom: 10
  },
  row: {
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#e3e5e8',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c6c9',
    paddingTop: 10,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
    marginBottom: 10
  },
  colImage: {
    width: 58,
    height: 58,
    marginBottom: 10
  },
  col: {
    borderColor: '#dbdbdb',
    marginLeft: 0,
    marginRight: 0,
    paddingHorizontal: 10,
    flex: 1,
    height: 130,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  text: {
    color: '#2e3033'
  },
  smText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#2e3033'
  },
  colIcon: {
    marginBottom: 5,
    fontSize: 60,
    color: '#4987D1'
  }
});

export default HomePage;