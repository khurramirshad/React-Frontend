import CustomerEntry from "./CustomerEntry.jsx";

export default function CustomerList({ data }) {
    return (
        <div>
            <h4>Customer List</h4>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Zip</th>
                    <th>Mobile</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {data.map((data) => (
                    <CustomerEntry key={data.id} {...data} />
                ))}
                </tbody>
            </table>
        </div>
    );
}