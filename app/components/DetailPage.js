import React, {Component} from 'react';
import {Subheader} from 'react-native-material-design';
import ModalPicker from './ModalPicker';

import {
  Container,
  Icon
} from 'native-base';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import NBTheme from './NBTheme';
import SubToolbarSelect from './SubToolbarSelect';

class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.openPicker   = this.openPicker.bind(this);
    this.onScroll     = this.onScroll.bind(this);

    this.state = {
      spinner: true
    };
  }

  openPicker() {
    this.picker.open();
  }

  onScroll(event) {
    this.scrollY = event.nativeEvent.contentOffset.y;
  }

  componentDidMount() {
    // Скролл до преждней позиции
    if (this.props.cache) {
      setTimeout(() => {
        this.scrollView.scrollTo({
          y: this.props.cache.scrollY,
          animated: false
        });
      });
    }
  }

  componentWillMount() {
    if (this.props.cache) {
      this.setState({...this.props.cache.state});
    } else {
      setTimeout(() => {
        this.setState({
          spinner: false
        });
      }, 600);
    }

    const {navbar} = this.context;

    navbar.setSubToolbar(
      <View style={styles.subNavBar}>
        <SubToolbarSelect text="Все города"/>
        <SubToolbarSelect text="Все авто"/>
      </View>
    );
  }

  goSearchPage(category) {
    const {navigator} = this.context;

    navigator.forward('search', category, {
      cache: {
        scrollY: this.scrollY,
        state: this.state
      }
    });
  }

  render() {
    return (
      <Container>
        <ScrollView
          style={styles.contentStyle}
          ref={(ref) => this.scrollView = ref}
          onLayout={(ev) => this.scrollViewHeight = ev.nativeEvent.layout.height}
          onContentSizeChange={(contentWidth, contentHeight) => this.listHeight = contentHeight}
          onScroll={this.onScroll}
        >
          <Spinner visible={this.state.spinner}/>
          <View style={styles.innerContent}>
            <Subheader text="Выберите подкатегорию"/>

            <TouchableHighlight underlayColor="#F6F6F6"
                                onPress={this.goSearchPage.bind(this, 'Кузовной ремонт')}>
              <View style={styles.listItem}>
                <View style={styles.numArea}>
                  <Text style={styles.numText}>1</Text>
                </View>
                <View>
                  <Text style={styles.itemText}>Кузовной ремонт</Text>
                </View>
                <Icon style={styles.forwardArrow}
                      theme={NBTheme}
                      name='chevron-right'/>
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor="#F6F6F6"
                                onPress={this.goSearchPage.bind(this, 'Гарантийное ТО')}>
              <View style={styles.listItem}>
                <View style={styles.numArea}>
                  <Text style={styles.numText}>1</Text>
                </View>
                <View>
                  <Text style={styles.itemText}>Гарантийное ТО</Text>
                </View>
                <Icon style={styles.forwardArrow}
                      theme={NBTheme}
                      name='chevron-right'/>
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor="#F6F6F6"
                                onPress={this.goSearchPage.bind(this, 'Диагностика')}>
              <View style={styles.listItem}>
                <View style={styles.numArea}>
                  <Text style={styles.numText}>1</Text>
                </View>
                <View>
                  <Text style={styles.itemText}>Диагностика</Text>
                </View>
                <Icon style={styles.forwardArrow}
                      theme={NBTheme}
                      name='chevron-right'/>
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor="#F6F6F6"
                                onPress={this.goSearchPage.bind(this, 'Ремонт Сколов')}>
              <View style={styles.listItem}>
                <View style={styles.numArea}>
                  <Text style={styles.numText}>1</Text>
                </View>
                <View>
                  <Text style={styles.itemText}>Ремонт Сколов</Text>
                </View>
                <Icon style={styles.forwardArrow}
                      theme={NBTheme}
                      name='chevron-right'/>
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor="#F6F6F6"
                                onPress={this.goSearchPage.bind(this, 'Ремонт КПП')}>
              <View style={styles.listItem}>
                <View style={styles.numArea}>
                  <Text style={styles.numText}>1</Text>
                </View>
                <View>
                  <Text style={styles.itemText}>Ремонт КПП</Text>
                </View>
                <Icon style={styles.forwardArrow}
                      theme={NBTheme}
                      name='chevron-right'/>
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor="#F6F6F6"
                                onPress={this.goSearchPage.bind(this, 'Ремонт ДВС')}>
              <View style={styles.listItem}>
                <View style={styles.numArea}>
                  <Text style={styles.numText}>1</Text>
                </View>
                <View>
                  <Text style={styles.itemText}>Ремонт ДВС</Text>
                </View>
                <Icon style={styles.forwardArrow}
                      theme={NBTheme}
                      name='chevron-right'/>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

DetailPage.contextTypes = {
  navigator: React.PropTypes.object.isRequired,
  navbar: React.PropTypes.object.isRequired
};

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
    height: 56
  },
  filterContainer: {
    backgroundColor: '#EEE',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    height: 94
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  numArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    backgroundColor: '#cecece'
  },
  numText: {
    color: '#fff',
    fontSize: 15
  },
  itemText: {
    color: '#222222'
  },
  forwardArrow: {
    position: 'absolute',
    top: 14,
    right: 10,
    color: '#bdbdbd'
  }
});

export default DetailPage;