import Style from 'app/styles/audit';
import iconPicker from 'app/components/pages/auditTrail/iconPicker'
import Condition from 'app/components/condition';

const fakeData = [
{status:'send',statusTitle:'ارسال شد',date:'22/10/2012',time:'12:01:33',content:[{title:'ارسال شده از',value:'aliakbari@gmail.com'},,{title:'برای قرارداد',value:'akbarabas@gmail.com'}]},
{status:'view',statusTitle:'مشاهده شد',date:'22/10/2012',time:'12:01:33',content:[{title:'ارسال شده از',value:'aliakbari@gmail.com'},{title:'برای قرارداد',value:'akbarabas@gmail.com'}]},
{status:'signature',statusTitle:'امضا شد',date:'22/10/2012',time:'12:01:33',content:[{title:'ارسال شده از',value:'aliakbari@gmail.com'},{title:'برای قرارداد',value:'akbarabas@gmail.com'}]},
{status:'send',statusTitle:'ارسال شد',date:'22/10/2012',time:'12:01:33',content:[{title:'ارسال شده از',value:'aliakbari@gmail.com'},{title:'برای قرارداد',value:'akbarabas@gmail.com'}]},
];

const Audit = () => {
    return(
        <Style>
        <div>
            <div className='container py-md-5 py-3'>
                <div className='d-flex justify-content-between py-4'>
                     <img className='logo' src='/images/auditTrail/lawmingo.svg'/>
                     <p className='subtitle-medium grayText m-0'>جزئیات قرارداد</p>
                </div>

                <div className='line'/>

                <div className='d-flex flex-column py-4'>
                    <div className='d-flex align-items-center w-100 py-3'>
                        <p className='subtitle-medium grayText m-0 w-25'>
                        عنوان قرارداد
                        </p>
                        <p className='subtitle-medium m-0'>
                        امضای قرارداد مدیر فنی
                        </p>
                    </div>
                    <div className='d-flex align-items-center w-100 py-3'>
                        <p className='subtitle-medium grayText m-0 w-25'>
                        نام فایل
                        </p>
                        <p className='subtitle-medium m-0'>
                        Designer-Hiring-Contract.pdf
                        </p>
                    </div>
                    <div className='d-flex align-items-center w-100 py-3'>
                        <p className='subtitle-medium grayText m-0 w-25'>
                        شناسه قرارداد
                        </p>
                        <p className='subtitle-medium m-0'>
                        srg23sdfg3563
                        </p>
                    </div>
                    
                    <div className='d-flex align-items-center w-100 py-3'>
                        <p className='subtitle-medium grayText m-0 w-25'>
                        وضعیت
                        </p>
                        <p className='subtitle-medium m-0'>
                        <Condition value='ارسال شده'/>
                        </p>
                    </div>
                    
                </div>

                <div className='line'/>

                <div className='d-flex justify-content-between py-4'>
                     <p className='subtitle-medium grayText m-0'>جزئیات قرارداد</p>
                </div>

                <div className='w-100'>
                      {fakeData && fakeData.map(e => {
                          return(
                              <div className='row pt-md-3 pt-3'>
                                  <div className='col-md-2 col-6'>
                                      <div className='item-box d-flex flex-column align-items-center'>
                                        <span className='status-icon'> {iconPicker(e.statusTitle)} </span>
                                        <span className='content-medium text-center grayText pt-1 '> {e.statusTitle} </span>
                                      </div>
                                  </div>
                                  <div className='col-md-3 col-6'>
                                       <div className='item-box d-flex flex-column align-items-center'>
                                             <span className='content-medium'> {e.date} </span>
                                             <span className='content-medium grayText pt-1'> {e.time} </span>           
                                       </div>
                                  </div>
                                  <div className='col-md-7 col-12 pt-md-0 pt-2'>
                                        <div className='item-box'>
                                             {e.content && e.content.map(l => {
                                              return <span className='m-0 content-medium'>{l.title} <span style={{color:'#0077ff'}}>({l.value})</span>{' '}</span>                                           
                                            })}
                                        </div>
                                  </div>
                              </div>
                          )
                      })}
                </div>

            </div>
        </div>
        </Style>
    )
}

Audit.LayoutType='empty'
export default Audit;
