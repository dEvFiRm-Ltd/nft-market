import React, { useState } from 'react';
import { useRouter } from 'react-router-dom';

const EditProfile = () => {
  return (
    <div className='create-area rn-section-gapTop'>
      <div className='container'>
        <div className='row g-5'>
          <div className='col-lg-3 offset-1 ml_md--0 ml_sm--0'>
            {/* file upload area */}
            <div className='upload-area'>
              <div className='upload-formate mb--30'>
                <h6 className='title'>Upload file</h6>
                <p className='formate'>Drag or choose your file to upload</p>
              </div>

              <div className='brows-file-wrapper'>
                {/* actual upload which is hidden */}
                {!fileUrl ? (
                  <>
                    {' '}
                    <input
                      name='file'
                      id='file'
                      type='file'
                      className='inputfile'
                      data-multiple-caption='{count} files selected'
                      multiple
                      onChange={onChange}
                    />
                    <label htmlFor='file' title='No File Choosen'>
                      <i className='feather-upload' />
                      <span className='text-center'>Choose a File</span>
                      <p className='text-center mt--10'>
                        PNG, GIF, WEBP, MP4 or MP3. <br /> Max 1Gb.
                      </p>
                    </label>
                  </>
                ) : (
                  <img
                    src={fileUrl}
                    alt='Picture of the NFT'
                    className='img-fluid'
                    width={350}
                    height={500}
                  />
                )}
                {/* our custom upload button */}
              </div>
            </div>
            {/* end upoad file area */}

            <div className='mt--100 mt_sm--30 mt_md--30 d-none d-lg-block'>
              <h5> Note: </h5>
              <span>
                {' '}
                Service fee : <strong>2.5%</strong>{' '}
              </span>{' '}
              <br />
              <span>
                {' '}
                You will receive : <strong>25.00 ETH $50,000</strong>
              </span>
            </div>
          </div>

          <div className='col-lg-7'>
            <div className='form-wrapper-one'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='input-box pb--20'>
                    <label htmlFor='name' className='form-label'>
                      Product Name
                    </label>
                    <input
                      id='name'
                      placeholder='e. g. `Digital Awesome Game`'
                      onChange={(e) =>
                        updateFormInput({ ...formInput, name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='input-box pb--20'>
                    <label htmlFor='name' className='form-label'>
                      External Link (Optional)
                    </label>
                    <input
                      id='name'
                      placeholder='e. g. `Digital Awesome Game`'
                    />
                  </div>
                </div>

                <div className='col-md-12'>
                  <div className='input-box pb--20'>
                    <label htmlFor='Discription' className='form-label'>
                      Discription
                    </label>
                    <textarea
                      id='Discription'
                      rows='3'
                      placeholder='e. g. “After purchasing the product you can get item...”'
                      onChange={(e) =>
                        updateFormInput({
                          ...formInput,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='input-box pb--20'>
                    <label htmlFor='dollerValue' className='form-label'>
                      Item Price in (ETH)
                    </label>
                    <input
                      id='dollerValue'
                      placeholder='e. g. `20$`'
                      onChange={(e) =>
                        updateFormInput({ ...formInput, price: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='input-box pb--20'>
                    <label htmlFor='Size' className='form-label'>
                      Size
                    </label>
                    <input id='Size' placeholder='e. g. `Size`' />
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='input-box pb--20'>
                    <label htmlFor='Propertie' className='form-label'>
                      Propertie
                    </label>
                    <input id='Propertie' placeholder='e. g. `Propertie`' />
                  </div>
                </div>

                <div className='col-md-12'>
                  <div className='input-box pb--20'>
                    <label htmlFor='Royality' className='form-label'>
                      Royality (in %)
                    </label>
                    <input id='Royality' placeholder='e. g. `2.5, 3; Max 5`' />
                  </div>
                </div>

                <div className='col-md-4 col-sm-4'>
                  <div className='input-box pb--20 rn-check-box'>
                    <input
                      className='rn-check-box-input'
                      type='checkbox'
                      id='putonsale'
                    />
                    <label className='rn-check-box-label' htmlFor='putonsale'>
                      Put on Sale
                    </label>
                  </div>
                </div>

                <div className='col-md-4 col-sm-4'>
                  <div className='input-box pb--20 rn-check-box'>
                    <input
                      className='rn-check-box-input'
                      type='checkbox'
                      id='instantsaleprice'
                    />
                    <label
                      className='rn-check-box-label'
                      htmlFor='instantsaleprice'
                    >
                      Instant Sale Price
                    </label>
                  </div>
                </div>

                <div className='col-md-4 col-sm-4'>
                  <div className='input-box pb--20 rn-check-box'>
                    <input
                      className='rn-check-box-input'
                      type='checkbox'
                      id='unlockpurchased'
                    />
                    <label
                      className='rn-check-box-label'
                      htmlFor='unlockpurchased'
                    >
                      Unlock Purchased
                    </label>
                  </div>
                </div>

                <div className='col-md-12 col-xl-4'>
                  <div className='input-box'>
                    <button
                      type='button'
                      className='btn btn-primary-alta btn-large w-100'
                      data-bs-toggle='modal'
                      data-bs-target='#uploadModal'
                    >
                      Preview
                    </button>
                  </div>
                </div>

                <div className='col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15'>
                  <div className='input-box'>
                    <button
                      type='submit'
                      className='btn btn-primary btn-large w-100'
                      onClick={createItem}
                    >
                      Submit Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt--100 mt_sm--30 mt_md--30 d-block d-lg-none'>
            <h5> Note: </h5>
            <span>
              {' '}
              Service fee : <strong>2.5%</strong>{' '}
            </span>{' '}
            <br />
            <span>
              {' '}
              You will receive : <strong>25.00 ETH $50,000</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
