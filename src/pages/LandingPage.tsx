import React from 'react';
import { Container, Col, Stack, Modal, Row, Button } from "../bootstrap"
import styles from "./Pages.module.css"
 

export default function LandingPage() {
  return (
    <Container className={styles.landingPage}>
      <Col md={8} className="mx-auto">
        <h1 className={styles.title}>
          Create an open letter, sign an existing one, or edit an existing one
        </h1>
     
        
        
        <Stack className="col-md-5 mx-auto" gap={2}>
          <Button variant="primary">
              Create an Open Letter
          </Button>
          <Button variant="outline-primary">
              Sign an Open Letter
          </Button>
          <Button variant="outline-primary">
              Edit an Open Letter
          </Button>
          
        </Stack>
      </Col>
    </Container>
  )
}

