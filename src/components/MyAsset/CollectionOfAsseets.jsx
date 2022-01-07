import { useEffect, useState } from 'react'
import MyAsset from './MyAsset';
import './style.css';

//for My Asset
import { ethers } from 'ethers'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
    nftmarketaddress, nftaddress
} from '../../Backend/config'

import Market from '../../Backend/artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import NFT from '../../Backend/artifacts/contracts/NFT.sol/NFT.json'

const CollectionOfAsseets = () => {

    const [nfts, setNfts] = useState([])
    const [loadingState, setLoadingState] = useState('not-loaded')

    useEffect(() => {
        loadNFTs()
    }, [])

    async function loadNFTs() {
        // const web3Modal = new Web3Modal({
        //   network: "mainnet",
        //   cacheProvider: true,
        // })
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
        const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
        const data = await marketContract.fetchMyNFTs()

        const items = await Promise.all(data.map(async i => {
            const tokenUri = await tokenContract.tokenURI(i.tokenId)
            const meta = await axios.get(tokenUri)
            let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
            let item = {
                price,
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                image: meta.data.image,
            }
            return item
        }))
        setNfts(items)
        setLoadingState('loaded')
    }
    if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No assets owned</h1>)

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
                            My Asset
                        </h3>
                    </div>
                </div>



                <div className='row g-5 mt_dec--30'>

                    {
                        nfts.map((nft, index) =>
                            <div key={index} className='col-5 col-lg-4 col-md-6 col-sm-6 col-12' data-sal='slide-up' data-sal-delay='150' data-sal-duration='800'>
                                <MyAsset nft ={nft}/>
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
        //    <div> <h1>Open this select menu<h1/> <div/> 
    );
};

export default CollectionOfAsseets;
