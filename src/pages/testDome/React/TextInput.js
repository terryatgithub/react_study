// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from "react";

class Input extends React.PureComponent {
  render() {
    let { forwardedRef, ...otherProps } = this.props;
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});

class FocusableInput extends React.Component {
  ref = React.createRef();

  render() {
    return <TextInput ref={this.ref} />;
  }

  // When the focused prop is changed from false to true,
  // and the input is not focused, it should receive focus.
  // If focused prop is true, the input should receive the focus.
  // Implement your solution below:
  componentDidUpdate(prevProps) {
    const { focused } = this.props;
    if (!prevProps.focused && focused && !this.ref.current.focused) {
      this.ref.current.focus();
    }
  }

  componentDidMount() {
    const { focused } = this.props;
    if (focused) {
      this.ref.current.focus();
    }
  }
}

FocusableInput.defaultProps = {
  focused: false,
};

const App = (props) => <FocusableInput focused={props.focused} />;

// document.body.innerHTML = "<div id='root'></div>";
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default class TextInputApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   focused: false,
      focused: true,
    };
  }
  onTap = () => {
    this.setState({
      focused: !this.state.focused,
    });
  };
  render() {
    const { focused } = this.state;
    return (
      <div>
        <App focused={focused} />
        <br />
        <App focused={!focused} />
        <br />
        <button onClick={this.onTap}>toggle focus</button>
      </div>
    );
  }
}
