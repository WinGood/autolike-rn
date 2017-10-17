import React, {Component} from 'react';
import {
  Tabs,
} from 'native-base';

import {
  StyleSheet,
} from 'react-native';

import FirmTabAbout from './FirmTabAbout';
import FirmTabStatistic from './FirmTabStatistic';
import NBTheme from './NBTheme';

class FirmPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingView: true
    };
  }

  componentWillMount() {
    const {navbar, navigator} = this.context;

    navbar.setActions([{
      icon: 'navigation',
      onPress() {
        navigator.forward('map');
      }
    }]);
  }

  render() {
    return (
      <Tabs theme={NBTheme}>
        <FirmTabStatistic tabLabel='СТАТИСТИКА'/>
        <FirmTabAbout tabLabel='О КОМПАНИИ'/>
      </Tabs>
    );
  }
}

FirmPage.contextTypes = {
  navbar: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
};

const styles = StyleSheet.create({});

export default FirmPage;