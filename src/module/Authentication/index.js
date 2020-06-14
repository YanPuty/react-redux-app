import React from "react";
import { Form, Button } from "antd";
import { reduxForm } from "redux-form";


// Component
import Input from "../../components/Input";

class Authentication extends React.Component {

    render() {
        return (
            <Form>
                <h5 style={{ textAlign: "center" }}>Login</h5>
                <Input
                    label="Username"
                    name="username"
                    placeholder="Username"
                    required
                />
                <Input
                    label="Password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <Button
                    block
                    ghost
                    type="primary"
                    htmlType="submit"
                >Submit</Button>
            </Form>
        );
    }
}

export default reduxForm()(Authentication);