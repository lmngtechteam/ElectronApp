import DotBox from 'app/components/dotBox';
import Style from 'app/styles/payment';
import DashedLine from 'app/components/dashedLine';
import CustomButton from 'app/components/common/customButton';

const Factor = () => {
    return(
        <Style>
            <div className='w-100 h-100 position-relative py-md-5'>
                <div className='text-md-right text-center factor-box my-md-5 my-5 p-md-5 p-5 d-flex flex-column align-items-md-center position-relative'>
                        <div className='dots-container-one position-absolute d-none d-md-block' style={{right:'-81px',top:'-52px',zIndex:-1}}>
                            <DotBox data={[7,8]} margin={10}/>
                        </div>
                        <div className='dots-container-two position-absolute  d-none d-md-block' style={{left:'-114px',bottom:'-44px',zIndex:-1}}>
                            <DotBox data={[7,8]} margin={10}/>
                        </div>
                        <h3 className='title'>نام قرارداد مورد نظر</h3>
                        <p className='information pt-md-3 pt-3 text-center'>
                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها .
                        </p>
                        <DashedLine  className='mt-md-3 mt-3'/>
                        <div className='information-item py-md-4 py-4'>
                            <p>
                                بازه تحویل: <span> ۴ </span> الی <span> ۵ </span> روز
                            </p>
                        </div>
                        <DashedLine/>
                        <div className='information-item py-md-4 py-4'>
                            <p>
                                قیمت خرید: <span> ۴۵،۰۰۰  </span> تومان
                            </p>
                        </div>
                        <CustomButton style={{height:65,fontWeight:'bold',fontSize:18}} text={'پرداخت و خرید محصول'} className='w-100'/>
                </div>
            </div>
        </Style>
    )
}

Factor.LayoutFluid = true;
export default Factor;