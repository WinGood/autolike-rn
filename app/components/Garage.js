import React, {Component} from 'react';
import {
  Container,
  Icon,
  Content,
  List,
  ListItem,
  Thumbnail
} from 'native-base';

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import RNBottomSheet from 'react-native-bottom-sheet';
import NBTheme from './NBTheme';
import AddCarModal from './AddCarModal';
import CarItem from './elements/CarItem';

class Garage extends Component {
  constructor(props) {
    super(props);

    this.openAddCarToCurrentModal  = this.openAddCarToCurrentModal.bind(this);
    this.openAddCarToPreviousModal = this.openAddCarToPreviousModal.bind(this);
    this.handleAddCarToCurrent     = this.handleAddCarToCurrent.bind(this);
    this.handleAddCarToPrevious    = this.handleAddCarToPrevious.bind(this);

    this.state = {
      currentCar: [],
      previousCar: []
    };
  }

  openAddCarToCurrentModal() {
    this.addCurrentModal.open();
  }

  openAddCarToPreviousModal() {
    this.addPreviousModal.open();
  }

  handleAddCarToCurrent(car) {
    car.id = Math.random().toString(34).slice(2);

    this.setState({
      currentCar: this.state.currentCar.concat([car])
    });
  }

  handleAddCarToPrevious(car) {
    car.id = Math.random().toString(34).slice(2);

    this.setState({
      previousCar: this.state.previousCar.concat([car])
    });
  }

  handleCarOnPress(selectedCar, group) {
    RNBottomSheet.showBottomSheetWithOptions({
      options: [
        'Загрузить фотографию',
        'Редактировать',
        'Удалить',
        'Продал машину'
      ],
      title: 'Действие с автомобилем',
      message: 'Сообщение'
    }, (actionIndex) => {
      let copyCurrent  = [...this.state.currentCar];
      let copyPrevious = [...this.state.previousCar];
      let index        = -1;

      if (group == 1) {
        index = copyCurrent.findIndex(
          car => car.id === selectedCar.id
        )
      }

      if (group == 2) {
        index = copyPrevious.findIndex(
          car => car.id === selectedCar.id
        )
      }

      switch (actionIndex) {
        case 2:
          if (group == 1) {
            copyCurrent.splice(index, 1);
            this.setState({
              currentCar: copyCurrent
            });
          } else {
            copyPrevious.splice(index, 1);
            this.setState({
              previousCar: copyPrevious
            });
          }
          break;
        case 3:
          copyCurrent.splice(index, 1);
          copyPrevious.push(selectedCar);

          this.setState({
            currentCar: copyCurrent,
            previousCar: copyPrevious
          });
          break;
      }
    });
  }

  render() {
    return (
      <Container>
        <Content style={styles.contentStyle} theme={NBTheme}>
          <AddCarModal ref={(modal) => {this.addCurrentModal = modal}}
                       onSubmit={this.handleAddCarToCurrent}/>
          <AddCarModal ref={(modal) => {this.addPreviousModal = modal}}
                       onSubmit={this.handleAddCarToPrevious}/>
          <List>
            <ListItem style={styles.listItem} onPress={this.openAddCarToCurrentModal}>
              <Thumbnail
                circular={false}
                square={false}
                contain={true}
                style={styles.thumbnail}
                source={require('../img/car_item.png')}
              />
              <Text style={styles.listItemText}>ДОБАВИТЬ АВТО</Text>
              <Text note>владею сейчас</Text>
              <View style={styles.listRight}>
                <Icon style={styles.forwardArrow}
                      name='chevron-right'/>
              </View>
            </ListItem>
            {
              (!this.state.currentCar.length)
                ?
                <View style={styles.carEmpty}>
                  <Image
                    style={styles.carEmptyImg}
                    resizeMode="cover"
                    source={require('../img/cart_empty.png')}
                  />
                  <Text>ДОБАВЬТЕ АВТОМОБИЛЬ</Text>
                </View>
                :
                this.state.currentCar.map(
                  car => (
                    <CarItem key={car.id}
                             mark={car.mark.label}
                             model={car.model.label}
                             onPress={this.handleCarOnPress.bind(this, car, 1)}
                    />
                  ))
            }
            <ListItem style={styles.listItem} onPress={this.openAddCarToPreviousModal}>
              <Thumbnail
                circular={false}
                square={false}
                contain={true}
                style={styles.thumbnail}
                source={require('../img/car_item.png')}
              />
              <Text style={styles.listItemText}>ДОБАВИТЬ АВТО</Text>
              <Text note>владел раньше</Text>
              <View style={styles.listRight}>
                <Icon style={styles.forwardArrow}
                      name='chevron-right'/>
              </View>
            </ListItem>
            {
              (!this.state.previousCar.length)
                ?
                <View style={[styles.carEmpty, {borderBottomWidth: 0}]}>
                  <Image
                    style={styles.carEmptyImg}
                    resizeMode="cover"
                    source={require('../img/cart_empty.png')}
                  />
                  <Text>ДОБАВЬТЕ АВТОМОБИЛЬ</Text>
                </View>
                :
                this.state.previousCar.map(
                  car => (
                    <CarItem key={car.id}
                             mark={car.mark.label}
                             model={car.model.label}
                             onPress={this.handleCarOnPress.bind(this, car, 2)}
                    />
                  ))
            }
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    backgroundColor: '#ebedf0'
  },
  innerContent: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c6c9',
    paddingBottom: 10
  },
  listItem: {
    padding: 8,
    marginLeft: 0,
    paddingLeft: 15,
    backgroundColor: '#f6f6f6',
    borderTopWidth: 1,
    borderTopColor: '#e3e5e8',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e5e8'
  },
  listRight: {
    position: 'absolute',
    right: 0,
    top: 6
  },
  listItemText: {
    fontWeight: 'bold'
  },
  forwardArrow: {
    color: '#A0A0A0'
  },
  carEmpty: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  carEmptyImg: {
    width: 80,
    height: 155,
    marginBottom: 15
  }
});

export default Garage;