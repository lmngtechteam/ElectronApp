import Layout from 'app/layout';
import Style from 'app/styles/aboutusPage';
import TitleBox from 'app/components/pages/aboutus/titleBox';
import EmployeeCard from 'app/components/pages/aboutus/employeeCard';

const employee = [
    { name : 'بهرام فرهادی' , jobTitle : 'مدیر دپارتمان حقوقی' , img : '../../images/aboutus/user1.svg'},
    { name : 'بهرام فرهادی' , jobTitle : 'مدیر دپارتمان حقوقی' , img : '../../images/aboutus/user2.svg'},
    { name : 'بهرام فرهادی' , jobTitle : 'مدیر دپارتمان حقوقی' , img : '../../images/aboutus/user3.svg'},
    { name : 'بهرام فرهادی' , jobTitle : 'مدیر دپارتمان حقوقی' , img : '../../images/aboutus/user4.svg'},
    { name : 'بهرام فرهادی' , jobTitle : 'مدیر دپارتمان حقوقی' , img : '../../images/aboutus/user5.svg'},
    { name : 'بهرام فرهادی' , jobTitle : 'مدیر دپارتمان حقوقی' , img : '../../images/aboutus/user6.svg'},
    { name : 'بهرام فرهادی' , jobTitle : 'مدیر دپارتمان حقوقی' , img : '../../images/aboutus/user7.svg'},
    { name : 'بهرام فرهادی' , jobTitle : 'مدیر دپارتمان حقوقی' , img : '../../images/aboutus/user8.svg'},
];

const AboutUs = () => {

    return(
        <Style>

        <div className='row m-0'>
            <div className='container flex-column d-flex align-items-center'>
                <div className='w-75 d-flex align-items-center flex-column text-center pb-3 pt-5 mt-2'>

                    <p className='m-0' style={{color:'#919399'}}>
                    درباره لامینگو
                    </p>

                    <span className='m-0 pt-3'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که 
                    .لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز 
                    </span>

                </div>

                <div className='w-100 py-md-5 my-md-5'>
                    <img className='mw-100' src='../../images/aboutus/banner.svg' alt='banner'/>
                </div>
                
                <div className='pt-md-5 w-100 pt-md-5 mt-md-5'>

                    <div className='w-100 d-flex justify-content-between row pt-5 py-md-3'>
                        <div className='d-flex flex-column col-12 col-md-6'>
                            <div className='d-flex justify-content-start'>
                                <TitleBox title={'داستان لامینگو'}/>
                            </div>
                            <div className='pt-3' style={{fontSize:16}}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. 
                            </div>
                        </div>
                        <div className='col-md-5 col-12' style={{height:385}}>
                            <div className='lawmingo-story-1 sticky-top sticky-md-unset pt-3 pt-md-0'>
                                <img className='first-img' src='../../images/aboutus/lawmingoStory1.svg' alt='lawmingo'/>
                                <img className='d-md-block d-none second-img'src='../../images/aboutus/lawmingoStory2.svg' alt='lawmingo'/>
                            </div>
                        </div>
                    </div>

                    <div className='w-100 d-flex justify-content-between row m-0 py-md-5 align-items-center flex-md-row flex-column-reverse'>
                        <div className='col-md-5'>
                            <div className='lawmingo-image-card pt-md-0 pt-3'>
                                <img src='../../images/aboutus/lawmingoValue.svg' alt='lawmingo'/>
                            </div>
                        </div>
                        <div className='d-flex flex-column col-md-6'>
                            <div className='d-flex justify-content-start'>
                                <TitleBox width={200} title={'ارزش های لامینگو'}/>
                            </div>
                            <div className='pt-3' style={{fontSize:16}}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. 
                            </div>
                        </div>
                    </div>

                    <div className='w-100 d-flex justify-content-between row m-0 py-5 align-items-center'>
                       
                        <div className='d-flex flex-column col-md-6'>
                       
                            <div className='d-flex justify-content-start'>
                                <TitleBox width={200} title={'چشم انداز لامینگو'}/>
                            </div>
                           
                            <div className='pt-3' style={{fontSize:16}}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. 
                            </div>
                       
                        </div>

                        <div className='col-md-5'>
                       
                            <div className='lawmingo-image-card pt-md-0 pt-3'>
                                <img src='../../images/aboutus/vision.svg' alt='lawmingo'/>
                            </div>
                       
                        </div>

                    </div>

                </div>

                <div className='pt-md-5 w-100 py-md-5 mt-md-5'>
                    <div className='d-flex flex-column align-items-center'>
                        <TitleBox width={100}>
                            <h3
                            style={{
                                position: 'absolute',
                                whiteSpace: 'nowrap',
                                bottom: '10px',
                                fontWeight: 'bold'
                            }}
                            >
                                تیم لامینگو
                            </h3>
                        </TitleBox>
                        <p className='m-0 w-75 text-center pt-3'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                    </div>
                </div>

                <div className='pt-md-5 pt-5 w-100 row m-0'>
                    {employee && employee.map(e => <div className='col-md-3 col-6 py-3'> <EmployeeCard data={e}/> </div>)}
                </div>

            </div>
        </div>

        </Style>
    )

}

AboutUs.LayoutFluid = true;

export default AboutUs;