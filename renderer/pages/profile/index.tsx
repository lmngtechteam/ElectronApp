import Style from 'app/styles/profile/index';
import { XCircle, GearFill, DoorOpenFill } from 'react-bootstrap-icons';
import CustomButton from 'app/components/common/customButton';
import { useState } from 'react';
import Table from 'app/components/table';
import { counsultationColumns , contractColumns} from 'app/components/pages/profile/table/configs/profile';
import { getProfileCounsultations } from 'app/api/Consultation';
import { getProfileContracts } from 'app/api/Contract';
import ChangePicture from 'app/components/pages/profile/setting/changeProfilePicture';
import SwitchPicture from 'app/components/pages/profile/setting/switchPicture';
import ModalFlow from 'app/components/ModalFlowCleaned';
import DeletePicture from 'app/components/pages/profile/setting/deletePicture';

const Profile = ({counsultations ,contracts }) => {

    const [counsultationsData ] = useState(counsultations);
    const [contractsData ] = useState(contracts);
    const [ deletePictureModal, changeDeletePictureModal ] = useState(false);
    const [ siwtchPictureModal, changeSwitchPictureModal ] = useState(false);

    return(  
              <Style>
              <div className='w-100'>
                        <div className='row p-0 m-0 py-5 px-1 px-md-3'>

                            <div className='col-12 col-md-0 d-md-none d-block'>
                              <div className='dashboard-header-mobile'>
                                <div className='d-flex justify-content-between'>
                                  <div className='d-flex align-items-center'>

                                    <div className='picture-box-mobile position-relative'>
                                      <img src='/images/profile/user-feedback.png'/>
                                      <ChangePicture handleChangePicture={() => {changeSwitchPictureModal(true)}} handleDeletePicture={() => {changeDeletePictureModal(true)}} />
                                    </div>
                                    <div className='user-name mr-2 d-flex flex-column align-items-center'>
                                      <h3 className='m-0 subtitle-medium'>علیرضا رضایی</h3>
                                      <p className='m-0 grayText subtitle-medium pt-1'>0923443323</p>
                                    </div>

                                  </div>

                                  <div className='d-flex align-items-center'>
                                       <div className='circle-item'> <GearFill/> </div>
                                       <div className='circle-item mr-2'> <DoorOpenFill/> </div>
                                  </div>

                                </div>
                               
                                <div className='pt-4 d-flex justify-content-between'>
                                  <div className='situ-box d-flex align-items-center justify-content-between flex-column pt-2'>
                                    <p className='fontnote bold m-0 text-center'>
                                    وضعیت هویتی
                                    </p>
                                    <div className='w-100 pt-2'>
                                    <CustomButton style={{width:'100%'}} text={<>
                                    مشاهده <img src='/images/profile/left-arrow.svg'/> 
                                    </>}/>
                                    </div>
                                  </div>
                                  <div className='situ-box d-flex align-items-center justify-content-between flex-column pt-2'>
                                    <p className='fontnote bold m-0 text-center'>
                                    وضعیت هویتی
                                    </p>
                                    <div className='w-100 pt-2'>
                                    <CustomButton style={{width:'100%'}} text={<>
                                    مشاهده <img src='/images/profile/left-arrow.svg'/> 
                                    </>}/>
                                    </div>
                                  </div>
                                  <div className='situ-box d-flex align-items-center justify-content-between flex-column pt-2'>
                                    <p className='fontnote bold m-0 text-center'>
                                    وضعیت هویتی
                                    </p>
                                    <div className='w-100 pt-2'>
                                    <CustomButton style={{width:'100%'}} text={<>
                                    مشاهده <img src='/images/profile/left-arrow.svg'/> 
                                    </>}/>
                                    </div>
                                  </div>
                                </div>
                              
                              </div>
                            </div>

                            <div className='col-md-12 d-md-block d-none col-0'>
                              <div className='dashboard-header row'>
                              <div className='col-3 d-flex align-items-center align-items-center'>
                                
                                  <div className='picture-box mw-100 position-relative'>
                                  
                                    <div className='picture-box-inside'>
                                      {/* <img src=''/> */}
                                      img
                                    </div>
                                    
                                    <ChangePicture handleChangePicture={() => {changeSwitchPictureModal(true)}} handleDeletePicture={() => {changeDeletePictureModal(true)}} />

                                  </div> 

                                  <div className='user-name mr-3 d-flex flex-column align-items-center'>
                                    <h3 className='m-0 subtitle-small'>علیرضا رضایی</h3>
                                    <p className='m-0 grayText subtitle-small pt-2'>0923443323</p>
                                  </div>

                                  </div>
                                  
                                  <div className='col-md-3'>
                                        <div className='bordered-box d-flex flex-column align-items-center'>
                                                    <p className='m-0 fontnote bold text-center'>وضعیت هویتی</p>
                                                    <div className='center-box'>
                                                      <XCircle style={{fontSize:40}} className='merlot text-center'/>
                                                    </div>
                                                    <CustomButton style={{width:125}} text='احراز هویت'/>
                                        </div>
                                  </div>

                                  <div className='col-md-3'>
                                        <div className='dashed-box d-flex flex-column align-items-center'>
                                                    <p className='m-0 fontnote bold text-center'>موجودی حساب</p>
                                                    <div className='center-box'>
                                                      sign box
                                                    </div>
                                                    <div className='d-flex align-items-center justify-content-between'>
                                                      <p style={{width:125}} className='m-0 mr-2 text-center merlot pointer'> تغییر امضا </p>
                                                    </div>
                                        </div>
                                  </div>

                                  <div className='col-md-3'>
                                      <div className='bordered-box d-flex flex-column align-items-center'>
                                                    <p className='m-0 fontnote bold text-center'>موجودی حساب</p>
                                                    <p className='center-box m-0 d-flex align-items-center'> <span className='subtitle-large merlot'> 25,000 </span> تومان </p>
                                                    <div className='d-flex align-items-center justify-content-between'>
                                                      <CustomButton className='pr-2' style={{width:125}} text='احراز هویت'/>
                                                      <p style={{width:125}} className='m-0 mr-2 merlot pointer'> تاریخچه پرداخت </p>
                                                    </div>
                                        </div>
                                  </div>

                              </div>
                            </div>
                            <div className='col-md-6 col-12 pt-3'>
                                <div  style={{background:'white',borderRadius:20}} className='p-3'>
                                    <h5 className='py-2 pb-3'> مشاره حقوقی </h5>
                                    <Table type='simple' columns={counsultationColumns} data={counsultationsData}/>
                                    <div    style={{color:'#801323',
                                            fontSize:22,
                                            fontWeight:500,
                                            borderTop: '1px solid rgba(0,0,0,.12)'}} 
                                            className='show-more-box d-flex justify-content-center'>

                                            <p className='m-0 pt-3 pb-1 pointer'>مشاهده بیشتر </p>
                                   </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 pt-3'>
                                <div  style={{background:'white',borderRadius:20}} className='p-3'>
                                    <h5 className='py-2 pb-3'> قرارداد ها </h5>
                                    <Table type='simple' columns={contractColumns} data={contractsData}/>
                                    <div    style={{color:'#801323',
                                            fontSize:22,
                                            fontWeight:500,
                                            borderTop: '1px solid rgba(0,0,0,.12)'}} 
                                            className='show-more-box d-flex justify-content-center'>

                                            <p className='m-0 pt-3 pb-1 pointer'>مشاهده بیشتر </p>
                                   </div>
                                </div>
                            </div>
                        </div>
            </div>
            <ModalFlow fullOnMobile={false} onClose={() => {changeSwitchPictureModal(false)}} closeOnOutsideClick={true} active={siwtchPictureModal} components={{CHANGE_PICTURE : <SwitchPicture/>}} />
            <ModalFlow fullOnMobile={false} onClose={() => {changeDeletePictureModal(false)}} closeOnOutsideClick={true} active={deletePictureModal} components={{DELETE_PICTURE : <DeletePicture/>}} />
            <ModalFlow fullOnMobile={false} onClose={() => {changeSwitchPictureModal(false)}} closeOnOutsideClick={true} active={siwtchPictureModal} components={{CHANGE_PICTURE : <SwitchPicture/>}} />
            </Style>
            )
}

export const getServerSideProps =  async () => {
  const counsultation = await getProfileCounsultations();
  const contracts = await getProfileContracts({query:null});
  return({
    props:{
      counsultations : counsultation,
      contracts : contracts
    }
  })
}

Profile.LayoutType = 'profile';
Profile.LayoutFluid = true;

export default Profile;