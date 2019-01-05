import * as React from 'react';
// import { Tabs } from 'antd';

import BasicInfo from 'src/components/basic-info';
// import CurrentSaving from 'src/components/current-saving';
// import RegularSaving from 'src/components/regular-saving';

// const TabPane = Tabs.TabPane;



class Savings extends React.Component {
    public callback(key: any) {
        console.log(key);
    }
    public render() {
        return (
            <div className="Savings">
                {/* <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="基本信息" key="1">
                        <BasicInfo/>
                    </TabPane>
                    <TabPane tab="定期存款" key="2">
                        <RegularSaving/>
                    </TabPane>
                    <TabPane tab="活期存款" key="3">
                        <CurrentSaving/>
                    </TabPane>
                </Tabs> */}
                <BasicInfo/>
            </div>
        );
    }
}

export default Savings;
