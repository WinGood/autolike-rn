import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

import {
  AppRegistry,
  DrawerLayoutAndroid,
  Navigator,
  InteractionManager,
  View,
  Dimensions
} from 'react-native';

import reducers from './reducers';
import AppNavBar from './components/AppNavBar';
import ControlPanel from './components/ControlPanel';
import Navigate from './utils/Navigate';

const store = createStore(
  reducers
);

const DRAWER_WIDTH_LEFT = 56;

Navigator.prototype.replaceWithAnimation = function(route) {
  const activeLength               = this.state.presentedIndex + 1;
  const activeStack                = this.state.routeStack.slice(0, activeLength);
  const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
  const nextStack                  = activeStack.concat([route]);
  const destIndex                  = nextStack.length - 1;
  const nextSceneConfig            = this.props.configureScene(route, nextStack);
  const nextAnimationConfigStack   = activeAnimationConfigStack.concat([nextSceneConfig]);

  const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
  this._emitWillFocus(nextStack[destIndex]);
  this.setState({
    routeStack: nextStack,
    sceneConfigStack: nextAnimationConfigStack,
  }, () => {
    this._enableScene(destIndex);
    this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
      this.immediatelyResetRouteStack(replacedStack);
    });
  });
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawer: null,
      drawerLock: 'locked-closed',
      navigator: null,
      navbar: null
    };

    this.setNavigator    = this.setNavigator.bind(this);
    this.getChildContext = this.getChildContext.bind(this);
    this.setDrawer       = this.setDrawer.bind(this);
    this.setLockDrawer   = this.setLockDrawer.bind(this);
    this.setNavigator    = this.setNavigator.bind(this);
    this.setNavbar       = this.setNavbar.bind(this);
  }

  getChildContext() {
    return {
      drawer: this.state.drawer,
      navigator: this.state.navigator,
      navbar: this.state.navbar
    }
  }

  setLockDrawer(drawerLock) {
    if (this.state.drawerLock != drawerLock) {
      this.setState({
        drawerLock
      });
    }
  }

  setDrawer(drawer) {
    if (!this.state.drawer) {
      this.setState({
        drawer
      });
    }
  }

  setNavigator(navigator) {
    if (!this.state.navigator) {
      this.setState({
        navigator: new Navigate(navigator, this.state.drawer, this.setLockDrawer)
      });
    }
  }

  setNavbar(navbar) {
    if (!this.state.navbar) {
      this.setState({
        navbar
      });
    }
  }

  render() {
    const {drawer, navigator, navbar} = this.state;

    return (
      <Provider store={store}>
        <DrawerLayoutAndroid
          drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          onDrawerClose={Navigate.onDrawerClosed}
          onDrawerOpen={Navigate.onDrawerOpened}
          drawerLockMode={this.state.drawerLock}
          keyboardDismissMode="on-drag"
          renderNavigationView={() => (drawer && navigator) ? <ControlPanel /> : null}
          ref={(drawer) => { this.setDrawer(drawer) }}
        >
          {
            (drawer) ?
              <Navigator
                initialRoute={Navigate.getInitialRoute()}
                navigationBar={(navigator) ? <AppNavBar ref={(navbar)=> {this.setNavbar(navbar)}} /> : null}
                configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                renderScene={(route) => {
                  if(navigator && navbar) {
                    InteractionManager.runAfterInteractions(() => {
                      if (route.drawerUnlock) {
                        this.setLockDrawer('unlocked');
                      } else {
                        this.setLockDrawer('locked-closed');
                      }
                    });

                    if (route.hideNavBar) {
                      return <route.component {...route}/>;
                    }
                    
                    let mt = (route.subToolbar) ? 112 : 56;

                    return (
                      <View style={{flex: 1, marginTop: mt}}>
                         <route.component {...route}/>
                      </View>
                    );
                  }
                }}
                ref={(navigator)=> {this.setNavigator(navigator)}}
              />
              : null
          }
        </DrawerLayoutAndroid>
      </Provider>
    );
  }
}

App.childContextTypes = {
  drawer: React.PropTypes.object,
  navigator: React.PropTypes.object,
  navbar: React.PropTypes.object
};

export default App;