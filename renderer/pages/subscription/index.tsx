import Offers from 'app/components/pages/subscription/offers';
const offersData = [
     {          price : 100 ,
                type : 'معمولی',
                options:[
                    {title:'ساخت فیلان و بیسار زیاد',check:true},
                    {title:'ساخت فیلان و بیسار زیاد',check:false},
                    {title:'ساخت فیلان و بیسار زیاد',check:true},
                    {title:'ساخت فیلان و بیسار زیاد',check:true}
                    ]
     },
     {  
        type : 'پیشرفته',
        price : 100 ,
        options:[
            {title:'ساخت فیلان و بیسار زیاد',check:true},
            {title:'ساخت فیلان و بیسار زیاد',check:false},
            {title:'ساخت فیلان و بیسار زیاد',check:true},
            {title:'ساخت فیلان و بیسار زیاد',check:true}
            ]
     },
     {  
        type : 'معمولی' , 
        price : 100 ,
        options:[
            {title:'ساخت فیلان و بیسار زیاد',check:true},
            {title:'ساخت فیلان و بیسار زیاد',check:false},
            {title:'ساخت فیلان و بیسار زیاد',check:true},
            {title:'ساخت فیلان و بیسار زیاد',check:true}
            ]
     },
];

const Subscription = () => {
    return (
        <div className='container'>
            <div className='py-3 py-md-5 mt-md-5 mt-3'>
                <h1 className='title-medium text-center'>
                اشتراک های <span className='merlot'>
                     لامینگو 
                     </span> 
                </h1>
                <p className='secondary-gray text-center subtitle-small'>
                با استفاده از اشتراک های لامینگو، از امکانات ویژه برخوردار شوید   
                </p>
            </div>

            <div className='w-100 pt-3'>
                 <Offers data={offersData} />
            </div>

        </div>
    )
}

export default Subscription;