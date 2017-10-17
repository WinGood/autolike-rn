import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Toolbar as MaterialToolbar} from 'react-native-material-design';

class AppNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.setActions    = this.setActions.bind(this);
    this.setSubToolbar = this.setSubToolbar.bind(this);
    this.actions       = [];
    this.subToolbar    = null;
  }

  setActions(actions) {
    this.actions = actions;
  }

  setSubToolbar(toolbar) {
    this.subToolbar = toolbar;
  }

  render() {
    const {navigator, drawer} = this.context;

    const routes       = navigator.navigator.getCurrentRoutes();
    const backButton   = (navigator.isChild) ? true : false;
    const currentRoute = routes[routes.length - 1];

    if (!currentRoute.actions) {
      this.actions = [];
    }

    if (!currentRoute.subToolbar) {
      this.subToolbar = null;
    }

    if (currentRoute.hideNavBar) {
      return null;
    }

    const actions    = this.actions;
    const subToolbar = this.subToolbar;
    const mt         = (subToolbar) ? 112 : 56;

    return (
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: mt
        }}>
        <MaterialToolbar
          title={currentRoute.title}
          primary="paperIndigo"
          icon={backButton ? 'arrow-back' : 'menu'}
          onIconPress={() => backButton ? navigator.back() : drawer.openDrawer()}
          actions={actions}
          elevation={0}
          rightIconStyle={{marginRight: 16}}
        />
        {subToolbar}
      </View>
    );
  }
}

AppNavBar.contextTypes = {
  drawer: React.PropTypes.object,
  navigator: React.PropTypes.object
};

export default AppNavBar;