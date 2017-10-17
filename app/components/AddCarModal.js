import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Modal,
  Dimensions,
  TouchableHighlight,
  View
} from 'react-native';

import Select from './Select';
import Button from './Button';

const {height, width} = Dimensions.get('window');

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

    this.state = {
      mark: '',
      model: '',
      generation: '',
      year: '',
      yearsUsedFrom: '',
      yearsUsedTo: '',
    };
  }

  handleOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  handleOnSubmit() {
    let validate = true;

    for(let field in this.state) {
      if (this.state.hasOwnProperty(field)) {
        if (!this.state[field]) {
          validate = false;
        }
      }
    }

    if (!validate) {
      alert('Вы не заполнили все поля!');
      return;
    }
    
    this.props.onSubmit(this.state);
    this.props.closeModal();
  }

  render() {
    return (
      <View style={styles.modal}>
        <TouchableHighlight onPress={this.props.closeModal}
                            underlayColor="rgba(0,0,0,0.7)">
          <View style={styles.modalBackdoor}/>
        </TouchableHighlight>
        <View style={styles.modalForm}>
          <View style={styles.modalTitle}>
            <Text style={styles.modalTitleText}>Добавление авто</Text>
            <Image
              style={styles.modalTitleImg}
              source={require('../img/add_icon.png')}
            />
          </View>
          <View style={styles.modalContent}>
            <View style={styles.modalFormContent}>
              <Select placeholder="Выберите марку"
                      field="mark"
                      data={[{label: "Toyota", key: 1}, {label: "Laba", key: 2}, {label: "Kia", key: 3}]}
                      onChange={this.handleOnChange}
              />
              <Select placeholder="Модель"
                      field="model"
                      disabled={(!this.state.mark.label) ? true : false}
                      data={[{label: "Mark II", key: 1}, {label: "Kalina", key: 2}, {label: "Rio", key: 3}]}
                      onChange={this.handleOnChange}/>
              <Select placeholder="Поколение"
                      field="generation"
                      data={[{label: "Первое", key: 1}, {label: "Второе", key: 2}, {label: "Третье", key: 3}]}
                      onChange={this.handleOnChange}/>
              <Select placeholder="Год выпуска"
                      field="year"
                      data={[{label: "2013", key: 1}, {label: "2014", key: 2}, {label: "2015", key: 3}]}
                      onChange={this.handleOnChange}/>
              <View style={styles.modelRow}>
                <Select placeholder="Год покупки"
                        field="yearsUsedFrom"
                        containerStyles={{flex: 1, borderBottomWidth: 0}}
                        data={[{label: "2013", key: 1}, {label: "2014", key: 2}, {label: "2015", key: 3}]}
                        onChange={this.handleOnChange}
                />
                <Select placeholder="Год продажи"
                        field="yearsUsedTo"
                        containerStyles={{flex: 1, borderBottomWidth: 0}}
                        data={[{label: "2013", key: 1}, {label: "2014", key: 2}, {label: "2015", key: 3}]}
                        onChange={this.handleOnChange}
                />
              </View>
            </View>
            <Button text="Сохранить" onPress={this.handleOnSubmit}/>
          </View>
        </View>
      </View>
    );
  }
}

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  closeModal: React.PropTypes.func.isRequired
}

class AddCarModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };

    this.open  = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({
      modalVisible: true
    });
  }

  close() {
    this.setState({
      modalVisible: false
    });
  }

  render() {
    return (
      <Modal
        transparent={true}
        ref="addCarModal"
        visible={this.state.modalVisible}
        onRequestClose={this.close}
        animationType='fade'>
        <Form onSubmit={this.props.onSubmit} closeModal={this.close}/>
      </Modal>
    );
  }
}

AddCarModal.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  modal: {
    width: width,
    height: height,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  modalBackdoor: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  modalForm: {
    marginBottom: 25
  },
  modalTitle: {
    height: 46,
    backgroundColor: '#3F51B5',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalTitleText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8
  },
  modalTitleImg: {
    width: 22,
    height: 22
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    paddingLeft: 45,
    paddingRight: 45
  },
  modalFormContent: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    marginBottom: 25
  },
  modelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default AddCarModal;