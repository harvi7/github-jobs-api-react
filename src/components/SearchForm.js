import React from 'react'
import { Form, Col, FormGroup } from 'react-bootstrap'

export default function SearchForm({ params, onParamChange }) {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <FormGroup as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" />
                </FormGroup>
                <FormGroup as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" />
                </FormGroup>
                <FormGroup as={Col} xs="auto" className="ml-2">
                    <Form.Check onChange={onParamChange} value={params.full_time} 
                    name="full_time" id="full-time" label = "Only full Time" type="checkbox" className="mb-2"/>
                </FormGroup>
            </Form.Row>
        </Form>
    )
}
