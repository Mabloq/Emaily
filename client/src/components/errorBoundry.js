import React, {Component} from 'react';

class ErrorBoundary extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      hasError: false,
      error: '',
      info: '',
    };
  }

  componentDidCatch (error, info) {
    // Display fallback UI
    this.setState ({hasError: true, error: error, info: info});
    // You can also log the error to an error reporting service
    console.log (error, info);
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error}</p>
          <p>{this.state.info}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
