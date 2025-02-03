import React, { Component } from "react";

class ClassTitleUpdater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "",
    };
  }

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
    console.log(`Cleanup: Count was ${this.state.count}`);
  }

  increaseCount = () => {
    this.setState((prevState) => ({}));
  };

  render() {
    return (
        <div>
          <h1>Current Count: {this.state.count}</h1>
          <button onClick={this.increaseCount}>Increase Count</button>
        </div>
    );
  }
}

export default ClassTitleUpdater;
