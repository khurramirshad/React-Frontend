export default function CustomerEntry(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.address}</td>
            <td>{props.city}</td>
            <td>{props.state}</td>
            <td>{props.country}</td>
            <td>{props.zip}</td>
            <td>{props.mobile}</td>
            <td>{props.email}</td>
        </tr>
    );
}