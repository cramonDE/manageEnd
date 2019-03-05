import * as React from 'react';
import axios from 'axios';
import {
    Form, Button, Input, message
} from 'antd';

class User extends React.Component {
    private state = {
        userInfo: {
            account: '',
            name: '',
            city: '',
            address: '',
            phone_call: '',
            mobile: '',
            email: '',
            job: '',
            contact: '',
            contact_phone: '',
            income: 0,
            credit_rating: ''
        },
    };

    public componentDidMount() {
        axios({
            method: 'get',
            url: '/user/440583199606252333',
        }).then((res: any) => {
            if (null === res.data) {
                return;
            }
            this.setState({ userInfo: res.data });
            console.log(res.data);

        });
        // this.state.userInfoList.push(1);
    }

    public handleSubmit = (e: any) => {
        e.preventDefault();

    }

    public onInputChange = (e: any) => {
        const info = this.state.userInfo;
        const property = e.target.name;
        let value = e.target.value;
        if (property === 'income') {
            value = Number(value);
        }
        info[property] = value;
        this.setState({ userInfo: info });
    }

    public onSave = () => {
        axios.patch(`/user/${this.state.userInfo.account}`, this.state.userInfo).then(() => {
            message.success('修改成功');
        });
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
                    <Input value={this.state.userInfo.name} onChange={this.onInputChange} name={'name'} />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="身份证号"
                >
                    <Input value={this.state.userInfo.account} onChange={this.onInputChange} name={'account'} />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="城市"
                >
                    <Input value={this.state.userInfo.city} onChange={this.onInputChange} name={'city'} />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="住址"
                >
                    <Input value={this.state.userInfo.address} onChange={this.onInputChange} name={'address'} />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="联系电话"
                >
                    <Input value={this.state.userInfo.phone_call} onChange={this.onInputChange} name={'phoneCall'} />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="手机"
                >
                    <Input value={this.state.userInfo.mobile} onChange={this.onInputChange} name={'mobile'} />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="邮件"
                >
                    <Input value={this.state.userInfo.email} onChange={this.onInputChange} name={'email'} />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="职业"
                >
                    <Input value={this.state.userInfo.job} onChange={this.onInputChange} name={'job'} />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="收入"
                >
                    <Input value={this.state.userInfo.income} onChange={this.onInputChange} name={'income'} />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="家庭联系人"
                >
                    <Input value={this.state.userInfo.contact} onChange={this.onInputChange} name={'contact'} />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="联系人电话"
                >
                    <Input value={this.state.userInfo.contact_phone} onChange={this.onInputChange} name={'contactPhone'} />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="信用级别"
                >
                    <Input value={this.state.userInfo.credit_rating} onChange={this.onInputChange} name={'creditRating'} />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" onClick={this.onSave}>保存</Button>
                </Form.Item>
            </Form>
        );
    }
}
export default User;
