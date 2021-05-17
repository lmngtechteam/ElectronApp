
import React from 'react'
import Link from 'next/link'
import { Input } from 'reactstrap'
import {wrapper} from 'store/store'
import Helper from 'app/utils/Helper'
import { connect } from 'react-redux'
import Style from 'app/styles/counsellorsPage'
import ContactUs from 'app/components/contactUs'
import { withRouter, NextRouter } from 'next/router'
import CustomButton from 'app/components/common/customButton'
import { setCounsellors } from "store/actions/consultationActions"
import SquareCard from 'app/components/pages/counsellors/squareCard'
import { ChatIcon , People , Check } from 'app/components/customIcons'
import Information from 'app/components/pages/consultation/informations'
import CounsellorCard from 'app/components/pages/counsellors/counsellorCard'
import TitleBox from 'app/components/pages/contract/titleBox';

const topics = ['کسب و کار','تجارت و بازرگانی','امور ثبتی','مالیات','خوانواده','ثبت احوال','اسناد رسمی','کیفری','مالی','مهاجرت'];
const cities = ['تهران','کرج','لواسان','اسلامشهر','قزوین','بروجرد','ایلام','سنندج','نوشهر',]

interface ICounsellorsProps {
    slug?: string[]
    router: NextRouter
    counsellorsData?:{id:string,name:string}[]
}


class CounsellorsPage extends React.Component<ICounsellorsProps>{
    static LayoutFluid: boolean
    
    constructor(props){
        super(props);
    }


    state = {  
     selectedCity : '' , 
     selectedCat : '' 
    };
 
   
    setStateWithRouting = () => { 
        const { slug } = this.props;
        if(slug){
            for(var i= 0;i < slug.length ; i++){
                if(slug[i].includes('شهر-')){
                    this.setSelectedCity(slug[i])   
                }else{
                    this.setSelectedCat(slug[i].replace('-',' '))
                }
            }
        }
    }
    
    
    // componentDidUpdate(prevProps) {
    //     if (prevProps.router.asPath !== this.props.router.asPath) {
    //         this.setStateWithRouting();
    //     }
    //   }
    
    componentDidMount(){
        this.setStateWithRouting();
    }

    handleCityChange = (e) => {
        const { target : {value}} = e;
        this.setSelectedCity(value);
    }

    handleCatChange = (e) => {
        const { target : {value}} = e;
        this.setSelectedCat(value);
    }
 
    setSelectedCity = (val) => {
        this.setState({selectedCity:val})
    }

    setSelectedCat = (val) => {
        this.setState({selectedCat:val})
    }

    handleSubmit = () => {
        const { selectedCity , selectedCat } = this.state;
        let arr = [];
        if(selectedCity) arr.push(selectedCity);
        if(selectedCat) arr.push(selectedCat);
        const redirectRoute = arr.join('/');

        if(redirectRoute && redirectRoute !== ''){
            const cleanRoute = Helper.cleanAddress({ value: redirectRoute });
            this.props.router.push(cleanRoute);
        }

    }

    render(){
        const { selectedCat , selectedCity } = this.state;
        const  { counsellorsData } = this.props;
        return(
        <Style>
        <div className='row' >
               <div className='w-100'>
                
                 <div className='w-100 top-cover'>
                    <img src='../../images/counsellors.svg' alt='a'style={{position:'relative',width:'100%',right:0,left:0}}/>
                    <div className='top-cover-content'>
                        <h1 style={{fontSize:'2rem'}} className='m-0 pb-5'>جستجوی وکیل</h1>
                        <p style={{fontSize:20}} className='text-center m-0 w-50 d-none d-md-block'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون  هدف بهبود ابزارهای کاربردی می باشد.</p>
                    </div>
                 </div>
                 <div className='w-100 d-flex justify-content-center m-0 px-4 px-md-2 row'>
                     <div 
                     className='d-flex flex-md-row flex-column row align-items-center p-0 py-3  col-12 col-md-8' 
                     style={{
                        background:'white' , 
                        minHeight:60 ,
                        width:'80%' , 
                        zIndex : 1 ,
                        boxShadow:'1px 3px 5px 0px rgb(0 0 0 / 14%)' ,
                        borderRadius:12 ,
                        marginTop:'-38px' ,
                        paddingBottom:38 ,
                        }}>
                        <div className='col-md-5 col-12 pt-3 pt-md-0 counsellors-input-box'>
                            <Input value={selectedCat} onChange={this.handleCatChange} placeholder='موضوع' type='select'>
                                {topics.map(e => <option value={e} key={e}>{e}</option>)}
                            </Input>
                        </div>
                        <div className='col-md-5 col-12 pt-2 pt-md-0 counsellors-input-box'>
                            <Input value={selectedCity} onChange={this.handleCityChange} placeholder='شهر' type='select'>
                                {cities.map(e => <option key={e} value={`شهر-${e}`}>{e}</option>)}
                            </Input>
                        </div>
                        <div className='col-md-2 col-12 py-3 py-md-0'>
                            <CustomButton style={{height:42}} className='w-100' onClick={this.handleSubmit} text='جستجو'/>
                        </div>
                     </div>
                 </div>
                 <div className='container'>

                   
                   <div className='pt-5 d-flex  justify-content-between w-100'>
                       <span>
                           نتایج جستجو
                       </span>
                       <span> وکیل یافت شد ۲۲ </span>
                   </div>

                   {counsellorsData && counsellorsData.map(e=>{
                       const { id , name } = e;
                       return(
                        <Link key={id} href={`/counsellors/p/${id}-${name}`}>
                            <a href='#' style={{textDecoration:'unset'}} className='pointer py-3 d-flex justify-content-center'>
                                <CounsellorCard data={e}/>
                            </a>
                        </Link>
                       )
                   })}
                    
                   
                
              

                    <div className='pt-5 d-none d-md-block'>
                            <div className='border-bottom'/>
                    </div>

                    <div className='pt-5 pb-3 pb-md-5 pb-0 w-100 text-center'>
                        <TitleBox width={90} title={'چرا لامینگو'}/>
                    </div>

                    <div className='row d-flex pb-md-5 pb-0 w-100 py-1 justify-content-center align-items-center m-0'>

                        <div className='col-md-4 col-sm-12 py-2'>
                        <SquareCard 
                        icon = {<Check />}
                        title='با خیالی راحت انتخاب کنید' 
                        content='متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه'/>
                        </div>

                        <div className='col-md-4 col-sm-12 py-2'>
                        <SquareCard
                        icon = { <People />} 
                        title='در کنار هم مقایسه کنید' 
                        content='متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه'/>
                        </div>
                        
                        <div className='col-md-4 col-sm-12 py-2'>
                        <SquareCard 
                        icon = { <ChatIcon />}
                        title='از مشاوره رایگان استفاده کنید'
                        content='متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه'/> 
                        </div>
                        </div>

                        <div className='py-5 d-none d-md-block'>
                            <div className='border-bottom'/>
                        </div>

                        <div className='pt-5 pt-0 pb-3 w-100'>
                                <TitleBox width={230} title={'لورم ایپسوم متن ساختگی'}/>
                        </div>

                        <Information title={'فرم اطلاعات'} content={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سو'} />         
                        <Information title={'فرم اطلاعات'} content={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سو'} />         
                        <Information title={'فرم اطلاعات'} content={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سو'} />         

                        </div>

                        <ContactUs/>       
   
               </div>
        </div>
        </Style>
            
            )
        }
        
    }
    
    
export const getServerSideProps =  wrapper.getServerSideProps(
    async (context)  => {
        const { params : { slug = []} } = context;
        let city = 'شهر-تهران';
        let cat = 'کسب و کار';
        
        if(slug){
            for(var i= 0;i < slug.length ; i++){
                if(slug[i].includes('شهر-')){
                    city=slug[i] 
                }else{
                    cat=slug[i].replace('-' , ' ');
                }
            }
        }
        
        await context.store.dispatch(setCounsellors({city,cat}));
        
        return ({
            props : {slug}
        })
        
    }
    )
    
    
    const mapStateToProps = (state, selfProps) => {
        return ({
            counsellorsData: state.consultation.counsellors
        })
    };
    
    const MyComponent = withRouter(connect(mapStateToProps, {})(CounsellorsPage));
    // @ts-ignore
    MyComponent.LayoutFluid = true;
    export default MyComponent;
    