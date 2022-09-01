import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleSubmit(){
        console.log(JSON.stringify({email:email, password: password}), 'ici');
        fetch('http://127.0.0.1:8000/authentication_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body:JSON.stringify({email:email, password: password})
        }).then((response) =>{
            return response.json()
        }).then(async (data)=>{
            console.log(data);
            await localStorage.setItem('auth_token', data.token)
            window.location.href = "/accueil"
        })
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        // <div>
        //  <form method='post'>
        //     <input type={'password'} onChange={(e)=>{
        //         setPassword(e.target.value)
        //         }}  placeholder='mdp' />
        //     <input type={'email'} onChange={(e)=>{
        //         setEmail(e.target.value)
        //     }}  placeholder="email"/>
        //     <button type="submit" onClick={(e)=>{
        //     e.preventDefault()
        //     console.log(email , password)
        //     handleSubmit()
        //     }} >se connecter</button>
        //  </form>
        // </div>
    );
}