import React from 'react'
import { Container, Col, Stack, Button } from '../bootstrap'
import { useNavigate } from 'react-router-dom'
import styles from './LandingPage.module.css'

export default function LandingPage() {
    const navigate = useNavigate()
    return (
        <Container className={styles.landingPage}>
            <Col md={8} className="mx-auto">
                <div className={styles.textcontent}>
                    <h1 className={styles.title}>
                        Create an open letter, sign an existing one, or edit an
                        existing one
                    </h1>
                    <h4>
                        For more information, visit the
                        <a
                            href="https://github.com/jellyyams/openletter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}
                            github repo
                        </a>
                    </h4>
                </div>

                <Stack className="col-md-5 mx-auto" gap={3}>
                    <Button
                        variant="primary"
                        onClick={() => navigate('/create')}
                    >
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
