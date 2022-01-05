import React,{ useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Single from '../Single-Nft';
import './main';
import './style.css';


// for NFT
import {ethers} from 'ethers';
import axios from 'axios';
import Web3Modal from "web3modal"
import { nftaddress, nftmarketaddress } from '../../Backend/config';
import NFT from '../../Backend/artifacts/contracts/NFT.sol/NFT.json';
import Market from '../../Backend/artifacts/contracts/NFTMarket.sol/NFTMarket.json';

const Product = () => {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState('not-loaded');

  useEffect(()=>{
    loadNFTs();

  }, []);

  async function loadNFTs(){
    const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/7f8851cb0d8d4559b402a52ea3370cd7");
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider);

    //return an array of unsold market items
    const data = await marketContract.fetchMarketItems();

    const items = await Promise.all(data.map(async i => {
       const tokenUri = await tokenContract.tokenURI(i.tokenId);
       const meta = await axios.get(tokenUri);
       let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
       let item = {
         price,
         tokenId: i.tokenId.toNumber(),
         seller: i.seller,
         owner: i.owner,
         image: meta.data.image,
         name: meta.data.name,
         description: meta.data.description,
       }
       return item;
    }));

    setNfts(items);
    setLoadingState('loaded')
  }

  async function buyNFT(nft){
    console.log(nft.price.toString());
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    //sign the transaction
    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

    //set the price
    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
    console.log(price);

    //make the sale
    const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, {
      value: price
    });
    await transaction.wait();
    console.log('Transaction complete');

    loadNFTs()
  }
  
  // console.log(nfts);

  if(loadingState === 'loaded' && !nfts.length) return (
    <h1 className="px-20 py-10 text-3xl">No items in market place</h1>
  )
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
          
            {nfts.map((nft, index) => (
              <div key={index}
              className='col-5 col-lg-4 col-md-6 col-sm-6 col-12'
              data-sal='slide-up'
              data-sal-delay='150'
              data-sal-duration='800'
            >
              <Single nft ={nft} buyNFT={buyNFT}/>
          </div>
            ))}
            {/*  <Single  /> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
