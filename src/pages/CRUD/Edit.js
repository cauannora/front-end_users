import React from 'react';
import Header from '../../components/layout/Header';
import UserForm from './UserForm';
import { useParams } from 'react-router-dom' 

function UsersEdit() {
    const {id} = useParams();
    const title = `Editar ${id}`;
    console.log(useParams())
    return (
        <React.Fragment>
            <Header title={title}/>        
            <UserForm id={id}/>
        </React.Fragment>
    )
}

export default UsersEdit;