import React from 'react';
import Banner from '../Banner/Banner';
import CollectionOfAsseets from '../MyAsset/CollectionOfAsseets';
// import Single from '../nft/Single-Nft/Single';

function Profile() {
  return (
    <>
      <Banner />
      <div className='rn-authore-profile-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='tab-wrapper-one'>
                <nav className='tab-button-one'>
                  <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                    <button
                      className='nav-link'
                      id='nav-home-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-home'
                      type='button'
                      role='tab'
                      aria-controls='nav-home'
                      aria-selected='false'
                    >
                      On Sale
                    </button>
                    <button
                      className='nav-link active'
                      id='nav-profile-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-profile'
                      type='button'
                      role='tab'
                      aria-controls='nav-profile'
                      aria-selected='true'
                    >
                      Owned
                    </button>
                    <button
                      className='nav-link'
                      id='nav-contact-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-contact'
                      type='button'
                      role='tab'
                      aria-controls='nav-contact'
                      aria-selected='false'
                    >
                      Created
                    </button>
                    <button
                      className='nav-link'
                      id='nav-liked-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-liked'
                      type='button'
                      role='tab'
                      aria-controls='nav-liked'
                      aria-selected='false'
                    >
                      Liked
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <CollectionOfAsseets />
        </div>
      </div>
    </>
  );
}

export default Profile;
