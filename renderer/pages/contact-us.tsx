import React from 'react'
import DataIcon from "../app/components/contact-us/DataIcon";
import Form from "../app/components/contact-us/Form";
import Style from "../app/styles/contactUsPage";

class ContactUs extends React.Component {
    static LayoutFluid: boolean;
    render() {
        return (
            <Style>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            <br/>
                            <br/>
                            <h3>تماس با ما</h3>
                            <br/>
                            <p>متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                                و متون بلکه روزنامه </p>
                            <br/>
                            <div className="row">
                                <div className="col-md-4">
                                    <DataIcon name={"ایمیل"} icon="fa fa-envelope">
                                        <a href="mailto:support@lawmingo.com">support@lawmingo.com</a>
                                    </DataIcon>
                                </div>
                                <div className="col-md-4">
                                    <DataIcon name={"تلفن"} icon="fa fa-headphones">
                                        <a href="tel:021-86085830">021-86085830</a>
                                    </DataIcon>
                                </div>
                                <div className="col-md-4">
                                    <DataIcon name={"آدرس"} icon="fa fa-map-marker">
                                        <p>تهران، میدان ونک، خیابان حقانی، بین گاندی و نلسون ماندلا پلاک 40</p>
                                    </DataIcon>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <br/>

                        </div>
                    </div>
                </div>
                <div style={{position: 'relative',paddingBottom:'200px'}}>
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <Form/>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div style={{position: 'absolute', bottom: '0', zIndex: -1}}>
                            <img src="/images/map.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </Style>
        );
    }
}

ContactUs.LayoutFluid = true;
export default ContactUs;