import Style from 'app/styles/payment';
import DashedLine from 'app/components/dashedLine';
import CustomButton from 'app/components/common/customButton';
import { Check , X } from 'react-bootstrap-icons';

const Response = (props) => {

    const { type } = props;

    return(
        <Style>
            <div className='w-100 h-100 position-relative py-md-5'>

                <div className='response-container'>
                    <div className='py-md-5 py-5 text-md-right text-center response-box my-md-5 my-5'>
                        
                        <div className='px-md-5 px-5 d-flex flex-column align-items-center align-items-md-center'>

                        <div className={`${type === 'success' ? 'success' : 'error'} header-icon`}>
                            {type === 'success' ? <Check/> : <X/>}
                        </div>
                        <div className='header-title pt-3 mt-1'>
                            <h3>
                                {type === 'success' ? 'پرداخت موفق':'پرداخت ناموفق'}
                            </h3>
                        </div>
                        <div className='date-and-time'>
                            <p className='m-0'>
                            2/3/1399 - 12:04
                            </p>
                        </div>

                        <div className='information-box py-4'>
                            <div className='information-item title pl-4'>
                                <p>کد پیگیری</p>
                                <p>شماره سفارش</p>
                                <p className='m-0 p-0'>نام درگاه</p>
                            </div>
                            <div className='information-item value'>
                                <p>2131313131313</p>
                                <p>2131313</p>
                                <p className='m-0 p-0'>درگاه بانک سپه</p>
                            </div>
                        </div>

                        </div>

                        {/* i will refactor this section 100%  */}
                        <div className='circle-box'>
                            <div className='circle-left'/>
                            <DashedLine className='dashed-line'/>
                            <div className='circle-right'/>
                        </div>

                        <div className='px-md-5 px-5 d-flex flex-column align-items-md-center'>
                            <div className='contract-information'>
                                <p className='m-0 name'>
                                قرارداد استخدام برنامه نویس
                                </p>
                                <p className='m-0 price pt-3'>
                                مبلغ <span> 25,000 </span> تومان
                                </p>
                            </div>
                        </div>

                    </div>


                    <div className='px-5'>
                        <CustomButton style={{height:65,fontWeight:'bold',fontSize:18}} 
                        text={type === 'success' ? 'تائید' : 'پرداخت مجدد'} className='w-100'/>
                    </div>

                </div>
            </div>
        </Style>
    )
}

   
export const getServerSideProps = async (context)  => {
        const { params : { type } } = context;
        
        return ({
            props : {
                type
            }
        })
        
    }

Response.LayoutFluid = true;
export default Response;