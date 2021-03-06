import React, { Component } from 'react';
import {Consumer} from '../../context'


class Contact extends Component {

    state={show: false}

    showContact = () => {
        this.setState({show : !this.state.show})
    }
    deleteContact = (id, dispatch) => {
       dispatch({type:'DELETE_CONTACT', payload: id})
    } 
  
   
    render() {
        return(
            <Consumer>
                {value => {
                    return (
                        <div className='card card-body mb-3 text-center'>
                            <h4>{this.props.nom} 
                                <i className='fas fa-sort-down'
                                    style={{cursor:'pointer'}}
                                    onClick={this.showContact}>
                                </i>
                                <i className='fas fa-times' 
                                    style={{cursor: 'pointer', float :'right', color: 'red'}} 
                                    onClick={() => this.deleteContact(this.props.id, value.dispatch)}>
                                </i>
                            </h4>
                            {this.state.show ? (
                                <ul className='card card-ody mb-3'>
                                    <li className='list-group-item'>Email: {this.props.email}</li>
                                    <li className='list-group-item'>Phone: {this.props.tel}</li>
                                </ul>
                            ) : null}
                            
                        </div>
                    );
                }}
            </Consumer>
        )
        
    }
}

export default Contact;
