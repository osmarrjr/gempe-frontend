import React from 'react';
import SideBar from '../../components/SideBar';
import HeaderMenu from '../../components/Header';
import { Input, Button, Table, Row } from 'antd';
import  editIcon  from '../../assets/Mask Group 61.svg';
import  deleteIcon  from '../../assets/Mask Group 63.svg';
import './styles.css';

export default function Dashboard() {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
              <Row className="buttonTable" onClick={() => console.log('teste')}>
                  <img src={editIcon} alt="" />
                  <img src={deleteIcon} alt="" />
              </Row>
          ),
        },
      ];

      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
      ];
      

    return (
        <div className="container">
            <div className="menuDashboard">
                <SideBar clickedDashboard={true}/>
            </div>
            <div className="cardDashboard">
                <HeaderMenu />
                <Row>
                    <Input placeholder="Busca por nome ou email" id="inputSearch"/> 
                    <Button id="buttonSearch">Novo</Button>
                </Row>
                <Table className="tableDashboard" columns={columns} dataSource={data} />
            </div>
        </div>
    );
}