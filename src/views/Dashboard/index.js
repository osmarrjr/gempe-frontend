import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import SideBar from '../../components/SideBar';
import HeaderMenu from '../../components/Header';
import { Input, Button, Table, Row, Tooltip, Modal } from 'antd';
import  editIcon  from '../../assets/Mask Group 61.svg';
import  deleteIcon  from '../../assets/Mask Group 63.svg';
import { addUser } from '../../store/actions/user.actions';
import api from '../../services/api';
import './styles.css';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  function editContact(row) {
    setName(row.name);
    setEmail(row.email);
    setPhone(row.phone);
    setIsEditing(true);
    setVisible(true);
  }

  function addNewContat() {
    // api.post('/people', {
    //   name: "alguem312321231",
    //   email: "alguem312312312312@gmail.com",
    //   phone: "12321312312333213213213"
    // });
    dispatch(addUser());
  }

  const columns = [
    {
          title: 'Nome',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'E-mail',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Telefone',
          key: 'phone',
          render: (text, row, record) => {
            return <span>{row.phone}</span>
          }
        },
        {
          title: 'Ações',
          key: 'action',
          render: (text, row, record) => (
              <Fragment >

                  <Tooltip placement="top" title={'Editar Contato'}>
                    <Button size="small" onClick={() => editContact(row)}>

                      <img src={editIcon} alt="" />
                    </Button>
                  </Tooltip>
                  <Tooltip tittle={'Deleter Contato'}>
                    <Button size="small" onClick={() => {
                      console.log(row.id)
                    }}>
                        
                      <img src={deleteIcon} alt="" />
                    </Button>
                  </Tooltip>
              </Fragment>
          ),
        },
      ];

      const data = [
        {
          name: 'Fernanda de Araújo',
          email: 'Fernanda.rjr@@hotmail.com',
          phone: '43998328883',
        },
        {
          name: 'Osmar Roncasalia',
          email: 'osmaar.rjr@@hotmail.com',
          phone: '43 9 9832-8883',
        },
        {
          name: 'Nathalia Dutra',
          email: 'Nathalia.rjr@@hotmail.com',
          phone: '43 9 9832-8883',
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
                    <Button onClick={() => addNewContat()} id="buttonSearch">Novo</Button>
                </Row>
                <Table className="tableDashboard" columns={columns} dataSource={data} />
            </div>
            <Modal
              title={isEditing ? "Editar Usuário" : "Novo contato"}
              onOk={()=>  (
                setVisible(false),
                setIsEditing(false)
                )}
              visible={visible}
              onCancel={()=> (
                setVisible(false),
                setIsEditing(false)
              )}
            >
              <div>
                <span >Nome </span>
                <Input onChange={(e) => setName(e.target.value) }value={name}/>
                  <span> Email </span>
                <Input onChange={(e) => setEmail(e.target.value)} value={email}/>
                  <span> Telefone  </span>
                <Input onChange={(e) => setPhone(e.target.value)} value={phone}/>

              </div>
            </Modal>
        </div>
    );
}