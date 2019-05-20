import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import { Ripple, Icon } from '../../../';
import withTheme from '../../../Theme/withTheme';
import styles from './Tab.styles';

class Tab extends Component {
  static propTypes = {
    label: PropTypes.string,
    active: PropTypes.bool,
    activeTextColor: PropTypes.string,
    inActiveTextColor: PropTypes.string,
    textStyle: PropTypes.object,
    onPress: PropTypes.func,
    tabWidth: PropTypes.number,
    style: PropTypes.object,
    icon: PropTypes.string,
  };

  static defaultProps = {
    inActiveTextColor: 'rgba(255, 255, 255, 0.7)',
    activeTextColor: '#fff',
  };

  _renderIcon(color) {
    const { icon } = this.props;
    return <Icon name={icon} size={24} color={color} />;
  }

  _renderText(color) {
    const { label, textStyle } = this.props;
    return (
      <Text
        style={[
          styles.text,
          {
            color: color,
          },
          textStyle,
        ]}>
        {label ? label.toUpperCase() : null}
      </Text>
    );
  }

  _renderTab() {
    const {
      label,
      active,
      activeTextColor,
      inActiveTextColor,
      icon,
    } = this.props;

    const color = active ? activeTextColor : inActiveTextColor;

    return (
      <View style={styles.container}>
        {icon ? this._renderIcon(color) : null}
        {label ? this._renderText(color) : null}
      </View>
    );
  }

  render() {
    const { onPress, tabWidth, style } = this.props;

    return (
      <Ripple onPress={onPress} style={[{ width: tabWidth }, style]}>
        {this._renderTab()}
      </Ripple>
    );
  }
}

export default withTheme(Tab);
