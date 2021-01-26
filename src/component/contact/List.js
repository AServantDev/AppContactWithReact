import React, { Component} from 'react';
import Contact from './Contact'
import {Consumer} from '../../context'
class List extends Component {
    
componentDidMount() {
    console.log();
}
    
    
    render() {

    return (
        <Consumer>
          {value => {
            return( 
             <React.Fragment>
                 <h1 className='display-6 my-4'>Mes contacts:</h1>
                {value.contacts.map(contact => (
                    <Contact
                    key={contact.id}
                    id={contact.id}
                    nom={contact.nom}
                    email={contact.email}
                    tel={contact.tel}
                    />
                ))}
             </React.Fragment>
                    )
                }}
        </Consumer>
        )
    }
}

export default List;
