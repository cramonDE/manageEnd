import * as React from 'react';

import {
    Form,  Button, Input
} from 'antd';


class User extends React.Component {
    public state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    public handleSubmit = (e:any) => {
        e.preventDefault();
        
    }

    public handleConfirmBlur = (e:any) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    public compareToFirstPassword = (rule:any, value:any, callback:any) => {
        // const form = this.props.form;
        // if (value && value !== form.getFieldValue('password')) {
        //     callback('Two passwords that you enter is inconsistent!');
        // } else {
        //     callback();
        // }
    }

    public validateToNextPassword = () => {
        // const form = this.props.form;
        // if (value && this.state.confirmDirty) {
        //     form.validateFields(['confirm'], { force: true });
        // }
        // callback();
    }

    public handleWebsiteChange = () => {
        // let autoCompleteResult;
        // if (!value) {
        //     autoCompleteResult = [];
        // } else {
        //     autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        // }
        // this.setState({ autoCompleteResult });
    }

    public render() {

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item
                    {...formItemLayout}
                    label="姓名"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="身份证号"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="城市"
                >
                   <Input /> 
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="住址"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="联系电话"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="手机"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="邮件"
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="职业"
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="收入"
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="家庭联系人"
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="联系人电话"
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="信用级别"
                    >
                    <Input />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">保存</Button>
                </Form.Item>
            </Form>
        );
    }
}
export default User;
