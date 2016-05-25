import React from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal'
import ModalContent from './ModalContent'

console.log('SyncModalComponent evaluated')

let SyncModalComponent = React.createClass({
  getInitialState() {
    return {
      counter: 0,
      isModalOpen: false,
    }
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

  openModal () {
    this.setState({ isModalOpen: true })
  },

  closeModal () {
    this.setState({ isModalOpen: false })
  },

  render() {
    return (
      <div>
        <h1>SyncModalComponent ({this.state.counter})</h1>
        <button onClick={this.openModal}>open</button>
        <Modal isOpen={this.state.isModalOpen}>
          <h1>Modal Content ({this.state.counter})</h1>
          <p>Etc.</p>
          <ModalContent />
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
})

export default connect(() => ({}))(SyncModalComponent)
