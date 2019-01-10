import React, { Component } from 'react';

export default class extends Component {
  static componentName = 'default';
  render() {
    return this.props.children;
  }
}
