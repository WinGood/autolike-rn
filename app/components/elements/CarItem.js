import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

function CarItem(props) {
  return (
    <TouchableHighlight underlayColor="#EEEEEE" onPress={props.onPress}>
      <View style={styles.carItemWrapper}>
        <View style={[styles.carItem, props.containerStyle]}>
          <View style={styles.carItemLeft}>
            <View style={styles.carItemLeftImg}>
              <Image
                style={styles.carImg}
                source={require('../../img/car_add_icon.png')}
              />
            </View>
            <Text style={styles.carName}
                  numberOfLines={1}>{`${props.mark} ${props.model}`}</Text>
          </View>
          <View style={styles.carItemRight}>
            <Image
              style={styles.likeImg}
              resizeMode="contain"
              source={require('../../img/like_icon.png')}
            />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

CarItem.propTypes = {
  containerStyle: React.PropTypes.object,
  mark: React.PropTypes.string.isRequired,
  model: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  carItemWrapper: {
    flex: 1,
  },
  carItem: {
    padding: 8,
    paddingLeft: 16,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e3e5e8',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c6c9',
    marginVertical: 5
  },
  carItemLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  carItemLeftImg: {
    paddingRight: 10
  },
  carName: {
    paddingLeft: 10,
    color: '#222222',
    fontSize: 15
  },
  carItemRight: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 40 / 2,
    marginRight: 5
  },
  likeImg: {
    width: 16,
    height: 15
  },
  carImg: {
    width: 32,
    height: 34
  }
});

export default CarItem;