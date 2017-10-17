import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
  View
} from 'react-native';

// class Button extends Component {
//   constructor(props) {
//     super(props);
//
//     this.slideShadowTo   = this.slideShadowTo.bind(this);
//     this.liftUp          = this.liftUp.bind(this);
//     this.liftDown        = this.liftDown.bind(this);
//     this.rippleAnimation = this.rippleAnimation.bind(this);
//     this.startRipple     = this.startRipple.bind(this);
//     this.hideRipple      = this.hideRipple.bind(this);
//     this.onLayout        = this.onLayout.bind(this);
//     this.renderRipple    = this.renderRipple.bind(this);
//
//     this.state = {
//       radius: new Animated.Value(0),
//       opacity: new Animated.Value(1),
//       shadowRadius: new Animated.Value(this.props.shadowLevel),
//       shadowOpacity: new Animated.Value(this.props.shadowOpacity),
//       shadowOffset: {height: this.props.shadowLevel, width: 0},
//       width: 0,
//       height: 0,
//       fromTop: 0,
//       fromLeft: 0,
//     };
//   }
//
//   componentWillMount() {
//     this.panResponder = PanResponder.create({
//       onStartShouldSetPanResponder: (evt, gestureState) => true,
//       onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
//       onMoveShouldSetPanResponder: (evt, gestureState) => true,
//       onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
//       onPanResponderMove: (evt, gestureState) => true,
//       onPanResponderTerminationRequest: (evt, gestureState) => true,
//       onShouldBlockNativeResponder: (evt, gestureState) => true,
//       onPanResponderRelease: (evt, gestureState) => {
//         this.liftDown();
//         this.isTouching = false;
//         this.hideRipple();
//
//         this.props.onPressOut();
//       },
//       onPanResponderTerminate: (evt, gestureState) => {
//         this.liftDown();
//         this.isTouching = false;
//         this.hideRipple();
//       },
//       onPanResponderGrant: (evt, gestureState) => {
//         var x           = evt.nativeEvent.locationX;
//         var y           = evt.nativeEvent.locationY;
//         this.isTouching = true;
//         this.shouldHide = false;
//         this.startRipple();
//         this.rippleAnimation(x, y);
//         this.liftUp();
//
//         this.props.onClick();
//         this.props.onPressIn();
//       },
//     });
//   }
//
//   liftUp() {
//     Animated.parallel([
//       Animated.timing(this.state.shadowRadius, {
//         toValue: this.props.topShadowLevel,
//         duration: this.animationTime,
//       }),
//       Animated.timing(this.state.shadowOpacity, {
//         toValue: this.props.pressedShadowOpacity,
//         duration: this.animationTime,
//       })
//     ]).start();
//
//     this.slideShadowTo(this.props.pressedShadowLevel);
//   }
//
//   liftDown() {
//     Animated.parallel([
//       Animated.timing(this.state.shadowRadius, {
//         toValue: 1,
//         duration: this.animationTime,
//       }),
//       Animated.timing(this.state.shadowOpacity, {
//         toValue: this.props.shadowOpacity,
//         duration: this.animationTime,
//       })
//     ]).start();
//
//     this.slideShadowTo(this.props.shadowLevel);
//   }
//
//   slideShadowTo(h) {
//     clearInterval(this.liftInterval);
//     var step          = h == this.currentLevel ? 0 : (h > this.currentLevel ? 1 : -1);
//     this.liftInterval = setInterval(() => {
//       this.currentLevel += step;
//       this.setState({shadowOffset: {height: this.currentLevel, width: 0}});
//       if ((step > 0 && this.currentLevel >= h) || (step < 0 && this.currentLevel <= h)) clearInterval(this.liftInterval);
//     }, 100);
//   }
//
//   rippleAnimation(x, y) {
//     this.setState({
//       fromTop: y,
//       fromLeft: x
//     });
//     Animated.sequence([
//       Animated.timing(this.state.radius, {
//         toValue: this.state.maxScale,
//         duration: this.animationTime,
//       }),
//     ]).start();
//   }
//
//   startRipple() {
//     this.rippleInterval = setInterval(() => {
//       this.shouldHide = true;
//       clearInterval(this.rippleInterval);
//       this.hideRipple();
//     }, this.props.animationTime);
//   }
//
//   hideRipple() {
//     if (this.shouldHide && !this.isTouching) {
//       Animated.sequence([
//         Animated.timing(this.state.opacity, {
//           toValue: 0,
//           duration: 100,
//         }),
//         Animated.parallel([
//           Animated.timing(this.state.radius, {
//             toValue: 0,
//             duration: 0,
//           }),
//           Animated.timing(this.state.opacity, {
//             toValue: 1,
//             duration: 0,
//           }),
//         ])
//       ]).start();
//     }
//   }
//
//   onLayout(e) {
//     var {x, y, width, height} = e.nativeEvent.layout;
//     this.setState({
//       top: y,
//       left: x,
//       width: width,
//       height: height,
//       maxScale: width + height,  // TODO: optimize value
//     });
//   }
//
//   renderRipple() {
//     if (!this.props.withRipple) return null;
//
//     return (
//       <View
//         style={[styles.rippleContainer, {height: this.state.height, width: this.state.width}]}>
//         <Animated.View style={[
//             styles.rippleOverlay,
//             {
//               backgroundColor: this.props.rippleColor,
//               top: this.state.fromTop,
//               left: this.state.fromLeft,
//               opacity: this.state.opacity,
//               transform: [{scale: this.state.radius}]
//             }
//         ]}/>
//       </View>
//     );
//   }
//
//   render() {
//     return (
//       <Animated.View
//         onLayout={this.onLayout}
//         pointerEvents='box-only'
//         style={[styles.buttonBasic, this.props.style]}
//         {...this.panResponder.panHandlers}
//       >
//         {/*this.props.children*/}
//         <Text>Text</Text>
//         {this.renderRipple()}
//       </Animated.View>
//     );
//   }
// }

function Button(props) {
  const disableUpperCase = props.disableUpperCase || false;
  const text             = (disableUpperCase) ? props.text : props.text.toUpperCase();

  let selectedStyle = (!props.btnStyle) ? 'primary' : props.btnStyle;
  let btnStyle      = {};
  let btnTextStyle  = {};

  switch (selectedStyle) {
    case 'primary':
      btnStyle     = styles.primaryBtn;
      btnTextStyle = styles.primaryBtnText;
      break;
    case 'outline':
      btnStyle     = styles.outlineBtn;
      btnTextStyle = styles.outlineBtnText;
      break;
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}
                      style={props.style}>
      <View style={btnStyle}>
        <Text style={btnTextStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  withRipple: true,
  withShadow: false,
  shadowLevel: 1,
  pressedShadowLevel: 5,
  shadowColor: '#000',
  shadowOpacity: 0.4,
  pressedShadowOpacity: 0.6,
  animationTime: 600,

  onClick: function() {
  },
  onPressIn: function() {
  },
  onPressOut: function() {
  },

  rippleColor: 'rgba(0,0,0,0.1)',
  style: {},
};

Button.propTypes = {
  btnStyle: React.PropTypes.oneOf(['primary', 'outline']),
  disableUpperCase: React.PropTypes.bool,
  onPress: React.PropTypes.func,
  text: React.PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  primaryBtn: {
    backgroundColor: '#3F51B5',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  primaryBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  },
  outlineBtn: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlineBtnText: {
    fontSize: 16,
    color: '#353535'
  },
  rippleContainer: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  rippleOverlay: {
    height: 2,
    width: 2,
    borderRadius: 1,
    position: 'absolute',
  },
  buttonBasic: {
    padding: 5,
    borderRadius: 2,
    backgroundColor: '#FFF',
    overflow: 'visible',
  }
});

export default Button;