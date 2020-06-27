import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'

import Heading from '../../component/heading/heading';
import {sendEmail} from '../../action/index';

import './contact.scss';

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.message) {
    errors.message = 'Required'
  } else if (values.message.length < 15) {
    errors.message = 'Message should be greater than 15 characters'
  }
  return errors
}

class ContactMe extends React.Component {
  renderInput = ({input, label, placeholder, id, type,  meta: { touched, error, warning }}) => {
    return (
      <Form.Group controlId={id}>
        <Form.Label className="contact-form-header">{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={input.value}
          onChange={input.onChange}
          {...input}
        />
        {touched && (error && <span>{error}</span>)}
      </Form.Group>
    )
  }

  renderTextArea = ({input, label, placeholder, id, type, meta: { touched, error, warning }}) => {
    return (
      <Form.Group controlId={id}>
        <Form.Label className="contact-form-header">{label}</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder={placeholder} {...input}/>
        {touched && (error && <span>{error}</span>)}
      </Form.Group>
    )
  }

  onSubmit = (formValues) => {
    sendEmail(formValues, this.props.reset);
  }

  render() {
    return (
      <section className="container-contact" id="contactme">
        <Container>
          <Heading heading="Contact Me" />
          <div className="container-contact-body">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Row>
                <Col md={6}>
                  <Field
                    id="formNameID"
                    name="name"
                    type="text"
                    component={this.renderInput}
                    label="Name:"
                    placeholder="Full Name"
                  />
                </Col>
                <Col md={6}>
                  <Field
                    id="formEmailID"
                    name="email"
                    type="email"
                    component={this.renderInput}
                    label="Email:"
                    placeholder="Email Address"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Field
                    id="formMessageID"
                    name="message"
                    component={this.renderTextArea}
                    label="Message:"
                    placeholder="Message"
                  />
                </Col>
              </Row>
              <Button className="contact-submit-button" type="submit">Submit</Button>
            </form>
          </div>
        </Container>
      </section>
    )
  }
}

export default reduxForm({
  form: 'contactMe',
  validate
})(ContactMe)