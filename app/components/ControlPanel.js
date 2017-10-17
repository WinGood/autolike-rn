import React, {Component} from 'react';
import Drawer from './Drawer';
import {
  Avatar,
  COLOR,
  TYPO
} from 'react-native-material-design';

import {
  Image,
  Text,
  StyleSheet,
  View
} from 'react-native';

class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.goToPage = this.goToPage.bind(this);

    this.state = {
      currentItemPath: null
    };
  }

  componentDidMount() {
    const {navigator} = this.context;

    const routes       = navigator.navigator.getCurrentRoutes();
    const currentRoute = routes[routes.length - 1];

    this.setState({
      currentPath: currentRoute.path
    });
  }

  goToPage(path) {
    this.context.drawer.closeDrawer();

    if (this.state.currentPath !== path) {
      this.context.navigator.to(path);
      this.setState({
        currentPath: path
      });
    }
  }

  render() {
    return (
      <Drawer theme='light'>
        <Drawer.Header height={190}
                       image={<Image source={require('../img/header.jpg')} />}>
          <View style={styles.header}>
            <Avatar size={80}
                    borderRadius={80}
                    image={<Image source={{ uri: "http://facebook.github.io/react-native/img/opengraph.png?2" }}/>}/>
            <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontTitle]}>
              aj12
            </Text>
            <Text style={[COLOR.paperGrey50, TYPO.paperFontSubhead]}>
              Toyota Corolla
            </Text>
          </View>
        </Drawer.Header>
        <Drawer.Section
          title="Навигация"
          items={[
          {
            icon: 'place',
            value: 'Лайки компаний',
            onPress: () => this.goToPage('home'),
            active: (this.state.currentPath === 'home') ? true: false,
            }, {
            icon: 'favorite',
            value: 'Мои лайки',
            onPress: () => this.goToPage('userLikes'),
            active: (this.state.currentPath === 'userLikes') ? true: false,
            }, {
            icon: 'directions-car',
            value: 'Мои авто',
            onPress: () => this.goToPage('garage'),
            active: (this.state.currentPath === 'garage') ? true: false,
            }, {
            icon: 'build',
            value: 'Настройки',
            onPress: () => this.goToPage('settings'),
            active: (this.state.currentPath === 'settings') ? true: false,
          }
        ]}
        />
      </Drawer>
    );
  }
}

ControlPanel.contextTypes = {
  drawer: React.PropTypes.object,
  navigator: React.PropTypes.object
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 16
  },
  text: {
    marginTop: 20
  }
});

export default ControlPanel;