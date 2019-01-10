import React, { Component } from 'react';

export default class extends Component {
  static componentName = 'case';
  render() {
    return this.props.children;
  }
}
