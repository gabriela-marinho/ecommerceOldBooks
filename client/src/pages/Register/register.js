import { useState } from "react";
import axios from 'axios';
import React from 'react';
import { Container, Title, Form, Terms, Button } from "./styles"; 

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Register(){

    const[name,setName] = useState('');
    const[nickname,setNickname]= useState('');
    const[email,setEmail]= useState('');
    const[password,setpassword]= useState('');
    const[imageUrl,setImageUrl]= useState('');
    
    const handleSubmit = event => {
        event.preventDefault();
        
        const user ={
            name:name,
            nickname:nickname,
            email:email,
            password:password,
            imageUrl:imageUrl

        }
        console.log(user)
        // depois q ele fizer o post vai fazxer outra coisa,um console.log da response
    axios.post('user/register', user)
    .then(response => console.log(response))
    }

    return(
    
        <Container>

            <Title>Crie sua conta aqui</Title>
            <Form onSubmit={handleSubmit}> 
                <label>Nome</label>
                <input type='text'  required onChange={event => setName(event.target.value)} />

                <label>Nickname</label>
                <input type='text' required onChange={event => setNickname(event.target.value)}/>

                <label>Email</label>
                <input type='email' required onChange={event => setEmail(event.target.value)}/>

                <label>Senha</label>
                <input type='password' required onChange={event => setpassword(event.target.value)}/>

                <label>Imagem</label>
                <input type='text' required onChange={event => setImageUrl(event.target.value)}/>

                <Terms>
                <input type='checkbox' required/>
                <label>Me comprometo a disseminar livros aonde eu for.</label>
                </Terms>
                
                <Button>
                     <input type='submit' value='Enviar'/>
                </Button>
                
                
                
                
                
            </Form>
        </Container>
        
    )
}