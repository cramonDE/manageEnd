import { Table } from 'antd';

export interface ISavingRecord {
    key: number;
    name: string;
    account: string;
    bank: string;
    amount: number;
    save_time: string;
    // saveType: boolean;
    money_type: string;
}

export interface IWithDrawRecord {
    key: number;
    name: string;
    account: string;
    amount: number;
    withdraw_time: string;
    // saveType: boolean;
    money_type: string;
}

export interface IAmountInfo {
    key: number;
    principal: number;
    interest: number;
    type: string;
    overdraftAmount: number;
    overdraftInterest: number;
}
export class WithDrawRecordTable extends Table<IWithDrawRecord> {}
export class SavingRecordTable extends Table<ISavingRecord> {}
export class AmountInfoTable extends Table<IAmountInfo> {}

