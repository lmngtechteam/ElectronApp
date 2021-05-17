import Style from 'app/styles/signup';
import Header from 'app/layout/signatureLayout/defaultHeader';
import { Scrollbars } from 'react-custom-scrollbars';
import RightBar from 'app/components/pages/signature/rightBar';
import LeftBar from 'app/components/pages/signature/leftBar';
import Editor from 'app/components/tinyeditor';
import SendingFlow from 'app/components/pages/signature/sendingFlow';
import { useState } from 'react';

const  a = `
<p dir="ltr" style="line-height: 1.38; text-align: right; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">قرارداد</span></p>
<p dir="ltr" style="line-height: 1.38; text-align: right; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">ماده 1 - طرفین قرارداد</span></p>
<p dir="ltr" style="line-height: 1.38; text-align: right; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial; color: #ff0000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">1 - 1&nbsp; به شماره شناسنامه </span> <button font-size:17 id="kkvuiw" class="buttons" style="color: #801323; background: #fceaec; outline: unset !important; height: 30px; border: 1px solid #801323; border-radius: 5px; min-width: 100px;"> امضا + icon </button> <span style="color: #ff0000; font-family: Arial; font-size: 11pt; white-space: pre-wrap;"> و کد ملی &nbsp; به نشانی&nbsp; ، کدپستی &nbsp; و شماره تماس &nbsp; با رایانامه &nbsp; که از این پس طرف اول نامیده می&zwnj;شود.&nbsp;</span></p>
<p dir="rtl" style="line-height: 1.38; text-align: right; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">منظور از دارایی&zwnj;های نامشهود در این قرارداد عبارت است از</span></p>
<p dir="ltr" style="line-height: 1.38; text-align: right; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial; color: #ff0000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">1 -</span> <button fontsize="15" style="color:#801323;background:#fceaec;outline:unset !important;height:30px;border:1px solid #801323;border-radius:5px; min-width:100px;" id="7acusj" class="buttons"> <span> امضا + icon </span> </button> <span style="font-size: 11pt; font-family: Arial; color: #ff0000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"> 2&nbsp; با شماره شناسنامه &nbsp; و کدملی &nbsp; به نشانی&nbsp; ، کدپستی &nbsp; با شماره تماس &nbsp; و رایانامه &nbsp; که از این پس طرف دوم نامیده می&zwnj;شود.</span><span style="font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;</span></p>
<p dir="ltr" style="line-height: 1.38; text-align: right; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">ماده 2 - موضوع قراردا</span></p>
<p><span id="docs-internal-guid-4d243c3b-7fff-0627-d80c-f12475486f87"><strong id="docs-internal-guid-2a56fcec-7fff-e100-f106-5db10b010e7b" style="font-weight: normal;">&nbsp;</strong></span></p>
<p dir="ltr" style="line-height: 1.38; text-align: right; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">قرارداد حاضر در راستای حفاظت از</span> <button fontsize='20' id="na8txt" class="buttons" style="color: #801323; background: #fceaec; outline: unset !important; height: 30px; border: 1px solid #801323; border-radius: 5px; min-width: 100px;"> متن زیبای بزرگ + icon </button> <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;"> دارایی&zwnj;های مادی و معنوی و اطلاعات محرمانه تحت مالکیت یا کنترل قانونی طرفین که در جریان مذاکرات و مباحث آتی جهت انعقاد قرارداد نهایی ارایه می&zwnj;گردد توسط امضاء کنندگان قرارداد و به شرح مواد آتی و با استناد به </span> <button id="8xlj59" class="buttons" style="color: #801323; background: #fceaec; outline: unset !important; height: 30px; border: 1px solid #801323; border-radius: 5px; min-width: 100px;"> امضا + icon </button> <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">ماده 10 قانون مدنی منعقدشده و مفاد آن برای طرفین و قائم&zwnj;مقام قانونی ایشان الزام&zwnj;آور است.</span></p>
<p dir="ltr" style="line-height: 1.38; text-align: right; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">ماده 3 - دارایی&zwnj;های مادی و معنوی مشمول قرارداد</span></p>
<p>&nbsp;</p>
`;

const Signature = () => {

      const [ modalVisibility , setModalVisibility ] = useState(false);
      

      const defaultval = {
        data : `<p id='jafar' abc='abc'>نام ...http://insertdate.com/. نام خانوادگی ..http://insertdate.com/..</p><br />
        <h3>این متن از html ساخته شده است</h3>
        <input placeholder='hi'/>
        <button> jafar </button>
        <a href="http://www.facebook.com">Example link</a>
        <div> boze asb </div>
        `,attributes : [{fontSize:'20'},{fontSize:'16'}]
      }
      



    return(
        <Style>
            <div className='w-100 position-relative'>
                    <Header/>
                    
                    <div className='position-fixed w-100' style={{top:80,bottom:0,right:0,left:0}}>

                    <div className='position-absolute' style={{right:0,top:0,bottom:0,width:330}}> 
                        <RightBar onSendClick={() => {setModalVisibility(true)}}/> 
                        <SendingFlow onClose={() => {setModalVisibility(false)}} active={modalVisibility}/>
                    </div>

                    <div style={{background:'#f2f2f2',width:'100%',paddingRight:330,paddingLeft:265,height:'100vh'}}> 
                        
                        <div  className='position-relative p-5 w-100 h-100'>
                        <div  style={{
                              boxShadow: '0 3px 14px 0 rgba(0, 0, 0, 0.1);',
                              background: 'white'}}    
                              className='w-100 h-100'>
                        <Scrollbars style={{direction:'ltr'}}>
                              
                              <Editor
                                // onchange={(e) => {console.log(e,'value is here')}}
                                initialValue = {a}
                              />

                        </Scrollbars>
                        </div>
                        </div>
                        </div>

                    <div className='position-absolute' style={{left:0,top:0,bottom:0,width:265}}> 
                        <LeftBar />
                    </div>
                    </div>
             </div>
        </Style>
    )
}

Signature.LayoutType = 'empty';

export default Signature;