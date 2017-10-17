import React, {Component} from 'react';
import {
  Container,
  Content,
  Icon
} from 'native-base';

import NBTheme from './NBTheme';

import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

function UserLikesPage(props) {
  return (
    <Container>
      <Content style={styles.contentStyle} theme={NBTheme}>
        <View style={[styles.likeBox, styles.noTopBr]}>
          <View style={styles.likeTop}>
            <View style={styles.likeTopContent}>
              <View style={styles.imageContainer}>
                <Image style={styles.carImage}
                       source={require('../img/car.png')}/>
              </View>
              <View>
                <Text style={styles.carNameText}>Kia Rio 2011</Text>
                <Text style={styles.carDetailText}>Ремонт сколов</Text>
              </View>
            </View>
            <Icon name='thumbs-o-up' theme={{iconFamily: 'FontAwesome'}} style={styles.likeIcon}/>
          </View>
          <Text style={styles.comment}>Это отличный магазин, все советую!
            Сделали быстро и качественно.</Text>
          <View style={styles.addressBox}>
            <Icon name='place' style={styles.addressIcon}/>
            <Text style={styles.addressText}>Крепость, ул. Новосибирская 16 стр
              2</Text>
          </View>
          <View style={styles.likeBottom}>
            <Text style={styles.bottomText}>28 июня 2016, 11:45</Text>
          </View>
        </View>
        <View style={styles.likeBox}>
          <View style={styles.likeTop}>
            <View style={styles.likeTopContent}>
              <View style={styles.imageContainer}>
                <Image style={styles.carImage}
                       source={require('../img/car.png')}/>
              </View>
              <View>
                <Text style={styles.carNameText}>Kia Rio 2011</Text>
                <Text style={styles.carDetailText}>Ремонт сколов</Text>
              </View>
            </View>
            <Icon name='thumbs-up' theme={{iconFamily: 'FontAwesome'}} style={styles.likeIcon}/>
          </View>
          <Text style={styles.comment}>Это отличный магазин, все советую!
            Сделали быстро и качественно.</Text>
          <View style={styles.addressBox}>
            <Icon name='place' style={styles.addressIcon}/>
            <Text style={styles.addressText}>Крепость, ул. Новосибирская 16 стр
              2</Text>
          </View>
          <View style={styles.likeBottom}>
            <Text style={styles.bottomText}>28 июня 2016, 11:45</Text>
          </View>
        </View>
        <View style={styles.likeBox}>
          <View style={styles.likeTop}>
            <View style={styles.likeTopContent}>
              <View style={styles.imageContainer}>
                <Image style={styles.carImage}
                       source={require('../img/car.png')}/>
              </View>
              <View>
                <Text style={styles.carNameText}>Mersedes Benz Viara</Text>
                <Text style={styles.carDetailText}>Ремонт дисков</Text>
              </View>
            </View>
            <Icon name='thumbs-up' theme={{iconFamily: 'FontAwesome'}} style={styles.likeIcon}/>
          </View>
          <View style={styles.addressBox}>
            <Icon name='place' style={styles.addressIcon}/>
            <Text style={styles.addressText}>Крепость, ул. Новосибирская 16 стр
              2</Text>
          </View>
          <View style={styles.likeBottom}>
            <Text style={styles.bottomText}>28 июня 2016, 11:45</Text>
          </View>
        </View>
      </Content>
    </Container>
  );
}

UserLikesPage.propTypes = {}

const styles = StyleSheet.create({
  contentStyle: {
    backgroundColor: '#ebedf0'
  },
  imageContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 40 / 2,
    marginRight: 15
  },
  carImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  noTopBr: {
    borderTopWidth: 0,
  },
  likeBox: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c6c9',
    borderTopWidth: 1,
    borderTopColor: '#e3e5e8',
    padding: 16,
    paddingBottom: 12,
    marginBottom: 10
  },
  likeTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  likeTopContent: {
    flexDirection: 'row',
  },
  carNameText: {
    color: '#2e3033',
    fontSize: 16
  },
  carDetailText: {
    color: '#A2A7AE',
    fontSize: 13
  },
  likeIcon: {
    fontSize: 22,
    color: '#3F51B5'
  },
  comment: {
    flex: 1,
    color: '#2e3033',
    marginTop: 10
  },
  addressBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addressIcon: {
    fontSize: 16,
    color: '#c4c8cc',
    marginRight: 5
  },
  addressText: {
    color: '#A2A7AE',
    flex: 1,
    fontSize: 13
  },
  likeBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#dadada',
    paddingTop: 10,
    marginTop: 10,
    paddingHorizontal: 10
  },
  bottomText: {
    color: '#A2A7AE',
    flex: 1,
    fontSize: 13
  },
  bottomRow: {
    flexDirection: 'row'
  },
  redColor: {
    color: '#ff6347'
  },
  blueColor: {
    color: '#3F51B5'
  }
});

export default UserLikesPage;