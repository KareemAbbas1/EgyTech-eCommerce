import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useParams } from 'react-router-dom';


const CustomerDetail = () => {

    let { userId } = useParams();
    const [customer, setCustomer] = useState(null) ;
    const [statusVal, setStatusVal] = useState(null)
const handleSelect= (e)=>{
    setStatusVal(e)
}
const fetchCustomer = async () => {
    //fake API
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setCustomer(json.data[userId]);
}

useEffect(()=>{
    fetchCustomer();

},[])

console.log(customer)
  return (
 <section style={{display: 'flex', margin: '10px', width: '100vw', height: '100vh'}}>
      { customer && <>
        <div className='card-container' style={{width: "30%"}}>
            <Card style={{ width: '100%' }}>
                <Card.Img style={{width:"45%", height: "60%", borderRadius: "50%", alignSelf: "center"}} variant="top" src={customer.avatar} />
                <Card.Body style={{alignItems: 'center', alignSelf: 'center', width: '100%'}}>
                 <Card.Title>{customer.first_name} {customer.last_name}</Card.Title>
                <Button 
                  style={{
                    width: '100%',
                    backgroundColor: '#28CC9E',
                    color: "#fff", 
                    display: 'block',
                    marginBottom: '5px'
                       }}>
                        submit
                </Button>
                <Button 
                    style={{   
                        width: '100%',
                        backgroundColor: 'transparent',
                        color: "#28CC9E", border: '1px solid #28CC9E'
                    }}>
                        cancel
                </Button>
                </Card.Body>
            </Card>
        </div>
        <div className='content'>
        <Tabs className="Tabs">
      <TabList className="tab-list">
        <Tab>User Info</Tab>
        <Tab>Address</Tab>
      </TabList>
      <TabPanel style={{margin: '10px'}}>
        <p><span>User No: </span> {userId} </p>
        <p><span>User Name: </span> {customer.first_name} </p>
        <p><span>Email: </span> {customer.email} </p>
        <p><span>Creation Date: </span> {} </p>
        <DropdownButton variant="white" onSelect={(e) => handleSelect(e)} id="dropdown-basic-button" title={statusVal ? statusVal : 'status'}>
              <Dropdown.Item eventKey='Active' >Active</Dropdown.Item>
              <Dropdown.Item eventKey='Deactivated' >Deactivated</Dropdown.Item>
              <Dropdown.Item eventKey='Suspended' >Suspended</Dropdown.Item>
            </DropdownButton>
      </TabPanel>
      <TabPanel>
         <p>user address details here</p>
      </TabPanel>
    </Tabs>
        </div>
    </>}
    </section>

                
  )
}

export default CustomerDetail