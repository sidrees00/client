import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

export default class Rating extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let icons = [];

    for (let i = 0; i < 5; i++) {
      if (i < this.props.stars) {
        icons.push('star');
      } else {
        icons.push('star-o');
      }
    }

    return (
      <View style={styles.rating}>
        {icons.map((name, index) => <FontAwesome key={index} name={name} size={16}/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
  },
})