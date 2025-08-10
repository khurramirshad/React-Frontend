import DepositEntry from './DepositEntry';

export default function DepositEntryList({ data }) {
    return (
        <div>
            <h4>Deposit Transactions List</h4>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Transaction Id</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>Date</th>
                    <th>Account Id</th>
                    <th>Account Holder</th>
                    <th>Source</th>
                    <th>Reference Number</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Created By</th>
                </tr>
                </thead>
                <tbody>
                {data.map(deposit => (
                    <DepositEntry key={deposit.transactionId} {...deposit} />
                ))}
                </tbody>
            </table>
        </div>
    );
}
