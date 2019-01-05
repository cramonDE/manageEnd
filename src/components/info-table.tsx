import { Table } from 'antd';

export interface ISavingRecord {
    key: number;
    name: string;
    account: string;
    bank: string;
    amount: number;
    saveTime: string;
    saveType: boolean;
    moneyType: boolean;
}

export interface IAmountInfo {
    key: number;
    principal: number;
    interest: number;
    type: string;
    overdraftAmount: number;
    overdraftInterest: number;
}

export class SavingRecordTable extends Table<ISavingRecord> {}
export class AmountInfoTable extends Table<IAmountInfo> {}

