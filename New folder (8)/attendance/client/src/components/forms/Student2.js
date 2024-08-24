import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function UpdateStudentDetail() {
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [updateStatus, setUpdateStatus] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setEnrollmentNumber(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!enrollmentNumber) {
      setUpdateStatus('Please enter an enrollment number');
      return;
    }

    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/update-student`, {
        enrollmentNumber,
      });
      setUpdateStatus(response.data.message || 'Student updated successfully');
    } catch (error) {
      setUpdateStatus(error.response?.data?.message || 'Error updating student');
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEnrollmentNumber">
              <Form.Label>Enrollment Number</Form.Label>
              <Form.Control
                type="text"
                name="enrollmentNumber"
                value={enrollmentNumber}
                onChange={handleInputChange}
                placeholder="Enter enrollment number"
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3">
              Update Student
            </Button>
          </Form>
          {updateStatus && (
            <Alert variant={updateStatus.startsWith('Error') ? 'danger' : 'success'} className="mt-3">
              {updateStatus}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default UpdateStudentDetail;
