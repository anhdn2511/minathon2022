import React, {useEffect, useState} from 'react'
import {Form, Button} from 'react-bootstrap'

export default function CreateEvent() {
    const fullEvent = {
        title: "Longbien Marathon 2022 1st Ekiden",
        imageUrl: "https://www.runtastic.com/blog/wp-content/uploads/2019/03/blog_thumbnail_run-for-the-oceans_proper-running-form_1200x800-1024x683.jpg",
        organize: "Atware",
        description: "Marathon Running for Charity",
        startDate: '24 Apr 2022'
    }

    return (
        <div>
        <div className="vh-25">
          <div
            className="px-0 h-50 w-100 bg-primary"
          />
        </div>
        <div className='row justify-content-center align-items-start'>
            <div className='col-6'>
                <p className='h1'>Create Event</p>
            </div>
        </div>
        <Form className='px-3'>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter Name" defaultValue={fullEvent.title}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Enter description" defaultValue={fullEvent.description}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Organization Unit</Form.Label>
                <Form.Control placeholder="Enter Organization Unit" defaultValue={fullEvent.organize}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Link image</Form.Label>
                <Form.Control placeholder="Enter image url" defaultValue={fullEvent.imageUrl}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Start Date</Form.Label>
                <Form.Control placeholder="Enter start date" defaultValue={fullEvent.startDate}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            
        </Form>
      </div>
    )
}