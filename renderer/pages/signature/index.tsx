import CustomButton from 'app/components/common/customButton';
import Style from 'app/styles/signature';
import IntroCard from 'app/components/pages/signature/panel/introCard';
import IconicCard from 'app/components/iconicCard';
import TitleBox from 'app/components/pages/contract/titleBox'
import faqQuestionsData from 'app/data/faq-contracts.json'
import FAQ from 'app/components/faq'
import { useEffect, useRef } from 'react';
const Panel = () => {

    const secondButton = useRef();

    useEffect(() => {
        // @ts-ignore
        secondButton.current.focus();
    },[])

    return <Style> 
             <div className='w-100'>
                 <div className='d-flex justify-content-center py-5'>
                      <div className='background position-absolute'/>
                      <div className='container p-0 row py-md-5'>

                      <div className='col-md-5 offset-md-1 offset-0 col-12 p-0'>
                          <div className='d-flex flex-column justify-content-md-start justify-content-center header-content'>
                          <h1 className='m-0'> با امضای دیجیتال زندگی راحت تری را تجربه کنید </h1>
                          <p className='m-0 py-4'> بدون دغدغه، قراردادها و اسناد خود را در کمترین زمان از طریق امضای الکترونیک قانونی به صورت آنلاین با طرف مقابل امضا کنید. لامینگو مفتخر است برای اولین بار این خدمت را به شما ارایه دهد تا توافقاتی سریع، راحت و مطمئن را تجربه کنید. </p>
                          <div className='d-flex align-items-center px-md-5 justify-content-center justify-content-md-around'>
                                    <div>
                                        <CustomButton style={{height:50,width:160}} text='آپلود فایل'/>
                                    </div>
                                    <div className='d-md-block d-none'>
                                        <CustomButton innerRef={secondButton} style={{height:50,width:160}} text='ساخت قرارداد'/>
                                    </div>
                          </div>
                          </div>
                      </div>

                      <div className='col-md-6 col-0 d-md-block d-none'>
                           <img className='laptop-img' src='/images/home/laptop.webp'/>
                      </div>

                      </div>
                 </div>

                 <div className='first-title w-100 d-md-flex justify-content-center pb-5 d-none'>
                    <h1 className='m-0'> 
                    به جمع هزاران مشتری  <span> امضای دیجیتال لامینگو </span>بپیوندید
                    </h1>
                 </div>

                 <div className="container my-3 mt-md-0 mt-2">
                    <img src="/images/customers.svg" className="img-fluid d-md-block d-none" alt=""/>0
                    <img src="/images/customerResponsive.png" className="img-fluid d-block d-md-none m-auto" alt=""/>
                 </div>


                 <div className='container intro-cards-box'>

                      <div className='py-5 card-box'>
                          <IntroCard 
                          text={"عصر دیجیتال، محدودیت‌های مکانی و زمانی را از میان برداشته است. امضای الکترونیک این امکان را فراهم می‌کند تا اسناد و قراردادهای خود را به صورت آنلاین و با اعتبار قانونی به امضای طرفین برسانید. کافیست امضای خود را اسکن و آپلود کنید. این خدمت به همراه احراز هویت طرفین قرارداد، تجربه امضای مطمئن و حرفه‌ای اسناد و قراردادهایتان را به ارمغان می‌آورد."} 
                          title={"امضای الکترونیک چیست؟"}
                          img='/images/signature/firstForm.png'
                          onUploadClick={() => {console.log('clicked')}}
                          />
                      </div>

                      <div className='py-5 card-box'>
                          <IntroCard 
                          title={"کاملا امن و مورد تایید مراجع قانونی"}
                          img='/images/signature/secondForm.png'
                          onUploadClick={() => {console.log('clicked')}}
                          text='امضای الکترونیک شما همانند امضای کتبی‌تان ارزش حقوقی دارد و مورد تایید مراجع قانونی است. لامینگو از طریق احراز هویت امضاکننده، از سوءاستفاده جلوگیری می‌کند. لازم به توضیح است مطابق با ماده ۷ قانون تجارت الکترونیکی مصوب 1382، هرگاه قانون وجود امضا را لازم بداند، امضای الکترونیکی مکفی است. لامینگو به شما این اطمینان را می‌دهد که در صورت بروز دعاوی، اسناد شما قابل استناد و پیگیری خواهد بود.'
                          />
                      </div>
                 </div>
                
                <div className='container py-5'>

                <div className='d-flex justify-content-center py-3'>
                     <TitleBox width={150} title='چگونه کار می‌کند؟'/>
                </div>

                 <div className='m-0 d-flex row justify-content-center position-relative w-100 align-items-center p-0 pb-5 pb-md-4'>
                     
                     <div className='iconic-card-item col-md-4 col-12 left-connection'>
                         <IconicCard icon='/images/signature/document.svg' title='قرارداد خودت را بساز' text='متن ساختگی با تولید سادگی نامفهوم از است.چاپگرها و متون بلکه روزنامه'/>
                     </div>
                     
                     <div className='iconic-card-item col-md-4 col-12 left-connection'>
                         <IconicCard icon='/images/signature/users.svg' title='قراردادتان را امضا کنید' text='پس از آپلود، امضایتان را در متن قرارداد جای گذاری کنید'/>
                     </div>


                     <div className='iconic-card-item col-md-4 col-12 bottom-connection'>
                         <IconicCard icon='/images/signature/people.svg' title='قرارداد را برای طرف مقابل ارسال کنید' text='احراز هویت شوید و قرارداد را برای امضای طرف مقابل ارسال کنید'/>
                     </div>


                     <div className='iconic-card-item col-md-4 col-12 left-connection'>
                         <IconicCard icon='/images/signature/archive-f.svg' title='امضای طرف مقابل را اخذ کنید' text='امضای طرف مقابل را پس از احراز هویت وی، اخذ کنید'/>
                     </div>

                     <div className='iconic-card-item col-md-4 col-12 left-connection-mini'>
                         <IconicCard icon='/images/signature/pencil.svg' title='قرارداد امضا شده نهایی را مبادله کنید' text='قراداد امضا شده، برای طرفین ارسال و آرشیو می شود'/>
                     </div>
                 </div>



                <div className='page-footer py-5 my-5 px-4 d-flex flex-column align-items-center'>
                     <h1 className='m-0'>
                     آماده اید از امضای الکترونیک استفاده کنید؟
                     </h1>
                     <p className='m-0 py-4'>
                     در عرض چند دقیقه می‌توانید قرارداد خود را،
                     الکترونیکی <span> به امضای طرفین برسانید. کافیست هم‌اکنون امتحان کنید. </span>
                     </p>
                     <div className='d-flex flex-md-row flex-column'>
                         <CustomButton className='mx-md-2' style={{width:180,height:50}} text='آپلود فایل'/>
                         <CustomButton className='mx-md-2 mt-3 mt-md-0' style={{width:180,height:50}} innerRef={secondButton} text='ساخت قرارداد'/>
                     </div>
                </div>

                <div className='py-5'>
                <div className='d-flex justify-content-center py-3'>
                    <TitleBox width={140} title="سوالات متداول"/>
                </div>
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
           </Style>
}


Panel.LayoutFluid = true;

export default Panel;