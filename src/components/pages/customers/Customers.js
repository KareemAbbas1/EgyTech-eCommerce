import React , {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import { Link, Route} from 'react-router-dom'
import CustomerDetail from './CustomerDetail';

function CustomersList() {

const [customers, setCustomers] = useState(null)
console.log(customers)

const fetchCustomer = async () => {
  //fake API
  const res = await fetch("https://reqres.in/api/users/");
  const json = await res.json();
  setCustomers(json.data);
}

useEffect(()=>{
  fetchCustomer();

},[])
  return (

    <section className='orders'>
      { customers && <>
        <h1 style={{fontWeight: '600', margin: '20px'}}>Customers</h1>
      <hr />
    <Table striped  style={{ width: '97%',margin: '10px'}} >
      <thead>
        <tr>
          <th>No</th>
          <th>User Name</th>
          <th>Creation Date</th>
          <th>Status</th>
          <th>Details</th>

        </tr>
      </thead>
      <tbody>
        {
          customers && customers.map((customer, index) =>(
          <tr key={index}>
            <td>{customer.id}</td>
            <td>{customer.first_name}</td>


           <td>22/5/2022</td> 
           <td>active</td>
         
          <td> 
            <Link to={customer.id}
                style={{
                  backgroundColor: '#28CC9E',
                  color: "#fff", border: 'none'
                  }} >
                       view
                 </Link>
                 <Link to={"/customers/"+customer.id}>see</Link>

            </td>
            
          </tr>

          ))
        }
      </tbody>
    </Table>
    </>
}
    </section>
  );
}

export default CustomersList;