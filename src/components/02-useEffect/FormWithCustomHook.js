import React, { useState } from 'react';
import './simpleform.css';
export const FormWithCustomHook = () => {
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
    return (
        <>
            <h1>FormWithCustomHook</h1>
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

        </>
    )
}
