import React from 'react';
import { connect } from 'react-redux'

console.log('SyncReferenceModifiedComponent evaluated')

let SyncReferenceModifiedComponent = React.createClass({
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
      <h1>SyncReferenceModifiedComponent ({this.state.counter})</h1>
    );
  }
})

SyncReferenceModifiedComponent = connect(() => ({}))(SyncReferenceModifiedComponent)

export default SyncReferenceModifiedComponent
