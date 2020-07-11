import AppInput from '@/components/presentational/Form/AppInput';
import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import styled from 'styled-components';

export default class AppInputWithLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      isError: this.props.isError
    };
  }

  handleChange({ value }) {
    this.setState({ value });
    this.checkValue(value);
    this.props.onChange({
      target: this,
      name,
      value,
      isError: this.state.isError,
    });
  }

  checkValue(value) {
    this.setState({
      isError: value ? false : true,
    });
  }

  renderErrorText() {
    if (!this.state.isError) return;

    return (
      <ErrorText>{this.props.errorText}</ErrorText>
    )
  }

  render() {
    return (
      <div className={this.props.className}>
        <Label htmlFor={this.props.name}>
          {this.props.label}
        </Label>
        <AppInput
          name={this.props.name}
          type='text'
          value={this.state.value}
          placeholder={this.props.placeholder}
          isError={this.state.isError}
          onChange={e => this.handleChange(e)}
        />
        {this.renderErrorText()}
      </div>
    );
  }
};

AppInputWithLabel.propTypes = {
  label: PropsTypes.string.isRequired, 
  name: PropsTypes.string.isRequired,
  value: PropsTypes.string,
  isError: PropsTypes.bool.isRequired,
  errorText: PropsTypes.string,
  onChange: PropsTypes.func.isRequired,
};

AppInputWithLabel.defaultProps = {
  label: '',
  value: '',
  isError: false,
  errorText: '',
};

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`

const ErrorText = styled.p`
  margin-top: 4px;
  color: #df0200;
  font-size: 12px;
`