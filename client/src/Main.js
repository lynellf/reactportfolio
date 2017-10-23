import React from 'react';
import {Container } from 'semantic-ui-react';



//Create a list of posts from the data passed as props

const Main = (props) => {
    return(
      <Container text fluid={true}>
      <h4>Background</h4>
      <p>As a recent college graduate, I want to continue my life of learning and creating value for others. Joining the Treehouse
  Techdegree program feels like the right step after finishing with a bachelor's in management information systems.
  I'm super excited to be a part of this amazing experience.</p>
      </Container>
    );
}

export default Main;
