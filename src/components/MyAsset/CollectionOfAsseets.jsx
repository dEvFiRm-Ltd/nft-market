import React from 'react';
// import SingleCollection from '../Single-Collection';

// import './main';
import MyAsset from './MyAsset';
import './style.css';

const CollectionOfAsseets = () => {
    const arr =[1,2,3,45,];
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

                

                <div className='row g-5 mt_dec--30'>

                        {
                            arr.map((item,index)=>
                    <div className='col-5 col-lg-4 col-md-6 col-sm-6 col-12' data-sal='slide-up' data-sal-delay='150' data-sal-duration='800'>
                               <MyAsset />
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
