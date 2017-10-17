import React, {Component} from 'react';
import {
  Container,
  Content,
  Icon
} from 'native-base';

import {
  StyleSheet,
  Text,
  ListView,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image,
  View
} from 'react-native';

import RNBottomSheet from 'react-native-bottom-sheet';
import Spinner from 'react-native-loading-spinner-overlay';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import NBTheme from './NBTheme';
import Select from './Select';
import LoadingIndicator from './elements/LoadingIndicator';
import AddDislikeModal from './AddDislikeModal';
import SwipeRefreshLayoutAndroid from './SwipeRefreshLayoutAndroid';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (
        r1, r2
      ) => r1 !== r2
    });

    this.scrollY = 0;

    this.state = {
      fullFilter: false,
      data: [],
      ds: ds,
      dataSource: null,
      loading: false,
      page: 1,
      max: 3,
      spinner: true
    };

    this.toggleFilter    = this.toggleFilter.bind(this);
    this.showActionSheet = this.showActionSheet.bind(this);
    this.onScroll        = this.onScroll.bind(this);
    this.renderHeader    = this.renderHeader.bind(this);
    this.renderFooter    = this.renderFooter.bind(this);
    this.renderRow       = this.renderRow.bind(this);
  }

  componentWillMount() {
    // Если state уже закеширован, то восстанавливаем view в прежднее
    // состояние
    if (this.props.cache) {
      this.setState({...this.props.cache.state});
    } else {
      setTimeout(() => {
        const data = [{
          title: 'Крепость 1',
          address: 'ул. Калинина 62, стр. 6',
          distance: 6.2
        }, {
          title: 'Крепость 2',
          address: 'ул. Калинина 62, стр. 6',
          distance: 6.2
        }, {
          title: 'Крепость 3',
          address: 'ул. Калинина 62, стр. 6',
          distance: 6.2
        }, {
          title: 'Крепость',
          address: 'ул. Калинина 62, стр. 6',
          distance: 6.2
        }, {
          title: 'Крепость',
          address: 'ул. Калинина 62, стр. 6',
          distance: 6.2
        }];

        this.setState({
          data,
          dataSource: this.state.ds.cloneWithRows(data),
          spinner: false
        });
      }, 600);
    }
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

  onScroll(event) {
    const bottomEnd       = event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height;
    const scrollY         = event.nativeEvent.contentOffset.y;
    const positionLoading = ((bottomEnd * 20) / 100);

    // console.warn(FIRM_ROW_HEIGHT * 5); // одинакова высота
    // console.warn(event.nativeEvent.contentSize.height); // одинакова высота
    // console.warn(event.nativeEvent.layoutMeasurement.height); // 511
    // console.warn(this.listHeight); // 662.5
    // console.warn(this.scrollViewHeight); // 511

    // console.warn(event.nativeEvent.contentOffset.y); // 151.5

    const endScrollPosition = this.listHeight - this.scrollViewHeight;

    if (scrollY === endScrollPosition) {
      // console.warn('load');
      if (this.state.loading) {
        return;
      }

      this.setState({
        loading: true
      });

      // console.warn('load');

      setTimeout(() => {
        const nextPage = this.state.page + 1;
        const newData  = [{
          title: 'Крепость page' + nextPage,
          address: 'ул. Калинина 62, стр. 6',
          distance: 6.2
        }, {
          title: 'Крепость page' + nextPage,
          address: 'ул. Калинина 62, стр. 6',
          distance: 6.2
        }, {
          title: 'Крепость page' + nextPage,
          address: 'ул. Калинина 62, стр. 6',
          distance: 6.2
        }, {
          title: 'Крепость page' + nextPage,
          address: 'ул. Калинина 62, стр. 6',
          distance: 6.2
        }, {
          title: 'Крепость page' + nextPage,
          address: 'ул. Калинина 62, стр. 6',
          distance: 6.2
        }];

        const nextData = this.state.data.concat(newData);

        this.setState({
          data: nextData,
          page: nextPage,
          dataSource: this.state.ds.cloneWithRows(nextData),
          loading: false
        });
        // console.warn('end load');
      }, 600);
    }

    // 662.5 - 511 = 151.5
    // TODO работает не совсем точно
    // this.scrollY = bottomEnd - scrollY;
    // console.warn(this.scrollY); // 1492
    // console.warn(event.nativeEvent.contentSize.height); // 2033
    // console.warn(event.nativeEvent.layoutMeasurement.height); // 511
    const test = (Math.ceil(bottomEnd - scrollY));


    // if ((test === 0) && (this.state.page < this.state.max) && (!this.state.loading)) {
    //   this.setState({
    //     loading: true
    //   });
    //
    //   setTimeout(() => {
    //     const nextPage = this.state.page + 1;
    //     const newData  = [{
    //       title: 'Крепость page' + nextPage,
    //       address: 'ул. Калинина 62, стр. 6',
    //       distance: 6.2
    //     }, {
    //       title: 'Крепость page' + nextPage,
    //       address: 'ул. Калинина 62, стр. 6',
    //       distance: 6.2
    //     }, {
    //       title: 'Крепость page' + nextPage,
    //       address: 'ул. Калинина 62, стр. 6',
    //       distance: 6.2
    //     }, {
    //       title: 'Крепость page' + nextPage,
    //       address: 'ул. Калинина 62, стр. 6',
    //       distance: 6.2
    //     }, {
    //       title: 'Крепость page' + nextPage,
    //       address: 'ул. Калинина 62, стр. 6',
    //       distance: 6.2
    //     }];
    //
    //     const nextData = this.state.data.concat(newData);
    //
    //     this.setState({
    //       data: nextData,
    //       page: nextPage,
    //       dataSource: this.state.ds.cloneWithRows(nextData),
    //       loading: false
    //     });
    //   }, 1000);
    // }
  }

  toggleFilter() {
    this.setState({
      fullFilter: !this.state.fullFilter
    });
  }

  showActionSheet() {
    const {navigator} = this.context;

    RNBottomSheet.showBottomSheetWithOptions({
      options: ['Страница фирмы', 'Поставить лайк', 'Поставить дизлайк'],
      title: 'Крепость',
      message: 'Сообщение'
    }, (value) => {
      if (value == 0) {
        navigator.forward('firm', 'Название фирмы', {
          cache: {
            scrollY: this.scrollY,
            state: this.state
          }
        });
      }

      if (value == 1 || value == 2) {
        this.addDislike.open();
      }
    });
  }

  renderHeader() {
    const {navigator} = this.context;
    const filterControl = (this.state.fullFilter) ? (
      <View style={{flex: 1}}>
        <View style={styles.switchContainer}>
          <Switch />
          <Text style={styles.filterText}>Открыто сейчас</Text>
        </View>
        <Select
          placeholder="Район города"
          field="strit"
          data={[{label: "Mark II", key: 1}, {label: "Kalina", key: 2}, {label: "Rio", key: 3}]}
        />
        <Select
          containerStyles={{borderBottomWidth: 0}}
          placeholder="Сортировка"
          field="sort"
          data={[{label: "Mark II", key: 1}, {label: "Kalina", key: 2}, {label: "Rio", key: 3}]}
        />
      </View>
    ) : null;

    return (
      <View style={styles.filter}>
        <View style={styles.filterMini}>
          <View style={styles.filterLeft}>
            <Image
              style={styles.filterImg}
              source={require('../img/house.png')}
            />
            <Text style={styles.filterText}>128 компаний</Text>
          </View>
          <View style={styles.filterRight}>
            <TouchableOpacity onPress={this.toggleFilter}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>фильтр</Text>
                {
                  (this.state.fullFilter)
                    ?
                    <Icon style={styles.btnIcon}
                          theme={NBTheme}
                          name='expand-more'/>
                    :
                    <Icon style={styles.btnIcon}
                          theme={NBTheme}
                          name='chevron-right'/>
                }
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigator.forward('onMap', 'Ремонт сколов', {
                  cache: {
                    scrollY: this.scrollY,
                    state: this.state
                  }
                })}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>на карте</Text>
                <Icon style={styles.btnIcon}
                      theme={NBTheme}
                      name='chevron-right'/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {filterControl}
      </View>
    );
  }

  renderFooter() {
    if (this.state.loading) {
      return <LoadingIndicator />
    }

    return null;
  }

  renderRow(firm) {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.firm}
                        onPress={this.showActionSheet}>
        <View style={styles.firmLeft}>
          <Text style={styles.firmName}>{firm.title}</Text>
          <Text style={styles.address}>{firm.address}</Text>
          <View style={styles.distanceRow}>
            <Icon name='my-location' theme={NBTheme}
                  style={styles.distanceIcon}/>
            <Text style={styles.distance}>{firm.distance} км</Text>
          </View>
        </View>
        <View style={styles.firmRight}>
          <View style={styles.graph}/>
          <View style={styles.reviewContainer}>
            <View style={styles.reviewBtn}>
              <Text style={styles.reviewBtnText}>-12</Text>
              <Icon name='thumbs-o-down'
                    theme={{iconFamily: 'FontAwesome'}}
                    style={styles.likeIcon}/>
            </View>
            <View style={styles.reviewBtn}>
              <Icon name='thumbs-o-up' theme={{iconFamily: 'FontAwesome'}}
                    style={styles.likeIcon}/>
              <Text style={styles.reviewBtnText}>+35</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Spinner visible={this.state.spinner}/>
        <AddDislikeModal ref={(modal) => {this.addDislike = modal}}/>
        {
          (this.state.dataSource)
            ?
            <ListView
              style={styles.contentStyle}
              enableEmptySections={true}
              automaticallyAdjustContentInsets={false}
              dataSource={this.state.dataSource}
              ref={(ref) => this.scrollView = ref}
              onLayout={(ev) => this.scrollViewHeight = ev.nativeEvent.layout.height}
              onContentSizeChange={(contentWidth, contentHeight) => this.listHeight = contentHeight}
              renderHeader={this.renderHeader}
              renderFooter={this.renderFooter}
              renderRow={this.renderRow}
              onScroll={this.onScroll}
            />
            :
            null
        }
      </View>
    );
  }
}

SearchPage.contextTypes = {
  navigator: React.PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: '#ebedf0'
  },
  filter: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c6c9',
    marginBottom: 10
  },
  filterMini: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  filterImg: {
    width: 36,
    height: 23,
    marginRight: 10
  },
  filterText: {
    color: '#353535'
  },
  filterLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  filterRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  switchContainer: {
    padding: 4,
    paddingLeft: 7,
    paddingRight: 7,
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12
  },
  btnText: {
    color: '#353535',
    marginLeft: 5,
    marginRight: 5,
  },
  btnIcon: {
    fontSize: 20,
    marginTop: 4,
    color: '#8C8C8C'
  },
  firm: {
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#e3e5e8',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c6c9',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firmLeft: {
    padding: 10,
    paddingLeft: 0,
    flexDirection: 'column'
  },
  firmRight: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  firmName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#353535'
  },
  address: {
    color: '#A2A7AE',
    fontSize: 13
  },
  distanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: 5
  },
  distance: {
    color: '#A2A7AE',
    fontSize: 13
  },
  distanceIcon: {
    fontSize: 16,
    color: '#c4c8cc',
    marginRight: 5
  },
  graph: {
    width: 70,
    height: 70,
    backgroundColor: '#3fa1be',
    borderRadius: 70 / 2,
    marginBottom: 5
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  reviewBtn: {
    marginTop: 5,
    marginLeft: 3,
    marginRight: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  reviewBtnText: {
    fontSize: 12,
    marginLeft: 4,
    marginRight: 4
  },
  likeIcon: {
    fontSize: 20,
    color: '#3F51B5'
  },
  reviewBtnImg: {
    width: 20,
    height: 19,
  },
  reviewBtnImgDislike: {
    marginTop: 13
  }
});

export default SearchPage;