import React, { Component, Children } from 'react';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {};
  static defaultProps = {};
  /*===properties end===*/

  get children() {
    const cases = [],
      defaults = [];

    Children.forEach(this.props.children, (item) => {
      const { displayName } = item.type;
      switch (displayName) {
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
