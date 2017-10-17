import React, {Component} from 'react';
import {
  Container,
  Content,
  Icon
} from 'native-base';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

function FirmTabAbout(props) {
  return (
    <Container>
      <Content>
        <View style={styles.statDivider}>
          <Text style={styles.statDividerText}>Основная информация</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name='phone' style={styles.statIcon}/>
          <Text style={styles.statValue}>+7 (391) 278-00-01</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name='phone' style={styles.statIcon}/>
          <Text style={styles.statValue}>+7 (391) 278-13-11</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name='web' style={styles.statIcon}/>
          <Text style={styles.statValue}>e92.ru</Text>
        </View>
        <View style={styles.statDivider}>
          <Text style={styles.statDividerText}>О компании</Text>
        </View>
        <View style={styles.textItem}>
          <Text style={styles.statValue}>
            Продажа новых запчастей для корейских авто. Большой ассортимент, самые низкие цены по городу! Услуги автосервиса
          </Text>
        </View>
      </Content>
    </Container>
  );
}

FirmTabAbout.propTypes = {}

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
  statIcon: {
    color: '#737373'
  },
  statValue: {
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
  textItem: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 12
  }
});

export default FirmTabAbout;