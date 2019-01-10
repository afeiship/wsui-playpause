# react-switch-case
> Switch statement in React components

## thanks to:
- https://github.com/AlexSergey/react-switch-case

## properties:
```javascript

  static propTypes = {};
  static defaultProps = {};
  
```

## install && import:
```bash
npm install --save afeiship/react-switch-case --registry=https://registry.npm.taobao.org
```

```js
import ReactSwitchCase from 'react-switch-case';
```

```scss
// customize your styles:
$react-switch-case-options:(
);

@import 'node_modules/react-switch-case/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-switch-case --save
// import : import ReactSwitchCase from 'react-switch-case'

class App extends React.Component {
  state = {
    condition: 'component2'
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onClick1 = (e) => {
    const arr = ['component1', 'component2', 'component3', 'other'];
    const index = parseInt(Math.random() * 4);
    // console.log('index:->', index);
    this.setState({
      condition: arr[index]
    });
  };

  render() {
    return (
      <div className="hello-react-switch-case">
        <button className="button" onClick={this._onClick1}>
          Random
        </button>
        <ReactSwitchCase condition={this.state.condition}>
          <Case value="component1">
            <h1>H1 Component</h1>
          </Case>
          <Case value="component2">
            <h2>H2 Component</h2>
          </Case>
          <Default>
            Nothing!
            <strong>default state</strong>
          </Default>
        </ReactSwitchCase>
      </div>
    );
  }
}

```
