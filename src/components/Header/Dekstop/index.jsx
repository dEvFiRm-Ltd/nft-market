import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import './main';
import './style.css';

const HeaderDekstop = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('active-dark-mode');
      document.body.classList.remove('active-light-mode');
    } else {
      document.body.classList.add('active-light-mode');
      document.body.classList.remove('active-dark-mode');
    }
  }, [theme]);
  return (
    <header className='rn-header haeder-default black-logo-version header--fixed header--sticky'>
      <div className='container'>
        <div className='header-inner'>
          <div className='header-left'>
            <div className='logo-thumbnail logo-custom-css'>
              <Link className='logo-light' to='/'>
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo/logo-white.png`}
                  alt='nft-logo'
                />{' '}
              </Link>
              <Link className='logo-dark' to='/'>
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
                  alt='nft-logo'
                />
              </Link>
            </div>
            <div className='mainmenu-wrapper'>
              <nav id='sideNav' className='mainmenu-nav d-none d-xl-block'>
                {/* Start Mainmanu Nav */}
                <ul className='mainmenu'>
                  <li>
                    <Link to='about'>About</Link>
                  </li>
                  <li className='has-droupdown'>
                    <a className='nav-link its_new' href='#!'>
                      Explore
                    </a>
                    <ul className='submenu'>
                      <li>
                        <Link to='category'>Categories</Link>
                      </li>
                      <li>
                        <Link to='collection'>Collections</Link>
                      </li>
                      <li>
                        <a href='explore-four.html'>
                          Live Bidding
                          <i className='feather-fast-forward' />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to='/'>Blog</Link>
                  </li>
                  <li>
                    <Link to='/'>Contact</Link>
                  </li>
                </ul>
                {/* End Mainmanu Nav */}
              </nav>
            </div>
          </div>
          <div className='header-right'>
            <div className='setting-option d-none d-lg-block'>
              <form className='search-form-wrapper' action='#'>
                <input
                  type='search'
                  placeholder='Search Here'
                  aria-label='Search'
                />
                <div className='search-icon'>
                  <button type='button'>
                    <i className='feather-search' />
                  </button>
                </div>
              </form>
            </div>
            <div className='setting-option rn-icon-list d-block d-lg-none'>
              <div className='icon-box search-mobile-icon'>
                <button type='button'>
                  <i className='feather-search' />
                </button>
              </div>
            </div>

            <div className='setting-option rn-icon-list notification-badge'>
              <div className='icon-box'>
                <a href='activity.html'>
                  <i className='feather-bell' />
                  <span className='badge'>6</span>
                </a>
              </div>
            </div>
            {isAuthenticated ? (
              <>
                <div className='setting-option header-btn'>
                  <div className='icon-box'>
                    <Link
                      className='btn btn-primary-alta btn-small'
                      to='upload'
                    >
                      Create
                    </Link>
                  </div>
                </div>
                <div className='setting-option rn-icon-list user-account'>
                  <div className='icon-box'>
                    <a href='author.html'>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icons/boy-avater.png`}
                        alt='Images'
                      />
                    </a>
                    <div className='rn-dropdown'>
                      <div className='rn-inner-top'>
                        <h4 className='title'>
                          <a href='product-details.html'>Christopher William</a>
                        </h4>
                        <span>
                          <a href='#!'>Set Display Name</a>
                        </span>
                      </div>
                      <div className='rn-product-inner'>
                        <ul className='product-list'>
                          <li className='single-product-list'>
                            <div className='thumbnail'>
                              <a href='product-details.html'>
                                <img
                                  src={`${process.env.PUBLIC_URL}/images/portfolio/portfolio-07.jpg`}
                                  alt='Nft Product Images'
                                />
                              </a>
                            </div>
                            <div className='content'>
                              <h6 className='title'>
                                <a href='product-details.html'>Balance</a>
                              </h6>
                              <span className='price'>25 ETH</span>
                            </div>
                            <div className='button' />
                          </li>
                          <li className='single-product-list'>
                            <div className='thumbnail'>
                              <a href='product-details.html'>
                                <img
                                  src={`${process.env.PUBLIC_URL}/images/portfolio/portfolio-01.jpg`}
                                  alt='Nft Product Images'
                                />
                              </a>
                            </div>
                            <div className='content'>
                              <h6 className='title'>
                                <a href='product-details.html'>Balance</a>
                              </h6>
                              <span className='price'>25 ETH</span>
                            </div>
                            <div className='button' />
                          </li>
                        </ul>
                      </div>
                      <div className='add-fund-button mt--20 pb--20'>
                        <a className='btn btn-primary-alta w-100' href='#!'>
                          Add Your More Funds
                        </a>
                      </div>
                      <ul className='list-inner'>
                        <li>
                          <Link to='profile'>My Profile</Link>
                        </li>
                        <li>
                          <a href='author.html'>Edit Profile</a>
                        </li>
                        <li>
                          <Link to='wallet'>Wallet</Link>
                        </li>
                        <li>
                          <Link to='details'>Single Product</Link>
                        </li>
                        <li>
                          <button type='button' onClick={() => logout()}>
                            Sign Out
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className='setting-option header-btn'>
                <div className='icon-box'>
                  <button
                    type='button'
                    onClick={() => authenticate()}
                    className='btn btn-primary-alta btn-small'
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            )}
            <div className='setting-option mobile-menu-bar d-block d-xl-none'>
              <div className='hamberger'>
                <button type='button' className='hamberger-button'>
                  <i className='feather-menu' />
                </button>
              </div>
            </div>
            <div id='my_switcher' className='setting-option my_switcher'>
              <ul>
                <li>
                  {theme === 'dark' ? (
                    <button
                      type='button'
                      onClick={() => setTheme('light')}
                      className='setColor light'
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icons/vector.svg`}
                        alt='Vector Images'
                      />
                    </button>
                  ) : (
                    <button
                      type='button'
                      onClick={() => setTheme('dark')}
                      className='setColor dark'
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icons/sun-01.svg`}
                        alt='Sun images'
                      />
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDekstop;
