export default function DepositEntry(props) {


    return (
        <tr>
            <td>{props.transactionId}</td>
            <td>{props.amount}</td>
            <td>{props.currency}</td>
            <td>{new Date(props.transactionDate).toLocaleString()}</td>
            <td>{props.accountId}</td>
            <td>{props.accountHolder}</td>
            <td>{props.source}</td>
            <td>{props.referenceNumber}</td>
            <td>{props.description}</td>
            <td>{props.status}</td>
            <td>{props.createdBy}</td>
        </tr>
    );
}
