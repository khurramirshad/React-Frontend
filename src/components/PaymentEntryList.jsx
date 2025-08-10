import PaymentEntry from "./PaymentEntry.jsx";

export default function PaymentEntryList({ data }) {
    return (
        <div>
            <h4>Payment Instruction List</h4>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>User Id</th>
                    <th>Solance To</th>
                    <th>Rate</th>
                    <th>Amount Sell</th>
                    <th>Amount Buy</th>
                    <th>Solance From</th>
                    <th>Time Placed</th>
                    <th>Beneficiary IBAN</th>
                    <th>Originating Country</th>
                    <th>Payment Ref</th>
                    <th>Invoice Number</th>
                    <th>Purpose Ref</th>
                    <th>Invoice Payment</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {data.map((Inc) => (
                    <PaymentEntry
                        key={Inc.id}
                        {...Inc} // Props spreading for auto config.
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}
