import React from 'react'
import {Row, Container} from 'react-bootstrap'

export default function CreateEvent() {
    return (
    <div>
      <div className='vh-25'>
        <img className='px-0 border-radius-bottom h-100 w-100' src="https://www.runtastic.com/blog/wp-content/uploads/2019/03/blog_thumbnail_run-for-the-oceans_proper-running-form_1200x800-1024x683.jpg"/>
      </div>
      <div className='vh-50 px-5'>
        <Row className='h-100 negative-mg-top-1'>
          <Container className='white-background border border my-rounded shadow p-3 bg-body'>
            <h1>Nhân Cù</h1>
          </Container>
        </Row>
      </div>
    </div>
    )
}