/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Container, Header, Title, Button, Icon, Content, List, ListItem, Badge} from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";
import Drawer from 'react-native-drawer';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

function ControlPanel() {
  return (
    <Grid>
      <Row size={1} style={styles.drawerTop}>
        <Col size={35} style={styles.drawerTopLeft}>
          <View style={styles.drawerCar}></View>
        </Col>
        <Col size={65} style={styles.drawerTopRight}>
          <Text style={styles.drawerNickname}>aj12</Text>
          <Text style={styles.drawerText}>Toyota Corolla</Text>
          <Text style={styles.drawerText}>Нас 103</Text>
        </Col>
      </Row>
      <Row size={4} style={styles.whiteBg}>
        <Col>
          <List>
            <ListItem iconLeft style={styles.drawerListItem}>
              <Icon name='md-map' />
              <Text style={styles.drawerListItemText}>Лайки компаний</Text>
            </ListItem>
            <ListItem iconLeft style={styles.drawerListItem}>
              <Icon name='md-thumbs-up' />
              <Text style={styles.drawerListItemText}>Мои лайки</Text>
            </ListItem>
            <ListItem iconLeft style={styles.drawerListItem}>
              <Icon name='md-car' />
              <Text style={styles.drawerListItemText}>Мои авто</Text>
            </ListItem>
            <ListItem iconLeft style={styles.drawerListItem}>
              <Icon name='md-cog' />
              <Text style={styles.drawerListItemText}>Настройки</Text>
            </ListItem>
          </List>
        </Col>
      </Row>
    </Grid>
  );
}

export default class AutoLike extends Component {
  constructor() {
    super();

    this.openDrawer = this.openDrawer.bind(this);
  }

  openDrawer() {
    this._drawer.open();
  }

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <ControlPanel />
        }
        acceptDoubleTap
        styles={stylesDrawer}
        captureGestures={false}
        acceptTap={true}
        acceptPan={true}
        elevation={12}
        tweenDuration={200}
        panThreshold={0.08}
        openDrawerOffset={0.3}
        panOpenMask={0.2}
        tweenHandler={(ratio) => ({
    main: { opacity:(2-ratio)/2 }
  })}
        negotiatePan
      >
        <Container>
          <Header>
            <Button transparent onPress={this.openDrawer}>
              <Icon name='md-menu'/>
            </Button>
            <Title>Главная</Title>
            <Button transparent>
              <Icon name='ios-search'/>
            </Button>
          </Header>
          <Content style={styles.whiteBg}>
            <Grid>
              <Row size={22}>
                <Col style={styles.filterContainer}>
                  <Text>Filter</Text>
                </Col>
              </Row>
              <Row size={26} style={styles.firstRow}>
                <Col size={1} style={styles.col}>
                  <Icon name='md-cafe' style={styles.colIcon} />
                  <Text>АЗС</Text>
                </Col>
                <Col size={1} style={styles.col}>
                  <Icon name='md-calculator' style={styles.colIcon} />
                  <Text>Мойки</Text>
                </Col>
                <Col size={1} style={styles.col}>
                  <Icon name='md-call' style={styles.colIcon} />
                  <Text>Замена масла</Text>
                </Col>
              </Row>
              <Row size={26} style={styles.row}>
                <Col size={1} style={styles.col}>
                  <Icon name='md-camera' style={styles.colIcon} />
                  <Text>Шиномонтаж</Text>
                </Col>
                <Col size={1} style={styles.col}>
                  <Icon name='md-cash' style={styles.colIcon} />
                  <Text>Запчасти</Text>
                </Col>
                <Col size={1} style={styles.col}>
                  <Icon name='md-chatboxes' style={styles.colIcon} />
                  <Text>Оборудование</Text>
                </Col>
              </Row>
              <Row size={26} style={styles.row}>
                <Col size={1} style={styles.col}>
                  <Icon name='md-cloud' style={styles.colIcon} />
                  <Text>Автосервисы</Text>
                </Col>
                <Col size={1} style={styles.col}>
                  <Icon name='md-compass' style={styles.colIcon} />
                  <Text>Страховка</Text>
                </Col>
                <Col size={1} style={styles.col}>
                  <Icon name='md-construct' style={styles.colIcon} />
                  <Text>Юристы</Text>
                </Col>
              </Row>
            </Grid>
          </Content>
        </Container>
      </Drawer>
    );
  }
}


const stylesDrawer = {
  drawer: {
    backgroundColor: '#E1E1E1'
  }
};

const styles = StyleSheet.create({
  whiteBg: {
    backgroundColor: '#FFF'
  },
  filterContainer: {
    backgroundColor: '#D5D5D5',
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  firstRow: {
    backgroundColor: '#FFF',
    paddingTop: 15,
    paddingBottom: 40,
    paddingRight: 5,
    paddingLeft: 5,
  },
  row: {
    backgroundColor: '#FFF',
    paddingTop: 0,
    paddingBottom: 40,
    paddingRight: 5,
    paddingLeft: 5,
  },
  col: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#D2D2D2',
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
    height: 120,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'column',
    shadowColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10
  },
  colIcon: {
    marginBottom: 5,
    fontSize: 60,
    color: '#4987D1'
  },
  drawerListItem: {
    marginLeft: 0,
    paddingLeft: 15
  },
  drawerListItemText: {
    marginLeft: 15
  },
  drawerTop: {
    backgroundColor: '#E1E1E1',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    padding: 15
  },
  drawerTopLeft: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  drawerTopRight: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  drawerNickname: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  drawerText: {
    color: '#656565',
    fontSize: 14
  },
  drawerCar: {
    backgroundColor: '#FF2553',
    width: 68,
    height: 68,
    borderRadius: 68 / 2
  }
});

AppRegistry.registerComponent('AutoLike', () => AutoLike);
