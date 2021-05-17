import React from 'react';
import Style from 'app/styles/b2b';
import DotBox from 'app/components/dotBox';
import faqQuestionsData from '../../app/data/faq-contracts.json';
import {wrapper} from 'store/store'
import FAQ from 'app/components/faq'
import {connect} from 'react-redux'
import {withRouter} from 'next/router'
import TitleBox from 'app/components/pages/contract/titleBox'
import CustomButton from 'app/components/common/customButton'
import {setFeedbacks, setCounsellors} from "store/actions/consultationActions"
import Offer from 'app/components/pages/subscription/offers';
import IntroCard from 'app/components/pages/b2b/introCard';
import IconicCard from 'app/components/iconicCard';
import CommentSlider from 'app/components/commentSlider';

const offersData = [
    {          price : 100 ,
               type : 'معمولی',
               options:[
                   {title:'ساخت فیلان و بیسار زیاد',check:true},
                   {title:'ساخت فیلان و بیسار زیاد',check:false},
                   {title:'ساخت فیلان و بیسار زیاد',check:true},
                   {title:'ساخت فیلان و بیسار زیاد',check:true}
                   ]
    },
    {  
       type : 'پیشرفته',
       price : 100 ,
       options:[
           {title:'ساخت فیلان و بیسار زیاد',check:true},
           {title:'ساخت فیلان و بیسار زیاد',check:false},
           {title:'ساخت فیلان و بیسار زیاد',check:true},
           {title:'ساخت فیلان و بیسار زیاد',check:true}
           ]
    },
    {  
       type : 'معمولی' , 
       price : 100 ,
       options:[
           {title:'ساخت فیلان و بیسار زیاد',check:true},
           {title:'ساخت فیلان و بیسار زیاد',check:false},
           {title:'ساخت فیلان و بیسار زیاد',check:true},
           {title:'ساخت فیلان و بیسار زیاد',check:true}
           ]
    },
];


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

    activeButton = React.createRef();

    componentDidMount(){
        // @ts-ignore
        this.activeButton.current.focus();
    }

    render() {

        return (
            <Style>
                <div className='row'>
                    <div className='w-100'>


  

                    <div className='position-relative b2b-header d-flex'>
                         <div className='merlot-cover'/>
                         
                         <div className='img-box'>
                             <img src='/images/b2b/laptop.png' alt='laptop'/>
                         </div>

                         <div className='content-box d-flex flex-column align-items-center justify-content-center'>
                             <h1 className='m-0 title-medium'>
                             امضای الکترونیکی و ویرایش قرارداد به ساده ترین روش
                             </h1>
                             <p className='m-0 pt-4 content-medium'>
                             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه تکنولوژی مورد 
                             </p>
                             <div className='d-flex w-100 pt-5'>
                                 <div>
                                     <CustomButton style={{width:170,height:50}} innerRef={this.activeButton} text='آپلود فایل'/>
                                 </div>
                                 <div className='mr-2'>
                                     <CustomButton style={{width:170,height:50}} text='ساخت قرارداد'/>
                                 </div>
                             </div>
                         </div>
                    </div>

                    <div className='container intro-cards-box'>
                        
                        <div className='pt-5 pb-3 w-100'>
                            <TitleBox width={190} title="امکانات داشبورد لامینگو"/>
                        </div>

                        <div className='py-5 card-box'>
                            <IntroCard 
                            text={"عصر دیجیتال، محدودیت‌های مکانی و زمانی را از میان برداشته است. امضای الکترونیک این امکان را فراهم می‌کند تا اسناد و قراردادهای خود را به صورت آنلاین و با اعتبار قانونی به امضای طرفین برسانید. کافیست امضای خود را اسکن و آپلود کنید. این خدمت به همراه احراز هویت طرفین قرارداد، تجربه امضای مطمئن و حرفه‌ای اسناد و قراردادهایتان را به ارمغان می‌آورد."} 
                            title={"امضای الکترونیک"}
                            img='/images/home/laptop.webp'
                            onUploadClick={() => {console.log('clicked')}}
                            />
                        </div>

                        <div className='py-5 card-box'>
                            <IntroCard 
                            title={"امضای الکترونیک"}
                            img='/images/home/laptop.webp'
                            onUploadClick={() => {console.log('clicked')}}
                            text='امضای الکترونیک شما همانند امضای کتبی‌تان ارزش حقوقی دارد و مورد تایید مراجع قانونی است. لامینگو از طریق احراز هویت امضاکننده، از سوءاستفاده جلوگیری می‌کند. لازم به توضیح است مطابق با ماده ۷ قانون تجارت الکترونیکی مصوب 1382، هرگاه قانون وجود امضا را لازم بداند، امضای الکترونیکی مکفی است. لامینگو به شما این اطمینان را می‌دهد که در صورت بروز دعاوی، اسناد شما قابل استناد و پیگیری خواهد بود.'
                            />
                        </div>

                    </div>

                    <div className='container py-5'>
                        <div className='pt-3 pb-3 w-100'>
                            <TitleBox width={300} title="چه صنایعی میتوانند استفاده کنند"/>
                        </div>

                        <div className='m-0 py-5 d-flex row justify-content-center position-relative w-100 align-items-center p-0 pb-5 pb-md-4'>
                     
                        <div className='iconic-card-item col-md-4 col-12 left-connection'>
                            <IconicCard icon='/images/signature/document.svg' title='بانکی' text='متن ساختگی با تولید سادگی نامفهوم از است.چاپگرها و متون بلکه روزنامه'/>
                        </div>
                        
                        <div className='iconic-card-item col-md-4 col-12 left-connection'>
                            <IconicCard icon='/images/signature/users.svg' title='پزشکی' text='پس از آپلود، امضایتان را در متن قرارداد جای گذاری کنید'/>
                        </div>


                        <div className='iconic-card-item col-md-4 col-12 bottom-connection'>
                            <IconicCard icon='/images/signature/people.svg' title='استارتاپی' text='احراز هویت شوید و قرارداد را برای امضای طرف مقابل ارسال کنید'/>
                        </div>

                        </div>

                    </div>

                    <div className='container py-5'>
                        <div className='pt-3 pb-3 w-100'>
                            <TitleBox width={200} title="نظرات مشتریان لامینگو"/>
                        </div>

                        <CommentSlider data={[
                            {
                                name:"اصغر محبی" ,
                                descripiton: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با .هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته",
                                jobTitle:'مدیر عامل فیلان'
                            },
                            {
                                name:"امیرحسین فرهودی" ,
                                descripiton: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با .هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته",
                                jobTitle:'مدیر عامل فیلان'
                            },
                            {
                                name:"وحید وحیدیان" ,
                                descripiton: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با .هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته",
                                jobTitle:'مدیر عامل فیلان'
                            },
                        ]}/>
                    </div>
                    
                    
                    <div className='w-100 pt-5 pb-3 container'>
                            <div className='w-100 py-md-3 py-0'>
                                 <Offer data={offersData}/>
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