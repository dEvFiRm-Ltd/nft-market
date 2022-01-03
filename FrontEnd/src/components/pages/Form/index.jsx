import React, { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'react-router-dom'
import Web3Modal from 'web3modal'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

import {
    nftaddress, nftmarketaddress
} from '../../../Backend/config';
import NFT from '../../../Backend/artifacts/contracts/NFT.sol/NFT.json';
import Market from '../../../Backend/artifacts/contracts/NFTMarket.sol/NFTMarket.json';

const CreateNft = () => {
    const [fileUrl, setFileUrl] = useState(null)
    const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
    // const router = useRouter();
    async function onChange(e) {
        const file = e.target.files[0]
        try { //try uploading the file
            const added = await client.add(
                file,
                {
                    progress: (prog) => console.log(`received: ${prog}`)
                }
            )
            //file saved in the url path below
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setFileUrl(url)
        } catch (e) {
            console.log('Error uploading file: ', e)
        }
    }
    return (
        <div className="create-area rn-section-gapTop">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
                        {/* file upload area */}
                        <div className="upload-area">
                            <div className="upload-formate mb--30">
                                <h6 className="title">Upload file</h6>
                                <p className="formate">Drag or choose your file to upload</p>
                            </div>

                            <div className="brows-file-wrapper">
                                {/* actual upload which is hidden */}
                                {!fileUrl ?
                                    <input
                                        name="file"
                                        id="file"
                                        type="file"
                                        className="inputfile"
                                        data-multiple-caption="{count} files selected"
                                        multiple
                                        onChange={onChange}
                                    />
                                    :
                                    <img
                                        src={fileUrl}
                                        alt="Picture of the NFT"
                                        className="img-fluid"
                                        width={350}
                                        height={500}
                                    />

                                }
                                {/* our custom upload button */}
                                <label htmlFor="file" title="No File Choosen">
                                    <i className="feather-upload" />
                                    <span className="text-center">Choose a File</span>
                                    <p className="text-center mt--10">
                                        PNG, GIF, WEBP, MP4 or MP3. <br /> Max 1Gb.
                                    </p>
                                </label>
                            </div>
                        </div>
                        {/* end upoad file area */}

                        <div className="mt--100 mt_sm--30 mt_md--30 d-none d-lg-block">
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

                    <div className="col-lg-7">
                        <div className="form-wrapper-one">
                            <form className="row" action="#">
                                <div className="col-md-12">
                                    <div className="input-box pb--20">
                                        <label htmlFor="name" className="form-label">
                                            Product Name
                                        </label>
                                        <input
                                            id="name"
                                            placeholder="e. g. `Digital Awesome Game`"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="input-box pb--20">
                                        <label htmlFor="Discription" className="form-label">
                                            Discription
                                        </label>
                                        <textarea
                                            id="Discription"
                                            rows="3"
                                            placeholder="e. g. “After purchasing the product you can get item...”"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="input-box pb--20">
                                        <label htmlFor="dollerValue" className="form-label">
                                            Item Price in $
                                        </label>
                                        <input id="dollerValue" placeholder="e. g. `20$`" />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="input-box pb--20">
                                        <label htmlFor="Size" className="form-label">
                                            Size
                                        </label>
                                        <input id="Size" placeholder="e. g. `Size`" />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="input-box pb--20">
                                        <label htmlFor="Propertie" className="form-label">
                                            Propertie
                                        </label>
                                        <input id="Propertie" placeholder="e. g. `Propertie`" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="input-box pb--20">
                                        <label htmlFor="Royality" className="form-label">
                                            Royality
                                        </label>
                                        <input id="Royality" placeholder="e. g. `20%`" />
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-4">
                                    <div className="input-box pb--20 rn-check-box">
                                        <input
                                            className="rn-check-box-input"
                                            type="checkbox"
                                            id="putonsale"
                                        />
                                        <label className="rn-check-box-label" htmlFor="putonsale">
                                            Put on Sale
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-4">
                                    <div className="input-box pb--20 rn-check-box">
                                        <input
                                            className="rn-check-box-input"
                                            type="checkbox"
                                            id="instantsaleprice"
                                        />
                                        <label
                                            className="rn-check-box-label"
                                            htmlFor="instantsaleprice"
                                        >
                                            Instant Sale Price
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-4">
                                    <div className="input-box pb--20 rn-check-box">
                                        <input
                                            className="rn-check-box-input"
                                            type="checkbox"
                                            id="unlockpurchased"
                                        />
                                        <label
                                            className="rn-check-box-label"
                                            htmlFor="unlockpurchased"
                                        >
                                            Unlock Purchased
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-12 col-xl-4">
                                    <div className="input-box">
                                        <button
                                            type="button"
                                            className="btn btn-primary-alta btn-large w-100"
                                            data-bs-toggle="modal"
                                            data-bs-target="#uploadModal"
                                        >
                                            Preview
                                        </button>
                                    </div>
                                </div>

                                <div className="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
                                    <div className="input-box">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-large w-100"
                                        >
                                            Submit Item
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
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

export default CreateNft;
