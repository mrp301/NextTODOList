import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import styled from 'styled-components';

export default class AppInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value, isError: this.props.isError };
  }

  handleChange({ target: { name, value }}) {
    this.setState({ value });
    this.props.onChange({
      target: this,
      name,
      value,
    });
  }

  componentWillReactiveProps({ value }) {
    this.setState({ value });
  }

  render() {
    return (
      <Input
        key={this.props.name}
        id={this.props.name}
        name={this.props.name}
        type='text'
        value={this.state.value}
        placeholder={this.props.placeholder}
        onChange={e => this.handleChange(e)}
      />
    );
  }
};

AppInput.propTypes = {
  name: PropsTypes.string.isRequired,
  value: PropsTypes.string,
  isError: PropsTypes.bool.isRequired,
  onChange: PropsTypes.func.isRequired,
};

AppInput.defaultProps = {
  value: '',
  isError: false,
};

const Input = styled.input`
padding: 10px;
width: 100%;
border: ${({ isError }) => isError ? 'solid 2px #df0200' : ''};
`