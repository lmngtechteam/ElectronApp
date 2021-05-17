import {connect} from 'react-redux'
import {
    setCategories,
    setChildCategories, setCounsellors,
    setFeedbacks,
} from "store/actions/consultationActions";
import {wrapper} from 'store/store'
import {Category, Counsellor, FeedBack} from "../../app/api/Consultation";
import React, {useEffect} from "react";
import Booking from "../../app/components/consultation/direct/Booking";
import "react-alice-carousel/lib/alice-carousel.css"
import OurCustomers from "../../app/components/consultation/target/OurCustomers";
import Services from "../../app/components/consultation/Services";
import ContactUs from "../../app/components/consultation/ContactUs";
import BestCounsellorListCarousel from "../../app/components/consultation/BestCounsellorListCarousel";
import ContractInfo from "../../app/components/consultation/ContractInfo";
import FAQ from "../../app/components/consultation/FAQ";
import ConsultationCategories from "../../app/components/consultation/ConsultationCategories";
import ConsultationSubCategories from "../../app/components/consultation/ConsultationSubCategories";
import ConsultationCategory from "../../app/components/consultation/ConsultationCategory";
import FixedPriceSection from "../../app/components/consultation/FixedPriceSection";
import TestemonialSlider from "../../app/components/consultation/TestemonialSlider";
import Style from '../../app/styles/consultationPage';
import TargetDescription from "../../app/components/consultation/target/TargetDescription";
import faqQuestionsData from '../../app/data/faq-consulation.json'

interface IPageProps {
    list: Category[],
    feedBacks: FeedBack[],
    counsellors: Counsellor[],
    showType: string,
    selectedServiceType?: string,
    isMinimal: boolean
}

const ConsultationPage = ({list, showType, counsellors, feedBacks, isMinimal}: IPageProps) => {
    return (
        <Style>
            {
                showType === 'LANDING' ? (
                    <TargetDescription/>
                ) : (
                    <div className="row" style={{backgroundColor: '#FBFBFF'}} id="categories-section">
                        <div className="col-12">

                            {
                                showType == 'ALL-CATEGORIES' ? (
                                    <ConsultationCategories items={list}/>
                                ) : ''
                            }

                            {
                                showType == 'CATEGORY' ? (
                                    <ConsultationSubCategories items={list}/>
                                ) : ''
                            }
                            {
                                showType == 'SUB-CATEGORY' ? (
                                    <ConsultationCategory/>
                                ) : ''
                            }

                        </div>
                    </div>
                )
            }

            <div className="container">
                {!isMinimal ? (
                    <div className="row mt-md-5 pt-md-5 ">

                        <div className="col-12">
                            <OurCustomers/>
                        </div>
                    </div>
                ) : ''}

                {showType == 'LANDING' ? (
                    <div className='pt-md-5 mt-md-5 pb-md-5 mb-md-5 mt-4'>
                        <Services showType={showType} isMinimal={isMinimal} isInLanding/>
                    </div>
                ) : ''}
                {!isMinimal ? (
                    <>
                        <br/>
                        <div className="row pt-5 mt-5 mb-5 pb-5">

                            <div className="col-12">
                                <div style={{height: '550px'}}>
                                    <TestemonialSlider items={feedBacks} active={0}/>
                                </div>
                            </div>
                        </div>
                    </>
                ) : ''}

                {showType != 'LANDING' ? (
                    <div className="row mt-4 pt-4 mb-4 pb-4">
                        <div className="col-12">
                            <Services showType={showType} isMinimal={isMinimal}/>
                        </div>
                    </div>
                ) : ''}

                {/*<div className="col-12 mt-5 pt-5 mb-5 pb-5">*/}
                {/*    <InformationComponent title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"*/}
                {/*                          content={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."}/>*/}
                {/*    <InformationComponent title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"*/}
                {/*                          content={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."}/>*/}
                {/*    <InformationComponent title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"*/}
                {/*                          content={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."}/>*/}
                {/*    <InformationComponent title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"*/}
                {/*                          content={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."}/>*/}
                {/*</div>*/}

            </div>
            {!isMinimal ? (
                <>
                    <div className="row  mt-5  mb-4 pt-3 ">
                        <div className="col-12">
                            <ContactUs/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mb-5 pb-4">
                            <div className="col-12">
                                <BestCounsellorListCarousel items={counsellors}/>
                            </div>
                        </div>
                        <ContractInfo/>
                        <div className="row mt-4 mb-4">
                            <div className="col-12">
                                <FAQ questions={faqQuestionsData}/>
                            </div>
                        </div>
                    </div>

                </>
            ) : ''}
            {
                showType == 'SUB-CATEGORY' ? (
                    <FixedPriceSection showType={showType}/>
                ) : ''
            }
            <Booking/>
        </Style>
    )
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (context) => {
        let props = {
            showType: 'LANDING',
        };
        const slugParams = context.params.hasOwnProperty('slug') ? context.params.slug : [];
        if (slugParams.length == 0) {
            await context.store.dispatch(setFeedbacks());
            //When page opened with /
            props.showType = 'LANDING';
        } else if (slugParams.length == 1) {
            //When page opened with /category
            if (slugParams[0] === 'categories') {
                props.showType = 'ALL-CATEGORIES';
                await context.store.dispatch(setCategories())
            } else {

                props.showType = 'CATEGORY';
                await context.store.dispatch(setChildCategories(slugParams[0]))
            }
        } else if (slugParams.length == 2) {
            //When page opened with /category/subcategory
            props.showType = 'SUB-CATEGORY';
            await context.store.dispatch(setChildCategories(slugParams[1]))
        }

        return {
            props: props
        }
    }
);

const mapStateToProps = (state, selfProps) => {
    return ({
        isMinimal: state.main.isMinimal,
        list: state.consultation.categories,
        feedBacks: state.consultation.feedBacks,
        counsellors: state.consultation.counsellors,
        selectedServiceType: state.consultation.selectedServiceType,
    })
};

ConsultationPage.LayoutFluid = true;
export default connect(mapStateToProps, {setCategories, setFeedbacks})(ConsultationPage)
