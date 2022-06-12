import React from 'react';
import './product.css'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Reviews from './Reviews';

 function ProductTab({product}) {
  return (
      <div className="tabs-container">
            {   product && <>

    <Tabs className="Tabs">
      <TabList className="tab-list">
        <Tab>Product Details</Tab>
        <Tab>Customer Reveiws</Tab>
      </TabList>
      <TabPanel>
       <p style={{width:'80%', display: 'flex', wrap:'flex-wrap', lineHeight: '30px'}}>{product.productDetails}</p>
      </TabPanel>
      <TabPanel>
       <Reviews product={product}/>
      </TabPanel>
    </Tabs>
    </>
    }
  </div>
  
  );
}
export default ProductTab;