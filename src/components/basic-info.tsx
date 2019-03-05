import * as React from 'react';

import { Switch, Slider, InputNumber, Row, Col, Modal, Button, Select, List, Card, message } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import axios from 'axios';

import { SavingRecordTable, ISavingRecord } from './info-table';


class BasicInfo extends React.Component {
    public state = {
        inputValue: 1,
        modelVisible: false,
        switchVisible: false,
        bank: 'ICBC',
    };

    private amountData = [
        {
            title: '账号',
            name: 'account',
            value: ''
        },
        {
            title: '余额',
            name: 'amount',
            value: 0
        },
        {
            title: '当前利率',
            name: 'interest',
            value: 0
        }
    ];

    private dataSource: ISavingRecord[] = [];
    private columns: Array<ColumnProps<ISavingRecord>> = [{
        key: 'name',
        title: '储户姓名',
        dataIndex: 'name',
    },
    {
        key: 'account',
        title: '账号',
        dataIndex: 'account',
    },
    {
        key: 'bank',
        title: '开户行',
        dataIndex: 'bank',
    },
    {
        key: 'amount',
        title: '金额',
        dataIndex: 'amount',
    },
    {
        key: 'save_time',
        title: '存入时间',
        dataIndex: 'save_time',
    },
    {
        key: 'money_type',
        title: '币种',
        dataIndex: 'money_type',
    },
    ];


    public componentDidMount() {
        axios.get(`/balance/440583199606252333`).then((res: any) => {
            if (null === res.data) {
                return;
            }
            this.amountData.map((item: any) => {
                item.value = res.data[item.name];
            });
        });
        axios.get('/saving-record/440583199606252333').then((res: any) => {
            if (null === res.data) {
                return;
            }
            res.data.map((item: any, index: number) => {
                this.dataSource.push(item);
                this.dataSource[index].key = index;
            });
            console.log(this.dataSource);
            this.setState({});
        });
    }


    public showModal = () => {
        this.setState({
            modelVisible: true,
        });
    }
    public handleOk = () => {
        this.setState({
            modelVisible: false,
        });
        const savingRecord = {
            key: this.dataSource.length,
            name: '小李',
            account: '440583199606252333',
            bank: this.state.bank,
            amount: this.state.inputValue,
            save_time: '2019/01/05',
            money_type: '人民币'
        };
        axios.post('/saving-record/440583199606252333', savingRecord).then((res) => {
            if (res.data) {
                this.dataSource.push(savingRecord);
                this.amountData[1].value = Number(this.amountData[1].value) + this.state.inputValue;
                message.success('存款成功');
                this.setState({});      
            } else {
                message.success('存款失败');
            }
                  
        });
    }

    public handleCancel = () => {
        this.setState({
            modelVisible: false,
        });
    }
    public onSwitchChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
        this.setState({
            switchVisible: checked
        });
    }
    public onSliderChange = (value: number) => {
        this.setState({
            inputValue: value,
        });
    }

    public onBankChange = (value: string) => {
        this.setState({
            bank: value
        });
    }


    public render() {
        const { inputValue } = this.state;
        return (
            <div className="BasicSaving">
                <p className="contentTitle">存入金额</p>
                <Row>
                    <Col span={8}>
                        <Slider
                            min={1}
                            max={200000}
                            onChange={this.onSliderChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={1}
                            max={200000}
                            style={{ marginLeft: 16 }}
                            value={inputValue}
                            onChange={this.onSliderChange}
                        />
                    </Col>
                </Row>
                <div style={{ marginTop: '20px', marginBottom: '10px' }}>
                    <Select defaultValue="ICBC" onChange={this.onBankChange} style={{ width: 170 }}>
                        <Select.Option value="ICBC">中国工商银行</Select.Option>
                        <Select.Option value="CCB">中国建设银行</Select.Option>
                        <Select.Option value="BC">中国银行</Select.Option>
                        <Select.Option value="ABC">中国农业银行</Select.Option>
                        <Select.Option value="CMB">招商银行</Select.Option>
                    </Select>
                </div>
                <Button style={{ marginTop: '20px' }} type="primary" onClick={this.showModal}>
                    存款
                </Button>
                <Modal
                    title="存款"
                    visible={this.state.modelVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>确认存入金额为{inputValue}元</p>
                </Modal>
                <p className="contentTitle">存款记录</p>
                <SavingRecordTable
                    rowKey="key"
                    dataSource={this.dataSource}
                    columns={this.columns}
                />
                <div style={{ marginBottom: '15px' }} >
                    <span className="contentTitle">账户存款信息</span>
                    <Switch onChange={this.onSwitchChange} style={{ marginLeft: '20px', bottom: '2px' }} />
                </div>
                {
                    this.state.switchVisible &&
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={this.amountData}
                        renderItem={this.renderCard}
                    />
                }
            </div>
        );
    }
    private renderCard = (item: any) => {
        return (<List.Item>
            <Card title={item.title}>{item.value}</Card>
        </List.Item>);
    }
}

export default BasicInfo;
