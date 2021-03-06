import React from 'react';

const NftDetails = () => {
  return (
    <div className='product-details-area rn-section-gapTop'>
      <div className='container'>
        <div className='row g-5'>
          <div className='col-lg-7 col-md-12 col-sm-12'>
            <div className='product-tab-wrapper rbt-sticky-top-adjust'>
              <div className='pd-tab-inner'>
                <div
                  className='tab-content rn-pd-content'
                  id='v-pills-tabContent'
                >
                  <div
                    className='tab-pane fade show active'
                    id='v-pills-home'
                    role='tabpanel'
                    aria-labelledby='v-pills-home-tab'
                  >
                    <div className='rn-pd-thumbnail'>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/portfolio/lg/portfolio-01.jpg`}
                        alt='Nft_Profile'
                      />
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='v-pills-profile'
                    role='tabpanel'
                    aria-labelledby='v-pills-profile-tab'
                  >
                    <div className='rn-pd-thumbnail'>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/portfolio/lg/portfolio-02.jpg`}
                        alt='Nft_Profile'
                      />
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='v-pills-messages'
                    role='tabpanel'
                    aria-labelledby='v-pills-messages-tab'
                  >
                    <div className='rn-pd-thumbnail'>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/portfolio/lg/portfolio-03.jpg`}
                        alt='Nft_Profile'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60'>
            <div className='rn-pd-content-area'>
              <div className='pd-title-area'>
                <h4 className='title'>The Amazing Game</h4>
                <div className='pd-react-area'>
                  <div className='heart-count'>
                    <i data-feather='heart' />
                    <span>33</span>
                  </div>
                  <div className='count'>
                    <div className='share-btn share-btn-activation dropdown'>
                      <button
                        className='icon'
                        type='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <svg
                          viewBox='0 0 14 4'
                          fill='none'
                          width='16'
                          height='16'
                          className='sc-bdnxRM sc-hKFxyN hOiKLt'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z'
                            fill='currentColor'
                          />
                        </svg>
                      </button>

                      <div className='share-btn-setting dropdown-menu dropdown-menu-end'>
                        <button
                          type='button'
                          className='btn-setting-text share-text'
                          data-bs-toggle='modal'
                          data-bs-target='#shareModal'
                        >
                          Share
                        </button>
                        <button
                          type='button'
                          className='btn-setting-text report-text'
                          data-bs-toggle='modal'
                          data-bs-target='#reportModal'
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className='bid'>
                Height bid <span className='price'>0.11wETH</span>
              </span>
              <h6 className='title-name'>#22 Portal , Info bellow</h6>
              <div className='catagory-collection'>
                <div className='catagory'>
                  <span>
                    Catagory <span className='color-body'>10% royalties</span>
                  </span>
                  <div className='top-seller-inner-one'>
                    <div className='top-seller-wrapper'>
                      <div className='thumbnail'>
                        <a href='#!'>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/client/client-1.png`}
                            alt='Nft_Profile'
                          />
                        </a>
                      </div>
                      <div className='top-seller-content'>
                        <a href='#!'>
                          <h6 className='name'>Brodband</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='collection'>
                  <span>Collections</span>
                  <div className='top-seller-inner-one'>
                    <div className='top-seller-wrapper'>
                      <div className='thumbnail'>
                        <a href='#!'>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/client/client-2.png`}
                            alt='Nft_Profile'
                          />
                        </a>
                      </div>
                      <div className='top-seller-content'>
                        <a href='#!'>
                          <h6 className='name'>Brodband</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className='btn btn-primary-alta' href='#!'>
                Unlockable content included
              </a>
              <div className='rn-bid-details'>
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
                        Bids
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
                        Details
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
                        History
                      </button>
                    </div>
                  </nav>
                  <div
                    className='tab-content rn-bid-content'
                    id='nav-tabContent'
                  >
                    <div
                      className='tab-pane fade'
                      id='nav-home'
                      role='tabpanel'
                      aria-labelledby='nav-home-tab'
                    >
                      {/* single creator */}
                      <div className='top-seller-inner-one'>
                        <div className='top-seller-wrapper'>
                          <div className='thumbnail'>
                            <a href='#!'>
                              <img
                                src={`${process.env.PUBLIC_URL}/images/client/client-3.png`}
                                alt='Nft_Profile'
                              />
                            </a>
                          </div>
                          <div className='top-seller-content'>
                            <span>
                              0.11wETH by <a href='#!'>Allen Waltker</a>
                            </span>
                            <span className='count-number'>1 hours ago</span>
                          </div>
                        </div>
                      </div>
                      {/* single creator */}
                      {/* single creator */}
                      <div className='top-seller-inner-one'>
                        <div className='top-seller-wrapper'>
                          <div className='thumbnail'>
                            <a href='#!'>
                              <img
                                src={`${process.env.PUBLIC_URL}/images/client/client-4.png`}
                                alt='Nft_Profile'
                              />
                            </a>
                          </div>
                          <div className='top-seller-content'>
                            <span>
                              0.09wETH by <a href='#!'>Joe Biden</a>
                            </span>
                            <span className='count-number'>1.30 hours ago</span>
                          </div>
                        </div>
                      </div>
                      {/* single creator */}
                      {/* single creator */}
                      <div className='top-seller-inner-one'>
                        <div className='top-seller-wrapper'>
                          <div className='thumbnail'>
                            <a href='#!'>
                              <img
                                src={`${process.env.PUBLIC_URL}/images/client/client-5.png`}
                                alt='Nft_Profile'
                              />
                            </a>
                          </div>
                          <div className='top-seller-content'>
                            <span>
                              0.07wETH by <a href='#!'>Sonial mridha</a>
                            </span>
                            <span className='count-number'>1.35 hours ago</span>
                          </div>
                        </div>
                      </div>
                      {/* single creator */}
                      {/* single creator */}
                      <div className='top-seller-inner-one'>
                        <div className='top-seller-wrapper'>
                          <div className='thumbnail'>
                            <a href='#!'>
                              <img
                                src={`${process.env.PUBLIC_URL}/images/client/client-6.png`}
                                alt='Nft_Profile'
                              />
                            </a>
                          </div>
                          <div className='top-seller-content'>
                            <span>
                              0.07wETH by <a href='#!'>Tribute Dhusra</a>
                            </span>
                            <span className='count-number'>1.55 hours ago</span>
                          </div>
                        </div>
                      </div>
                      {/* single creator */}
                      {/* single creator */}
                      <div className='top-seller-inner-one'>
                        <div className='top-seller-wrapper'>
                          <div className='thumbnail'>
                            <a href='#!'>
                              <img
                                src={`${process.env.PUBLIC_URL}/images/client/client-7.png`}
                                alt='Nft_Profile'
                              />
                            </a>
                          </div>
                          <div className='top-seller-content'>
                            <span>
                              0.07wETH by <a href='#!'>Sonia Sobnom</a>
                            </span>
                            <span className='count-number'>2 hours ago</span>
                          </div>
                        </div>
                      </div>
                      {/* single creator */}
                      {/* single creator */}
                      <div className='top-seller-inner-one'>
                        <div className='top-seller-wrapper'>
                          <div className='thumbnail'>
                            <a href='#!'>
                              <img
                                src={`${process.env.PUBLIC_URL}/images/client/client-8.png`}
                                alt='Nft_Profile'
                              />
                            </a>
                          </div>
                          <div className='top-seller-content'>
                            <span>
                              0.02wETH by <a href='#!'>Sadia Rummon</a>
                            </span>
                            <span className='count-number'>2.5 hours ago</span>
                          </div>
                        </div>
                      </div>
                      {/* single creator */}
                    </div>
                    <div
                      className='tab-pane fade show active'
                      id='nav-profile'
                      role='tabpanel'
                      aria-labelledby='nav-profile-tab'
                    >
                      {/* single */}
                      <div className='rn-pd-bd-wrapper mt--20'>
                        <div className='top-seller-inner-one'>
                          {/* <p className="disc">Lorem ipsum dolor, sit amet consectetur adipisicing
                                                    elit. Doloribus debitis nemo deserunt.</p> */}
                          <h6 className='name-title'>Owner</h6>
                          <div className='top-seller-wrapper'>
                            <div className='thumbnail'>
                              <a href='#!'>
                                <img
                                  src={`${process.env.PUBLIC_URL}/images/client/client-1.png`}
                                  alt='Nft_Profile'
                                />
                              </a>
                            </div>
                            <div className='top-seller-content'>
                              <a href='#!'>
                                <h6 className='name'>Brodband</h6>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* single */}
                        <div className='rn-pd-sm-property-wrapper'>
                          <h6 className='pd-property-title'>Property</h6>
                          <div className='property-wrapper'>
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>HYPE TYPE</span>
                              <span className='color-white value'>
                                CALM AF (STILL)
                              </span>
                            </div>
                            {/* single property End */}
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>
                                BASTARDNESS
                              </span>
                              <span className='color-white value'>
                                C00LIO BASTARD
                              </span>
                            </div>
                            {/* single property End */}
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>TYPE</span>
                              <span className='color-white value'>APE</span>
                            </div>
                            {/* single property End */}
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>
                                ASTARDNESS
                              </span>
                              <span className='color-white value'>BASTARD</span>
                            </div>
                            {/* single property End */}
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>
                                BAD HABIT(S)
                              </span>
                              <span className='color-white value'>PIPE</span>
                            </div>
                            {/* single property End */}
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>BID</span>
                              <span className='color-white value'>BPEYti</span>
                            </div>
                            {/* single property End */}
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>
                                ASTRAGENAKAR
                              </span>
                              <span className='color-white value'>BASTARD</span>
                            </div>
                            {/* single property End */}
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>CITY</span>
                              <span className='color-white value'>TOKYO</span>
                            </div>
                            {/* single property End */}
                          </div>
                        </div>
                        {/* single */}
                        {/* single */}
                        <div className='rn-pd-sm-property-wrapper'>
                          <h6 className='pd-property-title'>Catagory</h6>
                          <div className='catagory-wrapper'>
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>ZARY</span>
                              <span className='color-white value'>APP</span>
                            </div>
                            {/* single property End */}
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>SOMALIAN</span>
                              <span className='color-white value'>TRIBUTE</span>
                            </div>
                            {/* single property End */}
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>TUNA</span>
                              <span className='color-white value'>PIPE</span>
                            </div>
                            {/* single property End */}
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>BID</span>
                              <span className='color-white value'>BPEYti</span>
                            </div>
                            {/* single property End */}
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>
                                ASTRAGENAKAR
                              </span>
                              <span className='color-white value'>BASTARD</span>
                            </div>
                            {/* single property End */}
                            {/* single property */}
                            <div className='pd-property-inner'>
                              <span className='color-body type'>CITY</span>
                              <span className='color-white value'>TOKYO</span>
                            </div>
                            {/* single property End */}
                          </div>
                        </div>
                        {/* single */}
                      </div>
                      {/* single */}
                    </div>
                    <div
                      className='tab-pane fade'
                      id='nav-contact'
                      role='tabpanel'
                      aria-labelledby='nav-contact-tab'
                    >
                      {/* single creator */}
                      <div className='top-seller-inner-one mt--20'>
                        <div className='top-seller-wrapper'>
                          <div className='thumbnail'>
                            <a href='#!'>
                              <img
                                src={`${process.env.PUBLIC_URL}/images/client/client-3.png`}
                                alt='Nft_Profile'
                              />
                            </a>
                          </div>
                          <div className='top-seller-content'>
                            <span>
                              0.11wETH by
                              <a href='#!'>Allen Waltker</a>
                            </span>
                            <span className='count-number'>1 hours ago</span>
                          </div>
                        </div>
                      </div>
                      {/* single creator */}
                      {/* single creator */}
                      <div className='top-seller-inner-one mt--20'>
                        <div className='top-seller-wrapper'>
                          <div className='thumbnail'>
                            <a href='#!'>
                              <img
                                src={`${process.env.PUBLIC_URL}/images/client/client-2.png`}
                                alt='Nft_Profile'
                              />
                            </a>
                          </div>
                          <div className='top-seller-content'>
                            <span>
                              0.11wETH by
                              <a href='#!'>Allen Waltker</a>
                            </span>
                            <span className='count-number'>1 hours ago</span>
                          </div>
                        </div>
                      </div>
                      {/* single creator */}
                      {/* single creator */}
                      <div className='top-seller-inner-one mt--20'>
                        <div className='top-seller-wrapper'>
                          <div className='thumbnail'>
                            <a href='#!'>
                              <img
                                src={`${process.env.PUBLIC_URL}/images/client/client-4.png`}
                                alt='Nft_Profile'
                              />
                            </a>
                          </div>
                          <div className='top-seller-content'>
                            <span>
                              0.11wETH by
                              <a href='#!'>Allen Waltker</a>
                            </span>
                            <span className='count-number'>1 hours ago</span>
                          </div>
                        </div>
                      </div>
                      {/* single creator */}
                      {/* single creator */}
                      <div className='top-seller-inner-one mt--20'>
                        <div className='top-seller-wrapper'>
                          <div className='thumbnail'>
                            <a href='#!'>
                              <img
                                src={`${process.env.PUBLIC_URL}/images/client/client-5.png`}
                                alt='Nft_Profile'
                              />
                            </a>
                          </div>
                          <div className='top-seller-content'>
                            <span>
                              0.11wETH by
                              <a href='#!'>Allen Waltker</a>
                            </span>
                            <span className='count-number'>1 hours ago</span>
                          </div>
                        </div>
                      </div>
                      {/* single creator */}
                      {/* single creator */}
                      <div className='top-seller-inner-one mt--20'>
                        <div className='top-seller-wrapper'>
                          <div className='thumbnail'>
                            <a href='#!'>
                              <img
                                src={`${process.env.PUBLIC_URL}/images/client/client-8.png`}
                                alt='Nft_Profile'
                              />
                            </a>
                          </div>
                          <div className='top-seller-content'>
                            <span>
                              0.11wETH by
                              <a href='#!'>Allen Waltker</a>
                            </span>
                            <span className='count-number'>1 hours ago</span>
                          </div>
                        </div>
                      </div>
                      {/* single creator */}
                    </div>
                  </div>
                </div>
                <div className='place-bet-area'>
                  <div className='rn-bet-create'>
                    <div className='bid-list winning-bid'>
                      <h6 className='title'>Winning bit</h6>
                      <div className='top-seller-inner-one'>
                        <div className='top-seller-wrapper'>
                          <div className='thumbnail'>
                            <a href='#!'>
                              <img
                                src={`${process.env.PUBLIC_URL}/images/client/client-7.png`}
                                alt='Nft_Profile'
                              />
                            </a>
                          </div>
                          <div className='top-seller-content'>
                            <span className='heighest-bid'>
                              Heighest bid <a href='#!'>Atif aslam</a>
                            </span>
                            <span className='count-number'>0.115wETH</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='bid-list left-bid'>
                      <h6 className='title'>Auction has ended</h6>
                      <div className='countdown mt--15' data-date='2021-12-09'>
                        <div className='countdown-container days'>
                          <span className='countdown-value'>87</span>
                          <span className='countdown-heading'>D&rsquo;s</span>
                        </div>
                        <div className='countdown-container hours'>
                          <span className='countdown-value'>23</span>
                          <span className='countdown-heading'>H&rsquo;s</span>
                        </div>
                        <div className='countdown-container minutes'>
                          <span className='countdown-value'>38</span>
                          <span className='countdown-heading'>Min&rsquo;s</span>
                        </div>
                        <div className='countdown-container seconds'>
                          <span className='countdown-value'>27</span>
                          <span className='countdown-heading'>Sec</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <a className="btn btn-primary-alta mt--30" href="#!">Place a Bid</a> */}
                  <button
                    type='button'
                    className='btn btn-primary-alta mt--30'
                    data-bs-toggle='modal'
                    data-bs-target='#placebidModal'
                  >
                    Place a Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
