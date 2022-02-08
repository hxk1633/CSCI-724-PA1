import React, { useState } from 'react';
import { Col, Form, InputGroup, Button, FormControl } from 'react-bootstrap';

export const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        props.handleFormSubmit(term);
        setTerm("");
    }

    const handleChange = event => {
        setTerm(event.target.value);
    }

    return (
        <Col span={10} offset={6}>
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search for a movie..."
                        aria-label="Search for a movie..."
                        aria-describedby="basic-addon2"
                        onChange={handleChange} 
                        value={term}/>
                    <Button id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </Form>
        </Col>
    )
}