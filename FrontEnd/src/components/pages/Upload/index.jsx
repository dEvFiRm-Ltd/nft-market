import React from 'react';
import { Link } from 'react-router-dom';

const Upload = () => {
    return (
        <div className="rn-upload-variant-area varient rn-section-gap">
            <div className="container">
                <div className="row">
                    <div className="upload-variant-title-wrapper">
                        <h3 className="title text-center">Upload Variants</h3>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                            inventore, officiis. Alias aspernatur laboriosam ratione! Doloremque
                            ipsa nesciunt sed!
                        </p>
                    </div>
                </div>
                <div className="row g-5 mt--40">
                    <div className="offset-lg-3 col-lg-3 col-md-6 col-12">
                        <div className="upload-variant-wrapper">
                            <div className="variant-preview">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/upload-variants/single.jpg`}
                                    alt="nuron-single"
                                />
                            </div>
                            <Link to="/create" className="btn btn-primary mt--20">
                                Create Single
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="upload-variant-wrapper">
                            <div className="variant-preview">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/upload-variants/multiple.jpg`}
                                    alt="nuron-single"
                                />
                            </div>
                            <Link to="/create" className="btn btn-primary mt--20">
                                Create Multiple
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upload;
