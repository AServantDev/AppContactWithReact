import React, { Component } from 'react';
import {Consumer} from '../../context'
import {v1 as uuid} from 'uuid'

class AddContact extends Component {

    state = {
        nom:'',
        email:'',
        tel:''
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value, e.target.name)
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault()
        const newContact = {
            id: uuid(),
            nom: this.state.nom,
            email: this.state.email,
            tel: this.state.tel
        }
        dispatch({type:'ADD_CONTACT', payload: newContact})
        this.setState({
            nom:'',
            email:'',
            tel:''
        })
        this.props.history.push('/')
    }

    render() {
        return(
            <Consumer>
                {value => {
return (
    <div className='card mb-3'>
        <div className='card-header'>
        Ajouter un contact
        </div>
        <div className='card-body'>
            <form onSubmit = {this.onSubmit.bind(this, value.dispatch)}>
                <div className="form-group">
                    <label htmlFor='nom'/>
                    <input type='text'
                    className='form-control form-control-lg'
                    placeholder='Entrez un nom' 
                    name='nom' value={this.state.nom} 
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor='email'/>
                    <input type='text'
                    className='form-control form-control-lg'
                    placeholder='Entrez un email' 
                    name='email' value={this.state.email} 
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor='tel'/>
                    <input type='text'
                    className='form-control form-control-lg'
                    placeholder='Entrez un téléphone' 
                    name='tel' value={this.state.tel} 
                    onChange={this.onChange}/>
                </div>
                <input 
                type="submit"
                value='Ajouter un contact'
                className='btn btn-block btn-primary'/>
            </form>
        </div>
        
    </div>
);
                }}
            </Consumer>
        )
        
    }
}

export default AddContact;
