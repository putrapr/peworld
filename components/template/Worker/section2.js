'use client'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const section2 = () => {
  
  return (
    // <section>
    //   <div className="mb-4 border-b border-gray-200">
    //     <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" 
    //       id="default-tab" 
    //       data-tabs-toggle="#default-tab-content" 
    //       role="tablist">
    //       <li className="me-2" role="presentation">
    //         <button className="inline-block p-4 border-b-2 rounded-t-lg" 
    //           id="profile-tab" 
    //           data-tabs-target="#profile" 
    //           type="button" 
    //           role="tab" 
    //           aria-controls="profile" 
    //           aria-selected="false">Profile</button>
    //       </li>
    //       <li className="me-2" role="presentation">
    //         <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300" 
    //           id="dashboard-tab" 
    //           data-tabs-target="#dashboard" 
    //           type="button" 
    //           role="tab" 
    //           aria-controls="dashboard" 
    //           aria-selected="false">Dashboard</button>
    //       </li>
    //       <li className="me-2" role="presentation">
    //         <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300" 
    //           id="settings-tab" 
    //           data-tabs-target="#settings" 
    //           type="button" 
    //           role="tab" 
    //           aria-controls="settings" 
    //           aria-selected="false">Settings</button>
    //       </li>
    //       <li role="presentation">
    //         <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300" 
    //           id="contacts-tab" 
    //           data-tabs-target="#contacts" 
    //           type="button" 
    //           role="tab" 
    //           aria-controls="contacts" 
    //           aria-selected="false">Contacts</button>
    //       </li>
    //     </ul>
    //   </div>
    //   <div id="default-tab-content">
    //     <div className="hidden p-4 rounded-lg bg-gray-50" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    //       <p className="text-sm text-gray-500">Description1</p>
    //     </div>
    //     <div className="hidden p-4 rounded-lg bg-gray-50" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
    //       <p className="text-sm text-gray-500">Description2</p>
    //     </div>
    //     <div className="hidden p-4 rounded-lg bg-gray-50" id="settings" role="tabpanel" aria-labelledby="settings-tab">
    //       <p className="text-sm text-gray-500">Description3</p>
    //     </div>
    //     <div className="hidden p-4 rounded-lg bg-gray-50" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
    //       <p className="text-sm text-gray-500">Description4</p>
    //     </div>
    //   </div>
    // </section>

    
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