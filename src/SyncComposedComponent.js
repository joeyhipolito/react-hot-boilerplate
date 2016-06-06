// https://twitter.com/dan_abramov/status/739570402834448384/

import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'


console.log('SyncComposedComponent evaluated')

const SyncComposedComponent = React.createClass({
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
      <h1>SyncComposedComponent ({this.state.counter})</h1>
    );
  }
})

const mapStateToProps = () => ({})

const enhance = compose(
  connect(mapStateToProps)
)

export default enhance(SyncComposedComponent)
