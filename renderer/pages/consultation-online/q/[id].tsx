import Breadcrumb from "app/components/breadcrumb"
import QuestionCard from 'app/components/quesCardwithAwnser'
import CustomButton from 'app/components/common/customButton';

const fakeData = {
    code: "968187",
    cats: ["مالی ", "کسب و کار"],
    content: "\nبا سلام و خسته نباشید، قربان ما سه نفر هستیم که از طریق اینترنت با هم آشنا شدیم و میخوایم یک محصولی رو سه نفری با هم خریداری کنیم و هر سه ازش استفاده کنیم، هر کدوم از ما در یک جای کشور قرار داره ، من تهرانم اونام سمت آذربایجان ، یکی از ما سه نفر باید کل مبلغ ",
    subject: "نحوه تنظیم قرارداد کوچک ۳ نفره چگونه است؟",
    time: "۰۱ آذر ۱۳۹۹ ساعت ۱۸:۳۹",
    tags: ["مالی ", "خانواده "," کیفری"],
    answers:[
      {
        content:"با سلام، قانوناً به دلیل اینکه نصّاب در استخدام شما بوده و حقوق ماهانه دریافت میدارد و به دستور شما فعالیت انجام میدهد، مشمول قانون کار و مزایای مربوطه در قانون تأمین اجتماعی ـ از جمله بیمه ـ است و به تعریف آن قانون، شما «کارفرما» و ایشان «کارگر» است؛ با این حال، شما میتوانید قرارداد خود را در قالب قرارداد خصوصی ارائۀ خدمات منعقد نمایید و عنوان قرارداد کار را بر آن قرار ندهید. در هر صورت، رویۀ شعب رسیدگی ادارۀ کار واحد نیست و ممکن است کارگر شما حقوق خود را به موجب قانون کار در نزد این مرجع مطالبه کند. فارغ از آنکه چه عنوانی بر روی قرارداد خود نهاده باشید، اگر مرجع حل اختلاف تشخیص دهد که شرایط قانون کار بر این رابطه حکمفرماست، حکم به پرداخت حق بیمه خواهد داد. تنها کاری که میتوانید انجام دهید آن است که قرارداد خود را احتیاطاً در همان قالب منعقد کنید به طرزی که نصاب فرد مستقلی است که به شما ارائۀ خدمات میدهد." ,
        counselor:{
          name:"مهسا دهقان",
          title : "وکیل پایه یک دادگستری",
          url : "/counselor/مهسا-دهقان"
        }
      },
      {
        content:"با سلام، قانوناً به دلیل اینکهسلام. در این خصوص باید یک قرارداد خرید و فروش کالا یا خدمات تنظیم کنید. مورد مذکور در رابطه با تضمین کالاها هم در قالب یک بند در تعهدات فروشنده باید ذکر بشود. متن این قرارداد را می توانید در سایت نمایش بدهید و مشتری ها با پذیرش آن کالا را خریداری کنند. همچنین می توانید از خدمت امضای الکترونیک وبسایت لامینگو هم برای امضای قراردادهای خود استفاده بفرمایید." ,
        counselor:{
          name:"میلاد شجاعی",
          title : "مشاور حقوقی",
          url : "/counselor/میلاد-شجاعی"
        }
      }      
      ]
  };


const Questions = () => {

    const { subject , time , cats , answers , content} = fakeData;
   
    const keyValueCats = cats.map(e => ({label:e,value:e}));
    
    return(
        <div className='vertical-row'>
    
        <div className='pt-4 m-3'>
            <Breadcrumb slugs = {[...keyValueCats,{label:subject , value : subject}]} baseRoute='/consultation-online/c'/>
        </div>
        
        <div className='py-1'>
            <QuestionCard data={{ subject , time , answers , content }}/>
        </div>
    
        <div>

        <div className='m-3 pt-2 pb-4 d-flex justify-content-center w-100'>
        <CustomButton
                    theme='merlot'
                    style={{minHeight:50,maxWidth:300}}
                    className='px-5 w-100'
                    
                    text='پرسش خود را مطرح کنید' />
        </div>
        
        </div>

        </div>
    )
}

export const getServerSideProps = async (ctx)  => {
    const { query : { id }} = ctx;
    return ({
        props:{
            id : id
        }
    })
}


export default Questions;