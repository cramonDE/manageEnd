import * as React from 'react';

import {message, Switch, Slider, InputNumber, Row, Col, Button, List, Card } from 'antd';
import { ColumnProps } from 'antd/lib/table';

import { SavingRecordTable, ISavingRecord } from 'src/components/info-table';

class Withdraw extends React.Component {
    public state = {
        inputValue: 1,
        modelVisible: false,
        switchVisible: false,
        bank: 'ICBC'
    };

    private amountData = [
        {
            title: '账号'
        },
        {
            title: '余额'
        },
        {
            title: '当前利率'
        }
    ];

    private dataSource: ISavingRecord[] = [{
        key: 0,
        name: 'Jack',
        account: '123456789',
        bank: 'ICBC',
        amount: 50000,
        saveTime: '2019/01/04',
        saveType: true,
        moneyType: true
    }, {
        key: 1,
        name: 'Jack',
        account: '123456789',
        bank: 'ICBC',
        amount: 50000,
        saveTime: '2019/01/04',
        saveType: true,
        moneyType: true
    }, {
        key: 2,
        name: 'Jack',
        account: '123456789',
        bank: 'ICBC',
        amount: 50000,
        saveTime: '2019/01/04',
        saveType: true,
        moneyType: true
    }];
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
        key: 'saveTime',
        title: '存入时间',
        dataIndex: 'saveTime',
    },
    ];




    public onWithdraw = () => {

        message.success(`取出金额 ${this.state.inputValue} 元`);
          
    }
    public handleOk = () => {
        this.setState({
            modelVisible: false,
        });
        this.dataSource.push({
            key: this.dataSource.length,
            name: 'Jack',
            account: '123456789',
            bank: 'ICBC',
            amount: this.state.inputValue,
            saveTime: '2019/01/04',
            saveType: true,
            moneyType: true
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
                <p className="contentTitle">取出金额</p>
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
                <Button style={{ marginTop: '20px' }} type="primary" onClick={this.onWithdraw}>
                    取款
                </Button>
                <p className="contentTitle">取款记录</p>
                <SavingRecordTable
                    rowKey="key"
                    dataSource={this.dataSource}
                    columns={this.columns}
                />
                <div style={{marginBottom : '15px'}} >
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
                <Card title={item.title}>Card content</Card>
            </List.Item>);
    }
}

export default Withdraw;
