import React from 'react';

function Collection() {
  return <div className="rn-collection-area rn-section-gapTop">
        <div className="container">
            <div className="row g-5">
                {/* start single collention */}
                <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                    <a href="product-details.html" className="rn-collection-inner-one">
                        <div className="collection-wrapper">
                            <div className="collection-big-thumbnail">
                                <img src="assets/images/collection/collection-lg-01.jpg" alt="Nft_Profile"/>
                            </div>
                            <div className="collenction-small-thumbnail">
                                <img src="assets/images/collection/collection-sm-01.jpg" alt="Nft_Profile"/>
                                <img src="assets/images/collection/collection-sm-02.jpg" alt="Nft_Profile"/>
                                <img src="assets/images/collection/collection-sm-03.jpg" alt="Nft_Profile"/>
                            </div>
                            <div className="collection-profile">
                                <img src="assets/images/client/client-15.png" alt="Nft_Profile"/>
                            </div>
                            <div className="collection-deg">
                                <h6 className="title">Cubic Trad</h6>
                                <span className="items">27 Items</span>
                            </div>
                        </div>
                    </a>
                </div>
                {/* End single collention */}
            </div>
            <div className="row">
                <div className="col-lg-12" data-sal="slide-up" data-sal-delay="550" data-sal-duration="800">
                    <nav className="pagination-wrapper" aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link active" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>;
}

export default Collection;
