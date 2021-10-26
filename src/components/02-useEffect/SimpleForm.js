import React, { useState, useEffect } from 'react';
import { Message } from './Message';
import './simpleform.css';
export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const { name, email } = formState;
    useEffect(() => {
        console.log('SimpleForm - useEffect');
    }, [])
    useEffect(() => {
        console.log('SimpleForm - cambio');
    }, [formState])
    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <form>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="text" name="name" value={name} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" value={email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {(name === '123' && <Message/>)}
        </>
    )
}
