import React, {Component} from 'react';
import Style from 'app/styles/homePage'
import OurCustomers from "../app/components/consultation/target/OurCustomers";
import BGColoredHeading from "../app/components/common/BGColoredHeading/BGColoredHeading";
import TabSwitcher from "../app/components/common/TabSwitcher/TabSwitcher";
import PersonalServices from "../app/components/home/PersonalServices/PersonalServices";
import {connect} from 'react-redux'
import {wrapper} from "../store/store";
import {setCompanyServices, setPersonalServices} from "../store/actions/mainActions";
import CompanyServices from "../app/components/home/CompanyServices/CompanyServices";
import ContactUs from "../app/components/consultation/ContactUs";
import FAQ from "../app/components/consultation/FAQ";
import WhyUsingUs from "../app/components/home/WhyUsingUs/WhyUsingUs";
import StartingGuide from "../app/components/home/StartingGuide/StartingGuide";
import CustomerComments from "../app/components/home/CustomersComments/CustomerComments";
import {getCustomerComments, ICustomerComment} from "../app/api/Main";
import Stats from "../app/components/home/Stats/Stats";
import {setFeedbacks} from "../store/actions/consultationActions";

interface IIndexProps {
    customerComments: ICustomerComment[]
}

class Index extends Component<IIndexProps> {
    static LayoutFluid: boolean;
    render() {
        return (
            <>
                <Style>
                        <div className="row"
                             id="home-slogan-container"
                             style={{position: 'relative'}}>
                            <div className="col-lg-7 d-flex flex-column justify-content-center"
                                 id="home-right-container">
                                <div className="row flex-row ">
                                    <div className="col-lg-3">
                                    </div>
                                    <div className="col-lg-9 ">
                                        <h3 className="title">با خیالی راحت کارهای حقوقی خودت را به ما بسپار</h3>
                                        <p className="desc">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                            طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون
                                        </p>
                                        <div className="button merlot mb-2">خدمات لامینگو</div>
                                        <img src="/images/home/laptop.webp" className="img-fluid d-block d-lg-none" alt=""/>

                                    </div>

                                </div>

                            </div>
                            <div className="col-lg-5 pl-0" id="home-left-container">
                                <div className="square d-none d-lg-block"/>
                                <div className="circle d-none d-lg-block"/>
                                <div className="bg-circles top dots right  d-none d-lg-block"/>
                                <img src="/images/home/laptop.webp" className="img-fluid d-none d-lg-block" alt=""/>
                            </div>
                        </div>
                        <br/>
                        <div className="container ">
                            <div className="row justify-content-center mt-3">
                                <div className="col-12">
                                    <OurCustomers title={""}/>
                                </div>
                            </div>
                            <div className="clearfix"/>
                            <div className="row mt-0 mt-md-5 mb-md-5 pb-md-5 mb-3 pb-3 pt-md-5 pt-4">
                                <div className="col-12 text-center">
                                    <BGColoredHeading BGPosition={"center"} title={"خدمات لامینگو"}/>
                                    <TabSwitcher
                                        activeKey="PERSONAL"
                                        data={{
                                            "PERSONAL": {
                                                name: "شخصی",
                                                component: (<PersonalServices/>)
                                            },
                                            "COMPANY": {
                                                name: "شرکتی",
                                                component: (<CompanyServices/>)
                                            },
                                        }}/>
                                </div>
                            </div>
                            <WhyUsingUs/>
                            <StartingGuide/>
                            <CustomerComments comments={this.props.customerComments}/>
                            <Stats/>
                            <div className="row">
                                <div className="col-12">
                                    <FAQ/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="row mt-5 ">
                            <div className="col-12">
                                <ContactUs type={"revers"}/>
                            </div>

                        </div>
                </Style>
            </>
        );
    }
}


export const getServerSideProps = wrapper.getStaticProps(
    async (context) => {
        await context.store.dispatch(setPersonalServices())
        await context.store.dispatch(setCompanyServices());
        const customerComments = await getCustomerComments();
        return {
            props: {
                customerComments: customerComments
            }
        }
    }
);

const mapStateToProps = state => ({});
Index.LayoutFluid = true;

export default connect(mapStateToProps, {})(Index)