import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  handleReset = () => this.setState({ hasError: false });

  render() {
    return this.state.hasError ? (
      <div className="error-fallback">
        <h2>Something went wrong</h2>
        <button onClick={this.handleReset}>Try Again</button>
      </div>
    ) : this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;