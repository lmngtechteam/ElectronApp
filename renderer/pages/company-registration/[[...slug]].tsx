import React from "react";
import "react-alice-carousel/lib/alice-carousel.css"
import InformationComponent, {IInformationProps} from "../../app/components/pages/consultation/informations";
import ContactUs from "../../app/components/consultation/ContactUs";
import companyTypes from '../../app/data/company-types.json'
import CompanyTypeBox from "../../app/components/company-registration/CompanyType";
import faqQuestionsData from '../../app/data/faq-company-registration.json'
import FAQ from "../../app/components/consultation/FAQ";

interface ITypeData {
    name: string,
    description: string,
    image: string,
    items?: IInformationProps[]
}

interface IPageProps {
    typeData?: ITypeData
}


class CompanyRegistration extends React.Component<IPageProps>{
    constructor(props: IPageProps) {
        super(props)
    }
    render() {
        const typeData = this.props.typeData;
        const name = typeData ? typeData.name : 'خدمات ثبت شرکت';
        const description = typeData ? typeData.description : 'ثبت شرکت‌ها همواره یکی از مهم‌ترین و در عین حال پرچالش‌ترین مسیرهای حقوقی در طول حیات یک کسب‌وکار و همکاری میان اشخاص است. با توجه به وجود انواع مختلف شرکت‌ها و تفاوت‌های ماهوی هر یک از آن‌ها، نکات و موارد حقوقی و قانونی این شرکت‌ها نیز از یکدیگر متمایز هستند. مجموعه حقوقی لامینگو این افتخار را دارد که با داشتن تیم مجرب و متخصص حقوقی خود، انواع خدمات مرتبط با ثبت شرکت‌ها، نظیر مشاوره حقوقی ثبت شرکت، مشاوره حقوقی تغییرات شرکت، خدمات حقوقی و قانونی موردنیاز قبل و بعد از ثبت شرکت را به کاربران خود ارائه نماید. شما می‌توانید در صورت نیاز به هر یک از انواع خدمات حقوقی مرتبط با ثبت شرکت‌ها به آسانی و در سریع‌ترین زمان ممکن راهنمایی‌های قانونی لازم را از مشاوران حقوقی ما در لامینگو دریافت نمایید.';
        const image = typeData ? typeData.image : '/images/company-registration.png';
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
                                }} className="button merlot">
                                    ثبت درخواست
                                </div>
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
                    {!typeData ? (
                        <>
                            <br/>
                            <br/>
                            <div className="row">
                                {Object.keys(companyTypes).map((typeKey, key) => {
                                    return (
                                        <div key={key} className="col-md-3 col-sm-6">
                                            <CompanyTypeBox link={`/company-registration/${typeKey}`}
                                                               name={companyTypes[typeKey].name}
                                                               description={companyTypes[typeKey].summary}/>
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
                            <h3 className="section-title-rounded-bg">
                                {name}
                            </h3>
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
                    <FAQ questions={faqQuestionsData}/>
                    <div className="row">
                        <div className="col-12">
                            <ContactUs />
                        </div>

                    </div>
                </div>
                </>
        );
    }

}
export async function getServerSideProps(context) {
    const slugParam = context.params.hasOwnProperty('slug') ? context.params.slug : [];
    let props: IPageProps = {};
    if (slugParam.length && companyTypes.hasOwnProperty(slugParam[0])) {
        //Load type data from json data file
        props.typeData = companyTypes[slugParam[0]];
        const data = await import('../../app/data/company-registration/' + slugParam[0]);
        props.typeData.description = data.description;
        props.typeData.items = data.items;
    }
    return {
        props: props
    }
}

// @ts-ignore
CompanyRegistration.LayoutFluid = true;
export default CompanyRegistration