import React from 'react';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import './SideBar.css';

export const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className="sidebar">
      <Sidebar.Logo href="#" img="/favicon.svg" className="sidebar-logo">
        <p>Flowbite</p> 
      </Sidebar.Logo>
      <Sidebar.Items className="sidebar-items">
        <Sidebar.ItemGroup className="sidebar-item-group">
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="sidebar-item">
            <p>Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="sidebar-item">
            <p>Upload Books</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="sidebar-item">
            <p>Manage Books</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/edit-books/:id" icon={HiUser} className="sidebar-item">
            <p>Edit Books</p>
          </Sidebar.Item>
         
        </Sidebar.ItemGroup>
      
        
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
