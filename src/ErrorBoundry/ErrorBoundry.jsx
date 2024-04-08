import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.dir('error', error)
    return { hasError: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>{this.props.fallBack}</h1>
          <pre></pre>
        </div>
      )
    }
    return this.props.children;
  }
}