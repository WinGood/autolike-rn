import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  View
} from 'react-native';

function LoadingIndicator(props) {
  const color = props.spinnerColor || '#838588';

  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} />
    </View>
  );
}

LoadingIndicator.propTypes = {
  spinnerColor: React.PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoadingIndicator;