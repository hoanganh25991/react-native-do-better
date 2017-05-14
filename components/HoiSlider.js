import React from 'react'

import {View, Text, Slider} from 'react-native'

class HoiSlider extends React.Component {
  static defaultProps = {
    value: 0,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  render() {
    const textStyle = {
      color: this.state.value === 0 ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.9)',
      marginBottom: -2,
    };

    return (
      <View>
        <View style={{ padding: 10 }}>
          <Text style={textStyle}>
            Value: {this.state.value && +this.state.value.toFixed(3)}
          </Text>
        </View>

        <Slider
          {...this.props}
          onValueChange={value => this.setState({ value: value })}
        />

        <View style={{ marginBottom: 10 }} />
      </View>
    );
  }
}

export default HoiSlider