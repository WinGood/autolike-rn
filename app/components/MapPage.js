import React, {Component} from 'react';
import {
  Icon
} from 'native-base';

import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  InteractionManager,
  View
} from 'react-native';

import MapView from 'react-native-maps';

const {height, width} = Dimensions.get('window');

class MapPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 56.0228083287421,
        longitude: 92.89742899999986,
        latitudeDelta: 0.025,
        longitudeDelta: 0.025,
      },
      loadingView: true
    };

    this.zoomIn  = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        loadingView: false
      });
    });
  }

  zoomIn() {
  }

  zoomOut() {

  }

  render() {
    if (this.state.loadingView) {
      return null;
    }

    return (
      <ScrollView
        style={StyleSheet.absoluteFill}
        contentContainerStyle={styles.scrollview}
        showsVerticalScrollIndicator={false}
      >
        <MapView
          style={styles.map}
          ref={(map) => {this.map = map}}
          initialRegion={this.state.region}
        >
          <MapView.Marker
            coordinate={{latitude: 56.0228083287421, longitude: 92.89742899999986}}
            title="Красноярск"
            description="Описание"
          />
        </MapView>
        <TouchableOpacity activeOpacity={0.7}
                          onPress={() => this.context.navigator.back()}
                          style={[styles.backBtn, styles.blackBtn, styles.btn]}>
          <Icon name='md-arrow-back' style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.zoomIn} activeOpacity={0.7}
                          style={[styles.zoomInBtn, styles.whiteBtn, styles.btn]}>
          <Icon name='md-add' style={styles.blackIcon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.zoomOut} activeOpacity={0.7}
                          style={[styles.zoomOutBtn, styles.whiteBtn, styles.btn]}>
          <Icon name='md-remove' style={styles.blackIcon}/>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

MapPage.contextTypes = {
  navigator: React.PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  scrollview: {
    alignItems: 'center',
  },
  map: {
    width: width,
    height: height,
    alignSelf: 'stretch',
  },
  btn: {
    borderRadius: 48 / 2,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backBtn: {
    position: 'absolute',
    top: 15,
    left: 15
  },
  zoomInBtn: {
    position: 'absolute',
    top: (height / 2) - 48,
    right: 15
  },
  zoomOutBtn: {
    position: 'absolute',
    top: (height / 2) + 15,
    right: 15
  },
  blackBtn: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  whiteBtn: {
    backgroundColor: '#FFF'
  },
  icon: {
    color: '#FFF'
  },
  blackIcon: {
    color: '#222222'
  }
});

export default MapPage;