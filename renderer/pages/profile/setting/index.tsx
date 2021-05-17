import CustomButton from 'app/components/common/customButton';
import CustomInput from 'app/components/common/customInput';
import Notifiation from 'app/components/notification';
import { Lock } from 'react-bootstrap-icons';
import Style from 'app/styles/profile';
import { useState } from 'react';
import  { useTransition, animated } from 'react-spring';
import ModalFlow from 'app/components/ModalFlowCleaned';
import ChangePassword from 'app/components/pages/profile/setting/changePassword';
import ChangePasswordSucces from 'app/components/pages/profile/setting/changePasswordSuccess';
import DeletePicture from 'app/components/pages/profile/setting/deletePicture';
import ChangePicture from 'app/components/pages/profile/setting/changeProfilePicture';
import SwitchPicture from 'app/components/pages/profile/setting/switchPicture';
const Setting = () => {
    const [ response , setResponse ] = useState(false);
    const [ passwordModal, changePasswordModal ] = useState(false);
    const [ deletePictureModal, changeDeletePictureModal ] = useState(false);
    const [ siwtchPictureModal, changeSwitchPictureModal ] = useState(false);

    const transitions = useTransition(response, null, {
      // @ts-ignore
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      })

    return(  
      <Style>
        <div className='w-100'>
            <div className='m-4 p-4 profile-setting'>
              <div className='row'>

                <div className='col-12'>
                  <h3 className='box-title m-0'> اطلاعات شخصی </h3>
                </div>

                <div className='col-12 my-3'>
                  <div className='profile-setting-box row py-4 px-1'>
                    <div className='col-9 row p-0'>

                      <div className='col-3 d-flex flex-column align-items-center'>
                            <div className='picture-box mw-100 position-relative'>
                              <div className='picture-box-inside'>
                                {/* <img src=''/> */}
                                img
                              </div>
                              
                              <ChangePicture handleChangePicture={() => {changeSwitchPictureModal(true)}} handleDeletePicture={() => {changeDeletePictureModal(true)}} />

                            </div>                       
                              <div className='user-name pt-4 d-flex flex-column align-items-center'>
                                <h3 className='m-0'>علیرضا رضایی</h3>
                                <p className='m-0'>0923443323</p>
                              </div>
                      </div>

                      <div className='col-9 p-0 row d-flex justify-content-center'>
                              <div className='col-12 row mt-2 p-0'>
                                <div className='col-6'>
                                  <CustomInput placeholder='نام'/>    
                                </div>
                                <div className='col-6'>
                                  <CustomInput placeholder='نام خانواده' />    
                                </div>
                                <div className='col-6'>
                                  <CustomInput placeholder='شماره موبایل'/>    
                                </div>
                                <div className='col-6'>
                                  <CustomInput placeholder='آدرس ایمیل'/>    
                                </div>
                              </div>
                              <div className='col-12 d-flex flex-row align-items-center pt-4'>
                              
                              <div style={{width:'30%'}}>
                                <CustomButton style={{height:55,width:'100%',fontSize:16,fontWeight:'bold'}} theme='merlot-reverse' text='تغییر آدرس ایمیل'/>
                              </div>

                              <div className='mr-3' style={{width:'40%'}}>
                                <CustomButton style={{height:55,width:'100%',fontSize:16,fontWeight:'bold'}} theme='merlot-reverse' text='دریافت ایمیل فعال سازی'/>
                              </div>

                              <div style={{color:'#801323',fontSize:16}} className='d-flex align-items-center mr-3 pointer'>
                                <Lock/>
                                <p className='cursor-pointer merlot m-0 mr-1' onClick={() => {changePasswordModal(e => e ? false : true)}}>تغیر رمز عبور</p>
                              </div>
                              </div>
                      </div>

                    </div>
                    <div className='col-3 p-0 py-2'>
                      <div className='p-3 w-100 h-100 signoture-box d-flex flex-column align-items-center justify-content-between'>
                        <h3>امضای من</h3>
                        {/* <img src=''/> */}
                        <span> my sign </span>

                        <p className='m-0 pointer'>تغییر امضا</p>
                      </div>                      
                    </div>
                  </div>
                </div>

                <div className='col-12'>
                  <CustomButton style={{height: 55,width: 206}} text='ذخیره تغییرات' theme='merlot'/>
                </div>

              </div>
            </div>
            <div className='m-4 pt-3 position-absolute fixed-bottom'> 
            
            {
            // @ts-ignore
            transitions.map(({ item , key , props }) => 
            item && <animated.div key={key} style={props}>
                 <div>
                    <Notifiation 
                    onclose={() => setResponse(false)}
                    title='!ایمیل ارسال شد' 
                    stay={3000}
                    message=' .کاربر گرامی لینک فعال سازی حساب کاربری به ایمیل شما ارسال شد . لطفا پس از مراجعه به ایمیل دکمه فعال سازی حساب کاربری را کلیک نمائید' 
                    />
                  </div>
                </animated.div>
            )}

            </div>
            <button className='my-5 mx-5' onClick={() => {setResponse(response ? false : true)}}> test btn </button>
        </div>
        <ModalFlow onClose={() => {changePasswordModal(false)}} closeOnOutsideClick={true} active={passwordModal} components={{CHANGE_PASSWORD : <ChangePassword/>,CHANGE_PASSWORD_SUCCESS : <ChangePasswordSucces/> }} />
        <ModalFlow onClose={() => {changeDeletePictureModal(false)}} closeOnOutsideClick={true} active={deletePictureModal} components={{DELETE_PICTURE : <DeletePicture/>}} />
        <ModalFlow onClose={() => {changeSwitchPictureModal(false)}} closeOnOutsideClick={true} active={siwtchPictureModal} components={{CHANGE_PICTURE : <SwitchPicture/>}} />
        
      </Style>)
}


Setting.LayoutType = 'profile';
Setting.LayoutFluid = true;

export default Setting;