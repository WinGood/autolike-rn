'use strict';

import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const PADDING = 12;
const BORDER_RADIUS = 0;
const FONT_SIZE = 16;
const HIGHLIGHT_COLOR = '#353535';
const OPTION_CONTAINER_HEIGHT = 400;

export default StyleSheet.create({

  overlayStyle: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },

  optionContainer: {
    borderRadius:BORDER_RADIUS,
    width:width*0.8,
    height:OPTION_CONTAINER_HEIGHT,
    backgroundColor:'#FFF',
    left:width*0.1,
    top:(height-OPTION_CONTAINER_HEIGHT)/2
  },

  cancelContainer: {
    left:width*0.1,
    top:(height-OPTION_CONTAINER_HEIGHT)/2 + 10
  },

  selectStyle: {
    flex: 1,
    borderColor: '#353535',
    borderWidth: 1,
    padding: 8,
    borderRadius: BORDER_RADIUS
  },

  selectTextStyle: {
    textAlign: 'left',
    color: '#353535',
    fontSize: FONT_SIZE
  },

  cancelStyle: {
    borderRadius: BORDER_RADIUS,
    width: width * 0.8,
    backgroundColor: '#FFF',
    padding: PADDING
  },

  cancelTextStyle: {
    textAlign: 'center',
    color: '#353535',
    fontSize: FONT_SIZE
  },

  optionStyle: {
    padding: PADDING,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb'
  },

  optionTextStyle: {
    textAlign: 'left',
    fontSize: FONT_SIZE,
    color: HIGHLIGHT_COLOR
  },

  sectionStyle: {
    padding: PADDING * 2,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb'
  },

  sectionTextStyle: {
    textAlign: 'left',
    fontSize: FONT_SIZE
  }
});