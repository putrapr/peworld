'use client'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const section2 = () => {  
  return (    
    <>
      <Tabs>
        <TabList className='flex'>
          <Tab>Portofolio</Tab>
          <Tab>Pengalaman Kerja</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>        
    </>

  )
}

export default section2