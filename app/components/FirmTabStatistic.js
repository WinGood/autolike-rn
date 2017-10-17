import React, {Component} from 'react';
import {
  Container,
  Content
} from 'native-base';

import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

function FirmTabStatistic(props) {
  return (
    <Container>
      <Content>
        <View style={styles.statItem}>
          <Text style={styles.statText}>Всего лайков:</Text>
          <Text style={styles.statValue}>35</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statText}>Лайки других марок:</Text>
          <Text style={styles.statValue}>26</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statText}>Лайки Kia:</Text>
          <Text style={styles.statValue}>12</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statText}>Лайки Kia Rio:</Text>
          <Text style={styles.statValue}>5</Text>
        </View>
        <View style={styles.statDivider}>
          <Text style={styles.statDividerText}>Последние лайки</Text>
        </View>
        <View style={styles.review}>
          <View style={styles.reviewDate}>
            <Text style={styles.reviewDateText}>28.06.2016</Text>
          </View>
          <View style={styles.reviewImageContainer}>
            <Image style={styles.reviewImage} source={require('../img/car.png')} />
          </View>
          <View style={styles.reviewBody}>
            <Text style={styles.userInfoText} numberOfLines={1}>user2156 (Kia Rio 2011)</Text>
            <Text>Это отличный магазин рекомендую! Это отличный магазин рекомендую!</Text>
          </View>
        </View>
        <View style={styles.review}>
          <View style={styles.reviewDate}>
            <Text style={styles.reviewDateText}>28.06.2016</Text>
          </View>
          <View style={styles.reviewImageContainer}>
            <Image style={styles.reviewImageLike} source={require('../img/like.png')} />
          </View>
          <View style={styles.reviewBody}>
            <Text style={styles.userInfoText} numberOfLines={1}>user2156 (Kia Rio 2013)</Text>
            <Text>Это отличный магазин рекомендую!</Text>
          </View>
        </View>
        <View style={styles.review}>
          <View style={styles.reviewDate}>
            <Text style={styles.reviewDateText}>26.06.2016</Text>
          </View>
          <View style={styles.reviewImageContainer}>
            <Image style={styles.reviewImage} source={require('../img/car.png')} />
          </View>
          <View style={styles.reviewBody}>
            <Text style={styles.userInfoText} numberOfLines={1}>user2215 (Kia Rio 2013)</Text>
            <Text>Рекомендую!</Text>
          </View>
        </View>
        <View style={styles.review}>
          <View style={styles.reviewDate}>
            <Text style={styles.reviewDateText}>23.06.2016</Text>
          </View>
          <View style={styles.reviewImageContainer}>
            <Image style={styles.reviewImageLike} source={require('../img/like.png')} />
          </View>
          <View style={styles.reviewBody}>
            <Text style={styles.userInfoText} numberOfLines={1}>user2156 (Kia Rio 2013)</Text>
            <Text>Это отличный магазин рекомендую!</Text>
          </View>
        </View>
      </Content>
    </Container>
  );
}

FirmTabStatistic.propTypes = {

}

const styles = StyleSheet.create({
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    paddingHorizontal: 15,
    paddingVertical: 12
  },
  statText: {

  },
  statValue: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#353535'
  },
  statDivider: {
    backgroundColor: '#ededed',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  statDividerText: {
    fontSize: 14,
    color: '#353535'
  },
  review: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
    backgroundColor: '#FFF',
    elevation: 1,
    paddingHorizontal: 15,
    paddingVertical: 12
  },
  reviewDate: {
    position: 'absolute',
    right: 15,
    top: 12
  },
  reviewDateText: {
    fontSize: 12
  },
  reviewImageContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 40 / 2,
    marginRight: 15
  },
  reviewImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  reviewImageLike: {
    width: 16,
    height: 15
  },
  reviewBody: {
    flex: 1
  },
  userInfoText: {
    fontSize: 15,
    color: '#353535'
  }
});

export default FirmTabStatistic;