import React, { Component, Children } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {};
  static defaultProps = {};
  /*===properties end===*/

  get children() {
    const cases = [],
      defaults = [];

    Children.forEach(this.props.children, (item) => {
      console.log(item.type.componentName);
      switch (item.type.componentName) {
        case 'case':
          if (this.props.condition === item.props.value) {
            cases.push(item);
          }
          break;
        case 'default':
          defaults.push(item);
          break;
      }
    });

    if (cases.length > 0) {
      return cases;
    }
    return defaults;
  }

  render() {
    const children = this.children;
    return children.length === 0 ? null : children;
  }
}
