/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import TWText from '../TWText/TWText';
import colors from '../../../styles/colors';

type Props = {
  color?: String,
  fontColor?: String,
  label: String
};
type State = {};

class TWTag extends Component<Props, State> {
  static defaultProps = {
    color: colors.gray4,
    fontColor: colors.gray4,
  };

  render() {
    const { color, label, fontColor } = this.props;
    return (
      <View style={{
        backgroundColor: color,
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        borderBottomEndRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 10,
      }}
      >
        <TWText weight="bold" text={label} size="title" color={fontColor} italic />
      </View>
    );
  }
}

export default TWTag;
