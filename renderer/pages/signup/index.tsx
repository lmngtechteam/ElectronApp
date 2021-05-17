import DotBox from 'app/components/dotBox';
import Style from 'app/styles/signup';
import CustomButton from 'app/components/common/customButton';
import CustomInput from 'app/components/common/customInput';
import { Telephone , Lock , Envelope } from 'react-bootstrap-icons';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const SignUp = () => {

    const { register, handleSubmit , errors ,setValue  } = useForm();

    const onSubmit = (values) => {
        console.log(values,'values')
        //api call
    }

    return(
        <Style>
            <div className='w-100 h-100 position-relative py-md-5'>
                <div className='text-md-right text-center factor-box my-md-5 my-5 p-md-5 p-4 d-flex flex-column align-items-md-center position-relative'>
                        <div className='dots-container-one position-absolute dot-top'>
                            <DotBox data={[6,6]} margin={10}/>
                        </div>
                        <div className='dots-container-two position-absolute dot-bottom'>
                            <DotBox data={[6,6]} margin={10}/>
                        </div>       
                        <div className='text-center'>
                            <h1 style={{color:'#000414',fontSize:30,fontWeight:'bold'}}>ایجاد حساب کاربری</h1>
                            <p className='m-0 pt-2' style={{fontSize:20,color:'#919399'}}>
                            برای ساخت و امضای قراردادهای الکترونیک،<br/>
                            وارد حساب کاربری خود شوید.
                            </p>
                        </div>
                        <div className='w-100 py-3 pt-4'>
                            <div className='d-flex row'>
                            
                                <div className='col-6'>
                                <CustomInput  
                                name='name'
                                className='pt-3' 
                                innerRef = {register({ required: true })}
                                placeholder={<>نام </>}/>
                                </div>

                                <div className='col-6'>
                                <CustomInput  
                                name='lastname'
                                className='pt-3' 
                                innerRef = {register({ required: true })}
                                placeholder={<>نام خوانوادگی </>}/>
                                </div>
                                
                            </div>
                            <CustomInput  
                            name='phonenumber'
                            className='pt-3' 
                            innerRef = {register({ required: true })}
                            placeholder={<><Telephone/> شماره موبایل </>}/>
                            
                            <CustomInput  
                            name='email'
                            className='pt-3' 
                            innerRef = {register({ required: true })}
                            placeholder={<><Envelope/> ایمیل </>}/>

                            <CustomInput 
                            name='password'
                            innerRef = {register({ required: true })}
                            className='pt-3'
                            type='password' 
                            placeholder={<><Lock/> رمز عبور </>}/>

                        </div>              
                        <CustomButton onClick={handleSubmit(onSubmit)} style={{height:50,fontWeight:'bold',fontSize:18}} text={'پرداخت و خرید محصول'} className='w-100 mt-3'/>
                        <div className='pt-3'>
                            <p style={{color:'#919399',fontSize:12}} className='m-0'>
                            حساب کاربری دارید؟
                            <Link href='login'>
                                <a className='mr-1'> 
                                ورود
                                </a> 
                            </Link>
                            </p>
                        </div>
                
                </div>
            </div>
        </Style>
    )
}

SignUp.LayoutFluid = true;
export default SignUp;