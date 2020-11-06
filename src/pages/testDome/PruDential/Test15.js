import React from "react";

class App extends React.Component {
  state = {
    subject: "",
    body: "",
  };

  onChange = ({ name, value }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form>
        {/*Write your code here*/}
        <FormField onChange={this.onChange}>
          <input name="subject" />
        </FormField>

        <FormField onChange={this.onChange}>
          <input name="body" />
        </FormField>
      </form>
    );
  }
}

export default App;

class FormField extends React.Component {
  render() {}
}
