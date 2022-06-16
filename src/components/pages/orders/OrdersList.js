import React , {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function OrdersList() {
  const myArr = [
    {id: '1', name: 'Sarah Smith', date: '2/5/2022', orderStatus: ['pendding','in review', 'in progress', 'on the way', 'canceled']},
    {id: '2', name: 'Sarah Smith', date: '2/5/2022', orderStatus: ['pendding','in review', 'in progress', 'on the way', 'canceled']},
    {id: '3', name: 'Sarah Smith', date: '2/5/2022', orderStatus: ['pendding','in review', 'in progress', 'on the way', 'canceled']},
    {id: '4', name: 'Sarah Smith', date: '2/5/2022', orderStatus: ['pendding','in review', 'in progress', 'on the way', 'canceled']},
    {id: '5', name: 'Sarah Smith', date: '2/5/2022', orderStatus: ['pendding','in review', 'in progress', 'on the way', 'canceled']},
    {id: '6', name: 'Sarah Smith', date: '2/5/2022', orderStatus: ['pendding','in review', 'in progress', 'on the way', 'canceled']},

  ];
  const [orderStatusVal, setOrderStatusVal] = useState([]);

  const handleSelect = (e , id) => {
   const arrID= myArr.findIndex(item => {
   if (item.id === id){
    orderStatusVal[id-1] = e
   setOrderStatusVal([...orderStatusVal])
   }
  })
  }
  const [orders, setOrders] = useState(null)
  console.log(orders)

const fetchCustomer = async () => {
  //fake API
  const res = await fetch("https://reqres.in/api/users/");
  const json = await res.json();
  setOrders(json.data);
}

useEffect(()=>{
  fetchCustomer();

},[])

  return (
    <section className='orders'>
        <h1 style={{fontWeight: '600', margin: '20px'}}>Orders</h1>
      <hr />
    <Table striped  style={{ width: '97%',margin: '10px'}} >
      <thead>
        <tr>
          <th>ID</th>
          <th>User Name</th>
          <th>Creation Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          orders && orders.map((order, index) =>(
          <tr key={index}>
            <td>{order.id}</td>
            <td>{order.first_name}</td>
{/*            <td>{order.date}</td>

            <td>
             
            <DropdownButton variant="white" onSelect={(e) => handleSelect(e, order.id)} id="dropdown-basic-button" title={orderStatusVal[index] ? orderStatusVal[index] : 'select' }>
              {order.orderStatus.map((stat, indx)=>( 
              <Dropdown.Item key={indx} eventKey={stat} >{stat}</Dropdown.Item>
              ))}
              
             
            </DropdownButton>

            </td>
            */}
          </tr>

          ))
        }
              
     
      </tbody>
    </Table>
    </section>
  );
}

export default OrdersList;