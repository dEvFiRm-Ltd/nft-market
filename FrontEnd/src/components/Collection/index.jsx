import React from 'react';
import SingleCollection from '../Single-Collection';
import './main';
import './style.css';

const Collection = () => {
  return (
    <div className='rn-collection-area rn-section-gapTop'>
      <div className='container'>
        <div className='row mb--50 align-items-center'>
          <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
            <h3
              className='title mb--0'
              data-sal-delay='150'
              data-sal='slide-up'
              data-sal-duration='800'
            >
              Top Collection
            </h3>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15'>
            <div
              className='view-more-btn text-start text-sm-end'
              data-sal-delay='150'
              data-sal='slide-up'
              data-sal-duration='800'
            >
              <a className='btn-transparent' href='#!'>
                VIEW ALL
                <i data-feather='arrow-right' />
              </a>
            </div>
          </div>
        </div>

        <div className='row g-5'>
          <SingleCollection />
        </div>
      </div>
    </div>
  );
};

export default Collection;
