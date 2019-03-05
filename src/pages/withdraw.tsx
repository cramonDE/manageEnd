import * as React from 'react';

import { message, Switch, Slider, InputNumber, Row, Col, Button, List, Card } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import axios from 'axios';

import { WithDrawRecordTable, IWithDrawRecord } from 'src/components/info-table';

class Withdraw extends React.Component {
    public state = {
        inputValue: 1,
        modelVisible: false,
        switchVisible: false,
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

    private dataSource: IWithDrawRecord[] = [];
    private columns: Array<ColumnProps<IWithDrawRecord>> = [{
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
        key: 'amount',
        title: '金额',
        dataIndex: 'amount',
    },
    {
        key: 'withdraw_time',
        title: '取出时间',
        dataIndex: 'withdraw_time',
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
        axios.get('/withdraw-record/440583199606252333').then((res: any) => {
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

    public onWithdraw = () => {
        if (Number(this.amountData[1].value) > this.state.inputValue) {
            const withdrawRecord = {
                key: this.dataSource.length,
                name: '小李',
                account: '440583199606252333',
                amount: this.state.inputValue,
                withdraw_time: '2019/01/05',
                money_type: '人民币'
            };
            axios.post('/withdraw-record/440583199606252333', withdrawRecord).then((res) => {
                if (res.data) {
                    this.dataSource.push(withdrawRecord);
                    this.amountData[1].value = Number(this.amountData[1].value) - this.state.inputValue;
                    message.success(`取出金额 ${this.state.inputValue} 元`);
                    this.setState({});      
                } else {
                    message.success('操作失败');
                }
            });
        } else {
            message.error('操作失败');
            
        }

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
                <WithDrawRecordTable
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

export default Withdraw;
