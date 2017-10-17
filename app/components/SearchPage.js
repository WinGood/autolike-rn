import React, {Component} from 'react';
import {
  Icon
} from 'native-base';

import {
  StyleSheet,
  Text,
  ListView,
  TouchableOpacity,
  Dimensions,
  Switch,
  Image,
  View
} from 'react-native';

const {height, width} = Dimensions.get('window');

import RNBottomSheet from 'react-native-bottom-sheet';
import Spinner from 'react-native-loading-spinner-overlay';

import NBTheme from './NBTheme';
import Select from './Select';
import LoadingIndicator from './elements/LoadingIndicator';
import AddDislikeModal from './AddDislikeModal';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    const {cache} = props;
    const ds = new ListView.DataSource({
      rowHasChanged: (
        r1, r2
      ) => r1 !== r2
    });

    let defaultValue = {
      fullFilter: false,
      data: [],
      ds: ds,
      dataSource: null,
      loading: false,
      page: 1,
      max: 3,
      spinner: true
    };

    if (cache && cache.state) {
      this.state = {
        fullFilter: cache.state.fullFilter,
        data: cache.state.data,
        ds: ds,
        dataSource: ds.cloneWithRows(cache.state.data),
        loading: false,
        page: cache.state.page,
        max: cache.state.max,
        spinner: cache.state.spinner
      };
    } else {
      this.state = defaultValue;
    }

    this.toggleFilter    = this.toggleFilter.bind(this);
    this.showActionSheet = this.showActionSheet.bind(this);
    this.onScroll        = this.onScroll.bind(this);
    this.onEndReached    = this.onEndReached.bind(this);
    this.renderHeader    = this.renderHeader.bind(this);
    this.renderFooter    = this.renderFooter.bind(this);
    this.renderRow       = this.renderRow.bind(this);
  }

  componentWillMount() {
    const {cache} = this.props;

    if (!cache) {
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
        // console.warn(this.props.cache.scrollY); // 686.5 // 1543.5 // 2030
        this.scrollView.getScrollResponder().scrollTo({
          x: 0,
          y: this.props.cache.scrollY,
          animated: false
        });
      }, 0);
    }
  }

  onScroll(event) {
    const scrollY = event.nativeEvent.contentOffset.y;
    this.scrollY  = scrollY;
    // console.warn(JSON.stringify(event.nativeEvent));
    // console.warn(height);
    // console.warn(132.5 * 5 + 56);
  }

  onEndReached() {
    if ((this.state.loading) || (this.state.page >= this.state.max)) {
      return;
    }

    // console.warn('load more');

    this.setState({
      loading: true
    });

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
    }, 600);
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
              renderHeader={this.renderHeader}
              renderFooter={this.renderFooter}
              renderRow={this.renderRow}
              onEndReached={this.onEndReached}
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