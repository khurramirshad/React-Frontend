export default function AccountEntry(props) {
    return (
        <tr>
            <td>{props.accountId}</td>
            <td>{props.accountName}</td>
            <td>{props.accountType}</td>
            <td>{props.accountNumber}</td>
            <td>{props.accountBalance}</td>
            <td>{props.accountStatus}</td>
            <td>{props.createdBy}</td>
            <td>{props.createdOn}</td>
        </tr>
    );
}