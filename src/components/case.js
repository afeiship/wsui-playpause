import React, { Component } from 'react';

export default class extends Component {
  static displayName = 'case';
  render() {
    return this.props.children;
  }
}
