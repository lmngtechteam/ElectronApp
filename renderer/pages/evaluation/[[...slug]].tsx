import {connect} from 'react-redux'
import React from "react";
import "react-alice-carousel/lib/alice-carousel.css"
import OurCustomers from "../../app/components/consultation/target/OurCustomers";
import InformationComponent, {IInformationProps} from "../../app/components/pages/consultation/informations";
import ContactUs from "../../app/components/consultation/ContactUs";
import EvaluationTypeBox from "../../app/components/evaluation/TypeBox";
import EvaluationCarousel from "../../app/components/evaluation/EvaluationCarousel";
import evaluationTypes from '../../app/data/evaluation-types.json'
import Booking from "../../app/components/evaluation/Booking";
import {setEvaluationBooking} from "../../store/actions/evaluationActions";
import {IEvaluationBooking, SUBMIT_REQUEST_DATA} from "../../app/api/Evaluation";
import faqQuestionsData from '../../app/data/faq-evaluation.json'
import FAQ from "../../app/components/consultation/FAQ";
import Helper from "../../app/utils/Helper";
import dynamic from "next/dynamic";

interface ITypeData {
    name: string,
    description: string,
    image: string,
    items?: IInformationProps[]
}

interface IPageProps {
    typeData?: ITypeData,
    booking?: IEvaluationBooking,
    setEvaluationBooking?: (booking: IEvaluationBooking) => void,
}

const ConsultationPage = (props: IPageProps) => {
    const typeData = props.typeData;
    const name = typeData ? typeData.name : 'ارزش گذاری';
    const description = typeData ? typeData.description : 'ارزش گذاری یا Valuation، یک فرآیند حقوقی-اقتصادی و یک عمل تخصصی و کلیدی در راستای ارزیابی ارزش شرکت‌ها، استارتاپ‌ها، برندها، انواع دارایی‌ها و همچنین کسب و کارهای مختلف است. با توجه به اهمیت ویژه این فرآیند در وضعیت مالی و حقوقی یک بیزینس و کسب‌وکار، انجام این ارزیابی توسط متخصصان ارزش گذاری، امری حائز اهمیت فراوان است. لامینگو این افتخار را دارد، که با داشتن تیم قدرتمند و متخصص در زمینه انواع مختلف ارزش‌گذاری‌ها، این خدمت را در چارچوب حقوقی و ضمن رعایت کلیه موارد اقتصادی موجود در این زمینه به کاربران خود ارائه نماید. شما می‌توانید به سادگی و با انتخاب هر یک از خدمات ارزش‌گذاری قابل ارائه در مجموعه حقوقی لامینگو با خیالی آسوده یک ارزیابی کاملاً حرفه‌ای و استاندارد را تجربه کنید.';
    const image = typeData ? typeData.image : '/images/evaluation-page.png';
    let dataItems = typeData?.items;
    if (!Array.isArray(dataItems)) {
        dataItems = [];
    }
    return (
        <>
            <div className="row align-items-center align-content-center"
                 style={{position: 'relative', backgroundColor: '#F8F8F8'}}>
                <div className="col-md-8">
                    <div className="row justify-content-center ">


                        <div className="col-md-6">
                            <h2>{name}</h2>
                            <br/>
                            <p>{description}</p>
                            <br/>
                            <div onClick={() => {
                                props.setEvaluationBooking({
                                    ...props.booking,
                                    step: SUBMIT_REQUEST_DATA
                                })
                            }} className="button merlot">
                                ثبت درخواست
                            </div>
                            <Booking/>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 pl-0">
                    <img src={image} className="img-fluid" alt=""/>
                    <div className="bg-circles top right"/>
                    <div className="bg-circles bottom left"/>
                </div>
            </div>
            <div className="container">
                <br/>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <OurCustomers/>
                    </div>
                </div>
                {!typeData ? (
                    <>
                        <br/>
                        <br/>
                        <div className="row">
                            {Object.keys(evaluationTypes).map((typeKey, key) => {
                                return (
                                    <div key={key} className="col-md-3 col-sm-6">
                                        <EvaluationTypeBox link={Helper.cleanAddress({ value: `/evaluation/${typeKey}` })}
                                                           name={evaluationTypes[typeKey].name}
                                                           description={evaluationTypes[typeKey].summary}/>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                ) : ''}
                <br/>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <h4 className="section-title-rounded-bg">
                            {name}
                        </h4>
                        <br/>
                        <div>
                            {dataItems.map((item,key)=>{
                               return  <React.Fragment key={key}>
                                    <InformationComponent title={item.title}
                                                          content={item.content}
                                                          />
                                    <br/>
                                </React.Fragment>
                            })}
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <EvaluationCarousel/>
                <br/>
                <br/>
                <FAQ questions={faqQuestionsData}/>
            </div>
            <div className="row">
                <div className="col-12">
                    <ContactUs type={"revers"}/>
                </div>

            </div>
        </>
    )
};


ConsultationPage.LayoutFluid = true;

export async function getServerSideProps(context) {
    const slugParam = context.params.hasOwnProperty('slug') ? context.params.slug : [];
    let props: IPageProps = {};
    if (slugParam.length && evaluationTypes.hasOwnProperty(slugParam[0])) {
        //Load type data from json data file
        props.typeData = evaluationTypes[slugParam[0]];
        const data = await import('../../app/data/evaluation/' + slugParam[0]);
        props.typeData.description = data.description;
        props.typeData.items = data.items;

    }
    return {
        props: props
    }
}

const mapStateToProps = state => ({
    booking: state.evaluation.booking,
});
const mapDispatchToProps = dispatch => {
    return {
        setEvaluationBooking: setEvaluationBooking,
    }
};
export default connect(mapStateToProps, {setEvaluationBooking})(ConsultationPage)
