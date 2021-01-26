import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CardWrapper from './cardWrapper';
import CardContainer from './cardContainer';
import styled from 'styled-components'

import colors from './colors/colors'
// import Input from './input'
// import TextArea from './textArea'
import WAFormButton from './WAFormButton'

const StyledField = styled(Field)`
height:50px;
width:500px;
box-shadow:${colors.boxShadow};
display : flex;
flex-direction: column;
`
const StyledLabel = styled.label`
  margin: 15px 0px;
  position:relative;
  span{
      position:absolute;
      bottom:-1.9em;
      z-index:1;
      padding: 0px 10px;
      transition:0.5s;
    }
  :focus-within{
    span{
      bottom:-1.8em;
      font-size:10px;
      transition:0.5s;
    } 
  }
`

const ContactFromContainer =()=>(
  <CardWrapper>
    <CardContainer>
    <Formik

        initialValues={{ email: '', sujet: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        >
        {({ isSubmitting }) => (

          <Form>
            <StyledLabel>
              <span>E-mail</span>
              <StyledField type="email" name="email" />
            </StyledLabel>
            <ErrorMessage name="email" component="div" />
            <StyledLabel>
              <span>Sujet</span>
              <StyledField type="text" name="sujet" />
            </StyledLabel>
            <ErrorMessage name="password" component="div" />

            <StyledLabel>
              <span>Message</span>
              <StyledField type="textarea" name="message" />
            </StyledLabel>
            <ErrorMessage name="message" component="div" />
            
            <WAFormButton type="submit" disabled={isSubmitting}>
              Submit
            </WAFormButton>
          </Form>

        )}

        </Formik>
    </CardContainer>
  </CardWrapper>

);

export default ContactFromContainer;