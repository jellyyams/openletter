import React from 'react'
import { Container, Col, Row, Stack, Form, Button } from '../bootstrap'
import { useForm } from 'react-hook-form'
import styles from './NewLetterPage.module.css'
import TagsInput from '../components/TagsInput'

export default function NewLetterPage() {
    const { handleSubmit } = useForm()

    const onSubmit = () => {
        console.log('submitted')
    }

    return (
        <Container className={styles.main}>
            <h1>Create a new open letter</h1>
            <hr></hr>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Stack className="mx-auto" gap={2}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter a title for the open letter"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="addressee">
                                <Form.Label>Addressee</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the name of the person or organization you're writing to"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="lettercontent">
                        <Form.Label>Letter</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Paste your letter content here"
                            rows={10}
                        />
                    </Form.Group>
                    <h3>Signees</h3>
                    <Form.Group className="mb-3" controlId="allowhighlight">
                        <Form.Check
                            type="checkbox"
                            label="Allow signees to highlight text"
                        />
                        <Form.Text>
                            Users can highlight sentences they especially agree
                            with
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Signee Groups</Form.Label>
                        <TagsInput />
                        <Form.Text>
                            Enter the different groups that signees represent
                            i.e. &apos; students&apos; , &apos; faculty&apos; ,
                            etc
                        </Form.Text>
                    </Form.Group>
                    <hr></hr>
                    <Button type="submit">Submit</Button>
                </Stack>
            </Form>
        </Container>
    )
}
