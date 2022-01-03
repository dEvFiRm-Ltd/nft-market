import React from 'react';
import { Form } from 'react-bootstrap';
import Single from '../Single-Nft';
import './main';
import './style.css';

function valuetext(value) {
  return value;
}

const Product = () => {
  return (
    <div className='rn-product-area rn-section-gapTop'>
      <div className='container'>
        <div className='row mb--30 align-items-center'>
          <div className='col-12'>
            <h3
              className='title mb--0'
              data-sal-delay='150'
              data-sal='slide-up'
              data-sal-duration='800'
            >
              Explore Product
            </h3>
          </div>
        </div>

        <div className='default-exp-wrapper'>
          <div className='inner'>
            <div className='filter-select-option'>
              <label className='filter-leble'>Likes</label>
              <Form.Select size='lg' aria-label='Likes'>
                <option>Open this select menu</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </Form.Select>
            </div>
            <div className='filter-select-option'>
              <label className='filter-leble'>Category</label>
              <Form.Select size='lg' aria-label='Category'>
                <option>Open this select menu</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </Form.Select>
            </div>

            <div className='filter-select-option'>
              <label className='filter-leble'>Collections</label>
              <Form.Select size='lg' aria-label='Collections'>
                <option>Open this select menu</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </Form.Select>
            </div>

            <div className='filter-select-option'>
              <label className='filter-leble'>Sale type</label>
              <Form.Select size='lg' aria-label='Types'>
                <option>Open this select menu</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </Form.Select>
            </div>
          </div>
        </div>

        <div className='row g-5 mt_dec--30'>
          <div
            className='col-5 col-lg-4 col-md-6 col-sm-6 col-12'
            data-sal='slide-up'
            data-sal-delay='150'
            data-sal-duration='800'
          >
            <Single />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
