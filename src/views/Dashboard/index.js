import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import HeaderMenu from '../../components/Header';
import { Input, Button, Table, Row, Tooltip, Modal } from 'antd';
import  editIcon  from '../../assets/Mask Group 61.svg';
import  deleteIcon  from '../../assets/Mask Group 63.svg';
import { getContactsRequest,  
  addNewContactRequest, 
  editContactRequest, 
  searchFilterRequest,
  deleteContactRequest
} from '../../store/actions/user.actions';
import Swal from 'sweetalert2';
import './styles.css';

export default function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector(state => state.user);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [dataSourceFilter, setDataSourceFilter] = useState([]);
  const [rowId, setRowId] = useState('');
  const [filter, setFilter] = useState('');

  const screenHeight = window.innerHeight;

  useEffect(() => {
    dispatch(getContactsRequest());
  }, []);

  useEffect(() => {
    if(data.contacts.length > 0 && data.contacts.type === 'notIdentified') {
      Swal.fire('Atenção!', 'Token não identificado, refaça o login!', 'warning');
      localStorage.setItem('@token', undefined);
      history.push('/');
    } else if(data.contacts.length > 0 && data.contacts.type === 'invalidToken') {
      Swal.fire('Atenção!', 'Token inválido!', 'info');
      localStorage.setItem('@token', undefined);
      history.push('/');
    } else if(data.contacts.length > 0 ) {
      setDataSource(data.contacts);
    } else {
      setDataSource([]);
    }
    
  }, [data.contacts]);

  useEffect(() => {
    if(data.addNewContact.data !== undefined && isEditing === false && data.addNewContact.data.type === 'success') {
      Swal.fire('Sucesso!', data.addNewContact.data.message, 'success');
      clearData();
    } else if(data.addNewContact.data !== undefined && isEditing === false && data.addNewContact.data.type === 'isRegistered') {
      Swal.fire('Atenção!', data.addNewContact.data.message, 'info')
    }
  }, [data.addNewContact])

  useEffect(() => {
    if(data.editContact && data.editContact.type === 'success') {
      Swal.fire('Sucesso!', data.editContact.message, 'success');
      clearData();
    } else if(data.editContact && data.editContact.type === 'existContact') {
      Swal.fire('Sucesso!', data.editContact.message, 'info');
      clearData();
    }
  }, [data.editContact])

  useEffect(() => {
    if(data.filter.data !== undefined) {
      setDataSourceFilter(data.filter.data);
    }
  }, [data.filter])

  function editContact() {
    setIsEditing(true);
    setVisible(true);
  }

  function addNewContact() {
    setIsEditing(false);
    setVisible(true);
  }

   function sendData() {
    let data = {
      name, 
      email, 
      phone,
    }
    if(isEditing) {
       dispatch(editContactRequest(rowId, data));
       setTimeout(() =>{
        dispatch(getContactsRequest());
       }, 500)
     
    } else {
      dispatch(addNewContactRequest(data));
      setTimeout(() =>{
        dispatch(getContactsRequest());
       }, 1000)
    }
    clearData();
  }

  function searchFilter() {
    dispatch(searchFilterRequest(filter));
  }

  function clearData() {
    setVisible(false);
    setIsEditing(false);
    setName('');
    setEmail('');
    setPhone('');
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
          render: (text, row, record, key) => (
              <Fragment key={row.id}>
                  <Tooltip placement="top" title={'Editar Contato'}>
                    <Button size="small" onClick={() => (
                      setName(row.name),
                      setEmail(row.email),
                      setPhone(row.phone),
                      setRowId(row._id),
                      editContact()
                    )}>

                      <img src={editIcon} alt="" />
                    </Button>
                  </Tooltip>
                  <Tooltip tittle={'Deleter Contato'}>
                    <Button size="small" onClick={() => {
                      dispatch(deleteContactRequest(row._id))
                      setTimeout(() => {
                        dispatch(getContactsRequest())
                      }, 500);
                    }}>
                      <img src={deleteIcon} alt="" />
                    </Button>
                  </Tooltip>
              </Fragment>
          ),
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
                    <Input onKeyPress={(e) => e.charCode === 13 ? searchFilter() : ''} onChange={(e) => setFilter(e.target.value)} placeholder="Busca por nome ou email" id="inputSearch"/> 
                    <Button onClick={() => addNewContact()} id="buttonNew">Novo</Button>
                </Row>
                <Table 
                  className="tableDashboard" 
                  columns={columns} 
                  dataSource={dataSourceFilter.length > 0 ? dataSourceFilter : dataSource} 
                  pagination={screenHeight === 969 ? { defaultPageSize: 10 } : {defaultPageSize: 6}}
                />
            </div>
            <Modal
              title={isEditing ? "Editar Usuário" : "Novo contato"}
              onOk={()=>  (
                sendData(name, email, phone)
              )}
              visible={visible}
              onCancel={()=> (
                clearData()
              )}
              footer={[
                <Button type="primary" key="back" onClick={() =>  clearData()}>
                  Cancelar
                </Button>,
                <Button key="submit" type="primary" onClick={() => sendData(name, email, phone)} >
                  Salvar
                </Button>,
              ]}
            >
              <div>
                  <span>Nome </span>
                <Input className="buttonModal" onChange={(e) => setName(e.target.value) } value={name}/>
                  <span> Email </span>
                <Input className="buttonModal" onChange={(e) => setEmail(e.target.value)} value={email}/>
                  <span> Telefone  </span>
                <Input className="buttonModal" onChange={(e) => setPhone(e.target.value)} value={phone}/>

              </div>
            </Modal>
        </div>
    );
}