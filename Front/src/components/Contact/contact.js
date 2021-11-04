import React from 'react'
import {
  Button,
  Form,
  Input,
  TextArea,
} from 'semantic-ui-react'
import './style.scss';

const Contact = () => (
    <main className="contact">
        <h1>Nous Contacter</h1>
        <Form className="contact__form">
        <Form.Group widths='equal'>
            <Form.Field
            control={Input}
            label='Prénom'
            placeholder='Prénom'
            />
            <Form.Field
            control={Input}
            label='Nom'
            placeholder='Nom'
            />
            <Form.Field
            control={Input}
            label='Sujet'
            placeholder='Sujet'
            />
        </Form.Group>
        <Form.Field
            control={TextArea}
            label='Votre message'
            placeholder='Votre message...'
        />
        <Form.Field control={Button}>Envoyer</Form.Field>
        </Form>
    </main>
);


export default Contact