import AccountEntry from "./AccountEntity.jsx";

export default function AccountEntryList({data}) {
        return (
        <div>
            <h4>Account List</h4>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Account ID</th>
                    <th>Account Name</th>
                    <th>Account Type</th>
                    <th>Account Number</th>
                    <th>Account Balance</th>
                    <th>Account Status</th>
                    <th>Created By</th>
                    <th>Created On</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {data.map((acc) => (
                    <AccountEntry key={acc.accountId} {...acc} />
                ))}
                </tbody>
            </table>
        </div>
    );
}
