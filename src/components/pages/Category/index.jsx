import React from 'react';
import Single from '../../nft/Single-Nft/Single';

const Category = () => {
  const data = {
    description: 'This is a description',
    image: `${process.env.PUBLIC_URL}/images/client/client-1.png`,
    name: 'dummy',
    owner: 'voot',
    price: '0.02',
    seller: 'wiclk',
    tokenId: '1',
  };
  return (
    <div className='rn-product-area rn-section-gapTop masonary-wrapper-activation'>
      <div className='container'>
        <div className='row mb--30 align-items-center'>
          <div className='col-lg-4'>
            <div className='section-title'>
              <h3 className='title mb--0'>Explore Product</h3>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end mt_md--30 mt_sm--30'>
              <button type='button' data-filter='*' className='is-checked'>
                <span className='filter-text'>All Items</span>
              </button>
              <button type='button' data-filter='.cat--1'>
                <span className='filter-text'>Art</span>
              </button>
              <button type='button' data-filter='.cat--2'>
                <span className='filter-text'>Music</span>
              </button>
              <button type='button' data-filter='.cat--3'>
                <span className='filter-text'>Vedio</span>
              </button>
              <button type='button' data-filter='.cat--4'>
                <span className='filter-text'>Collectionable</span>
              </button>
              <button type='button' data-filter='.cat--5'>
                <span className='filter-text'>Highest</span>
              </button>
              <button type='button' data-filter='.cat--6'>
                <span className='filter-text'>Lowest</span>
              </button>
            </div>
          </div>
        </div>
        <div className='col-lg-12'>
          <div className='grid-metro5 mesonry-list'>
            <div className='resizer' />
            {/* start single product */}
            <div className='grid-metro-item cat--1 cat--3'>
              <Single nft={data} />
            </div>
            {/* end single product */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
