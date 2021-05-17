import React from 'react';
import Style from 'app/styles/contractDetail';
import DotBox from 'app/components/dotBox';
import faqQuestionsData from '../../app/data/faq-contracts.json';
import Link from 'next/link';
import Layout from 'app/layout'
import {wrapper} from 'store/store'
import FAQ from 'app/components/faq'
import {connect} from 'react-redux'
import {withRouter} from 'next/router'
import {IContract} from 'app/api/Contract'
import {searchContract} from 'app/api/Contract'
import {setContracts} from "store/actions/contractAtions"
import TitleBox from 'app/components/pages/contract/titleBox'
import CustomButton from 'app/components/common/customButton'
import {setFeedbacks, setCounsellors} from "store/actions/consultationActions"
import InformationComponent from "app/components/informations";
import ContactUs from 'app/components/contactUs';
import SimpleSlider from 'app/components/simpleSlider';
import AnimatedSlider from 'app/components/animatedSlider';


const fake = [
{name:'میلاد شجاعی',description:'مدیر حقوقی شرکت لورم ایپسوم',image:'/images/directconsultationheader.png',link:'/user',information:'لورم ایپسوم متن ساختگی فیلان بیسار در قالب ای فیلانی و بیساری و اینجور چیزهای و بی معنی مزخرف'},
{name:'میلاد شجاعی',description:'مدیر حقوقی شرکت لورم ایپسوم',image:'/images/counsellor/1.jpg',link:'/user',information:'لورم ایپسوم متن ساختگی فیلان بیسار در قالب ای فیلانی و بیساری و  و بی معنی اینجور چیزهای مزخرف'},
{name:'میلاد شجاعی',description:'مدیر حقوقی شرکت لورم ایپسوم',image:'/images/directconsultationheader.png',link:'/user',information:'لورم ایپسوم متن ساختگی فیلان بیسار در قالب ای فیلانی و بیساری و اینجور چیزهای و بی معنی مزخرف'},
{name:'میلاد شجاعی',description:'مدیر حقوقی شرکت لورم ایپسوم',image:'/images/directconsultationheader.png',link:'/user',information:'لورم ایپسوم متن ساختگی فیلان بیسار در قالب ای فیلانی و بیساری و اینجور چیزهای  و بی معنی مزخرف'},
{name:'میلاد شجاعی',description:'مدیر حقوقی شرکت لورم ایپسوم',image:'/images/counsellor/1.jpg',link:'/user',information:'لورم ایپسوم متن ساختگی فیلان بیسار در قالب ای فیلانی و بیساری و اینجور چیزهای مزخرف'},
{name:'میلاد شجاعی',description:'مدیر حقوقی شرکت لورم ایپسوم',image:'/images/directconsultationheader.png',link:'/user',information:'لورم ایپسوم متن ساختگی فیلان بیسار در قالب ای فیلانی و بیساری و اینجور چیزهای و بی معنی مزخرف'},
{name:'میلاد شجاعی',description:'مدیر حقوقی شرکت لورم ایپسوم',image:'/images/counsellor/1.jpg',link:'/user',information:'لورم ایپسوم متن ساختگی فیلان بیسار در قالب ای فیلانی و بیساری و اینجور چیزهای مزخرف'},
{name:'میلاد شجاعی',description:'مدیر حقوقی شرکت لورم ایپسوم',image:'/images/directconsultationheader.png',link:'/user',information:'لورم ایپسوم متن ساختگی فیلان بیسار در قالب ای فیلانی و بیساری و اینجور چیزهای  و بی معنی مزخرف'}
];
const pops = ['نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن']


class Contract extends React.Component{
    state = {contractsData: [], searchValue: '', activekey: 0};
    activeRef = React.createRef();

    componentDidMount(){
        //@ts-ignore
        this.activeRef.current.focus();
    }

    render() {
        //@ts-ignore
        const {feedBacks} = this.props;

        return (
            <Style>
                <div className='row'>
                    <div className='w-100'>

                    <div className='position-relative contract-detail-header d-flex justify-content-md-between justify-content-center align-items-center'>
                         <div className='title mx-md-5 px-md-5 px-5 d-flex flex-column justify-content-between'>
                                <h1 className='m-0 mt-4 mt-md-0 py-3 py-md-4'>نمونه قرارداد برگزاری جشن</h1>
                                <h2 className='m-0 py-3 py-md-4'> <span> + </span>   ۱۵ دقیقه مشاوره رایگان </h2>
                                <p className='m-0 py-3 py-md-4'> 
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه 
                                .روزنامه و مجله در ستون
                                </p>
                                <div className='spans py-md-4 my-4 my-md-0 pb-5 '>
                                     <p className='m-0'>
                                      تعدا صفحات :<span> 6 </span>
                                     </p>
                                     <p className='m-0'>
                                      آخرین بروزرسانی :<span> 1399/11/01 </span>
                                     </p>
                                     <p className='m-0'>
                                      قیمت قرارداد :<span> 80,000 تومان </span>
                                     </p>
                                </div>
                         </div>

                         <div className='image d-none d-md-block'>
                              <div className='right-dot'>
                                   <DotBox margin={10} data={[3,8]}/>
                              </div>
                              <img src='/images/contract/contract-detail.png'/>
                              <div className='bottom-dot'>
                                    <DotBox margin={10} data={[8,3]}/>
                              </div>
                         </div>
                         
                    </div>
                    
                    <div className='container'>

                    

                    <div className='our-cusomers pt-5 w-100 d-flex align-items-center flex-column'>
                            <h1 className='title py-3'>
                             قرارداد‌های لامینگو <span> برخی از مشتریان </span> 
                            </h1>
                            <div className='py-3 w-100 d-md-none d-block'>
                                <img style={{maxWidth:'100%'}} src='/images/customerResponsive.png'/>
                            </div>
                            <div className='py-3 w-100 d-none d-md-block'>
                                <img style={{maxWidth:'100%'}} src='/images/customers.svg'/>
                            </div>
                    </div>

                    <div className='py-3 w-100 d-flex justify-content-center'>
                                 <AnimatedSlider data={fake}/>
                    </div>

                    <div className='consultation-information'>
                        <div className='py-2 w-100'>
                            <TitleBox width={170} title="قرارداد برگزاری جشن"/>
                        </div>
                     
                        <InformationComponent title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
                                              content={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."}/>
                        <InformationComponent title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
                                              content={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."}/>
                        <InformationComponent title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
                                              content={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."}/>
                        <div className='d-block pt-4' style={{width:140}}>
                                            <CustomButton
                                            className='pt-2 mt-3'
                                            style={{width: 150, minHeight: 50}}
                                            text='مطالعه بیشتر'/>
                        </div>
                    </div>

                    <div className='py-5'>
                        <ContactUs/>
                    </div>
                    <div>
                        <div className='py-3'>
                            <TitleBox width={260} title='تهیه شده توسط بهترین ها'/>
                        </div>
                        <div className='py-3 w-100'>
                             <SimpleSlider data={fake}/>
                        </div>
                    </div>
                    
                    <div className='w-100 py-3'>
                            <div className='w-100 py-md-3 py-0'>
                                <div className='w-100 d-flex justify-content-center align-items-center'
                                     style={{backgroundColor: '#fbfbfb', borderRadius: '50px 0 50px 0'}}>
                                    <div className='d-flex flex-column align-items-center justify-content-center px-3 py-5'>
                                        <h1 style={{fontWeight: 'bold', fontSize: 30, lineHeight: '1.6'}}
                                            className='py-3 text-center mr-0 pb-2'>
                                                آیا این قرارداد مورد نیاز شما نیست و یا در انتخاب آن شک دارید؟
                                        </h1>
                                        <p className='m-0 text-center py-3' style={{color:'#919399',fontSize:14}}>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه.
                                        </p>
                                        <div className='py-3 d-flex flex-md-row flex-column align-items-center'>
                                        <CustomButton
                                            className='pt-2 mt-3'
                                            style={{width: 200, minHeight: 50, margin: '0 auto'}}
                                            // onClick={this.handleSubmit}
                                            text='تنظیم قرارداد سفارشی'/>
                                            <CustomButton
                                            innerRef={this.activeRef}
                                            className='pt-2 mt-3 mr-md-2'
                                            style={{width: 150, minHeight: 50, margin: '0 auto'}}
                                            // onClick={this.handleSubmit}
                                            text='بانک قرارداد'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className=' py-5 w-100'>
                            <TitleBox width={140} title="سوالات متداول"/>
                        </div>
                        <div className='w-100 pb-5'>


                        {faqQuestionsData.map((item, key) => {
                            return (
                                <FAQ
                                key={key}
                                title={item.question}
                                content={item.answer}
                                />
                                );
                            })}
                        
                        </div>

                    </div>
                    </div>
                </div>
            </Style>
        )
    }

}


const mapStateToProps = (state, selfProps) => {
    return ({
        feedBacks: state.consultation.feedBacks,
    })
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (context) => {
        await context.store.dispatch(setFeedbacks());
        return ({})
    })

const myComponent = withRouter(connect(mapStateToProps, {})(Contract));

// @ts-ignore
myComponent.LayoutFluid = true;
export default myComponent;