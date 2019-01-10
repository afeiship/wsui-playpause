import React, { Component } from 'react';

export default class extends Component {
  static displayName = 'default';
  render() {
    return this.props.children;
  }
}
