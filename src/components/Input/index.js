import React from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import { Field } from "redux-form";

class InputField extends React.Component {

  onChange = (event) => {
    const { input: { onChange }, handleChange } = this.props;
    const { target: { value } } = event;
    onChange(value);
    if (handleChange) {
      handleChange(value);
    }
  }

  render() {
    const {
      label,
      required,
      displayValue,
      value,
      placeholder,
      type,
      className,
      disabled
    } = this.props;
    return (
      <React.Fragment>
        <Form.Item
          label={label}
          required={required}
        >
          <Input
            value={displayValue || value}
            placeholder={placeholder}
            type={type}
            className={className}
            autoComplete="off"
            onChange={this.onChange}
            disabled={disabled}
          />
        </Form.Item>
      </React.Fragment>
    );
  }
}

InputField.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.any,
  handleChange: PropTypes.func,
  meta: PropTypes.any,
  disabled: PropTypes.bool,
  onPressEnter: PropTypes.func,
  hide: PropTypes.bool,
  tip: PropTypes.string,
  formItemLayout: PropTypes.any,
  displayValue: PropTypes.string,
};

InputField.defaultProps = {
  required: false,
  hide: false,
};

class InputRedux extends React.Component {

  render() {
    const { ...props } = this.props;
    return (
      <Field
        component={InputField}
        {...props}
      />
    );
  }
}
export default InputRedux;