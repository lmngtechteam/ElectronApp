import DotBox from 'app/components/dotBox';
import Style from 'app/styles/signup';
import CustomButton from 'app/components/common/customButton';
import CustomOtpComponent from 'app/components/pages/login/otp';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useEffect , useState } from 'react';


const Factor = () => {

    const { register, handleSubmit , errors ,setValue  } = useForm();
    const [ loading , setLoading ] = useState(false);

    useEffect(() => {
        register(
            {name:'otp'}
        );
      }, []);

    const sendOtp = (val) => {
        setTimeout(() => {
            setLoading(false);
        },3000)
    }

    const onSubmit = (e) => {
        setLoading(true);
        sendOtp(e);
    }

    const handleChange = (e) => {
        setValue('otp',e);
        if(e.length === 6){
            setLoading(true);
            sendOtp(e);
        }
    }

    return(
        <Style>
            <div className='w-100 h-100 position-relative py-md-5'>
                <div className='text-md-right text-center factor-box otp-box my-md-5 my-5 p-md-5 p-4 d-flex flex-column align-items-md-center position-relative'>
                        <div className='dots-container-one position-absolute dot-top'>
                            <DotBox data={[6,6]} margin={10}/>
                        </div>
                        <div className='dots-container-two position-absolute dot-bottom'>
                            <DotBox data={[6,6]} margin={10}/>
                        </div>       
                        <div className='text-center'>
                            <h1 style={{color:'#000414',fontSize:20,fontWeight:'bold'}}>احراز هویت</h1>
                            <p className='m-0 pt-2' style={{fontSize:12,color:'#919399'}}>
                            لطفا کد تایید ارسال شده به شماره موبایل <br/>
                            خود را وارد کنید 
                            </p>
                        </div>
                        <div className='w-100 py-3 pt-4'>
                        
                            <CustomOtpComponent 
                                    autoFocus
                                    isNumberInput
                                    length={6}
                                    inputClassName="otpInput"
                                    onChangeOTP={handleChange}
                                    name='otp'
                            />

                        </div>              
                        <div className='pt-3'>
                            <p style={{color:'#919399',fontSize:12}} className='m-0'>
                            حساب کاربری ندارید؟
                            <Link href='signup'>
                                <a className='mr-1'> 
                                ساخت حساب کاربری
                                </a> 
                            </Link>
                            </p>
                        </div>
                        <CustomButton disabled={loading} onClick={handleSubmit(onSubmit)} style={{height:50,fontWeight:'bold',fontSize:18}} text={'ادامه'} className='w-100 mt-4'/>
                
                </div>
            </div>
        </Style>
    )
}

Factor.LayoutFluid = true;
export default Factor;