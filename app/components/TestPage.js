import React, {Component} from 'react';
import {
  Container,
  Content,
  Icon
} from 'native-base';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class TestPage extends Component {
  componentWillMount() {
    const {navbar} = this.context;

    navbar.setActions([{
      icon: 'warning',
      onPress() {
        alert('test 2')
      }
    }]);
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>Text</Text>
        </Content>
      </Container>
    );
  }
}

TestPage.propTypes = {}

TestPage.contextTypes = {
  navbar: React.PropTypes.object.isRequired
};

const styles = StyleSheet.create({
});

export default TestPage;