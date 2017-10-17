import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Modal,
  Dimensions,
  TouchableHighlight,
  TextInput,
  View
} from 'react-native';

import Button from './Button';

const {height, width} = Dimensions.get('window');

function Form(props) {
  return (
    <View style={styles.modal}>
      <TouchableHighlight onPress={props.closeModal}
                          underlayColor="rgba(0,0,0,0.7)">
        <View style={styles.modalBackdoor}/>
      </TouchableHighlight>
      <View style={styles.modalForm}>
        <View style={styles.modalTitle}>
          <Text style={styles.modalTitleText}>Поставить дизлайк</Text>
          <Image
            style={styles.modalTitleImg}
            source={require('../img/add_icon.png')}
          />
        </View>
        <View style={styles.modalContent}>
          <View style={styles.modalFormContent}>
            <View style={styles.subtitle}>
              <Text style={styles.subtitleText}>
                Дата события: <Text style={styles.textUnderline}>23 июня 2016
                12:45</Text>
              </Text>
              <Image style={styles.subtitleImage}/>
            </View>
            <TextInput style={styles.textInput}
                       underlineColorAndroid='rgba(0,0,0,0)'
                       multiline={true}
                       placeholder="Что и как? (не обязательно)"/>
          </View>
          <View style={styles.modalActions}>
            <Button text="Отменить"
                    btnStyle="outline"
                    style={[styles.action, styles.mr]}
                    disableUpperCase
                    onPress={props.closeModal}/>
            <Button text="Сохранить"
                    style={styles.action}
                    disableUpperCase
                    onPress={() => alert('press')}/>
          </View>
        </View>
      </View>
    </View>
  );
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
        <Form closeModal={this.close}/>
      </Modal>
    );
  }
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
    marginBottom: 25
  },
  subtitle: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subtitleText: {
    fontSize: 14,
  },
  textUnderline: {
    textDecorationLine: 'underline'
  },
  subtitleImage: {},
  textInput: {
    height: 80,
    textAlignVertical: 'top',
    borderColor: '#dbdbdb',
    backgroundColor: '#FFF',
    borderWidth: 1
  },
  modalActions: {
    flexDirection: 'row'
  },
  mr: {
    marginRight: 12
  },
  action: {
    flex: 1
  }
});

export default AddCarModal;