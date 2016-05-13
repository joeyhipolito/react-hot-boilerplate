import React from 'react';
import { connect } from 'react-redux'

console.log('SyncNonExportedComponent evaluated')

const SyncNonExportedComponent = React.createClass({
  getInitialState() {
    return { counter: 0 }
  },

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  },

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  render() {
    return (
      <h1>SyncNonExportedComponent ({this.state.counter})</h1>
    );
  }
})

const SyncExportedComponent = React.createClass({
  render() {
    return (
      <div>
        <p>exported</p>
        <SyncNonExportedComponent />
      </div>
    );
  }
})

export default connect(() => ({}))(SyncExportedComponent)
