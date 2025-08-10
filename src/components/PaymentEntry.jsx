export default function PaymentEntry(props){
        const formattedDateTime = props.timePlaced
            ? new Date(props.timePlaced).toLocaleString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
            })
            : '';
    return (
        <tr>
                <td>{props.id}</td>
                <td>{props.userId}</td>
                <td>{props.solanceTo}</td>
                <td>{props.rate}</td>
                <td>{props.amountSell}</td>
                <td>{props.amountBuy}</td>
                <td>{props.solanceFrom}</td>
                <td>{formattedDateTime}</td>
                <td>{props.beneficiaryIBAN}</td>
                <td>{props.originatingCountry}</td>
                <td>{props.paymentRef}</td>
                <td>{props.invoiceNumber}</td>
                <td>{props.purposeRef}</td>
                <td>{props.invoicePayment}</td>
        </tr>


    )
}