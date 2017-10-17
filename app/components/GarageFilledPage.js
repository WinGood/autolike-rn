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
  View
} from 'react-native';

class GarageFilledPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem style={styles.listItem}>
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
                      name='ios-arrow-forward-outline'/>
              </View>
            </ListItem>
            <View style={styles.carItemWrapper}>
              <View style={styles.carItem}>
                <View style={styles.carItemLeft}>
                  <View style={styles.carItemLeftImg}>
                    <Image
                      style={styles.carImg}
                      source={require('../img/car_add_icon.png')}
                    />
                  </View>
                  <Text style={styles.carName}>Nissan Teana</Text>
                </View>
                <View style={styles.carItemRight}>
                  <Image
                    style={styles.likeImg}
                    resizeMode="contain"
                    source={require('../img/like_icon.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.carItemWrapper}>
              <View style={styles.carItem}>
                <View style={styles.carItemLeft}>
                  <View style={styles.carItemLeftImg}>
                    <Image
                      style={styles.carImg}
                      source={require('../img/car_add_icon.png')}
                    />
                  </View>
                  <Text style={styles.carName} numberOfLines={1}>Mersedes-Benz</Text>
                </View>
                <View style={styles.carItemRight}>
                  <Image
                    style={styles.likeImg}
                    resizeMode="contain"
                    source={require('../img/like_icon.png')}
                  />
                </View>
              </View>
            </View>
            <ListItem style={styles.listItem}>
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
                      name='ios-arrow-forward-outline'/>
              </View>
            </ListItem>
            <View style={styles.carItemWrapper}>
              <View style={styles.carItem}>
                <View style={styles.carItemLeft}>
                  <View style={styles.carItemLeftImg}>
                    <Image
                      style={[styles.carImg, {borderRadius: 32 / 2}]}
                      source={require('../img/car.png')}
                    />
                  </View>
                  <Text style={styles.carName} numberOfLines={1}>Kia Rio</Text>
                </View>
                <View style={styles.carItemRight}>
                  <Image
                    style={styles.likeImg}
                    resizeMode="contain"
                    source={require('../img/like_icon.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.carItemWrapper}>
              <View style={styles.carItem}>
                <View style={styles.carItemLeft}>
                  <View style={styles.carItemLeftImg}>
                    <Image
                      style={[styles.carImg, {borderRadius: 32 / 2}]}
                      source={require('../img/car.png')}
                    />
                  </View>
                  <Text style={styles.carName} numberOfLines={1}>Nissan Teana</Text>
                </View>
                <View style={styles.carItemRight}>
                  <Image
                    style={styles.likeImg}
                    resizeMode="contain"
                    source={require('../img/like_icon.png')}
                  />
                </View>
              </View>
            </View>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    marginLeft: 0,
    paddingLeft: 16,
    backgroundColor: '#EEEEEE',
  },
  listRight: {
    position: 'absolute',
    right: 16,
    top: 6
  },
  listItemText: {
    fontWeight: 'bold'
  },
  forwardArrow: {
    color: '#A0A0A0'
  },
  carItemWrapper: {
    flex: 1,
  },
  carItem: {
    padding: 8,
    paddingLeft: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,.12)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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

export default GarageFilledPage;