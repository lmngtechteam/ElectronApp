import DotBox from 'app/components/dotBox';
import Style from 'app/styles/payment';
import DashedLine from 'app/components/dashedLine';
import CustomButton from 'app/components/common/customButton';
import {getInvoiceData, getPaymentLink, IConsultationInvoice} from "../../../app/api/Consultation";
import React, {useEffect, useState} from "react";
import Helper from "../../../app/utils/Helper";
import {useRouter} from "next/router";

interface IInvoiceProps {
    id: number
}

const Invoice = (props: IInvoiceProps) => {
    let orderId = props.id;
    const [isDisabled, setDisable] = useState(false)
    const [invoice,setInvoice] = useState<IConsultationInvoice>({});

    useEffect(()=>{
        getInvoiceData({id:orderId})
            .then(res=>{
                // @ts-ignore
                setInvoice(res.data)
            })
    },[props.id]);

    function startPayment() {
        setDisable(true);
        getPaymentLink({
            oid: orderId
        }).then(res => {
            // @ts-ignore
            window.location.href = res.data.url
        })

    }

    return (
        <Style>
            {Object.keys(invoice).length ? (
                <div className='w-100 h-100 position-relative py-md-5'>
                    <div
                        className='text-md-right text-center factor-box my-md-5 my-5 p-md-5 p-5 d-flex flex-column align-items-md-center position-relative'>
                        <div className='dots-container-one position-absolute d-none d-md-block'
                             style={{right: '-81px', top: '-52px', zIndex: -1}}>
                            <DotBox data={[7, 8]} margin={10}/>
                        </div>
                        <div className='dots-container-two position-absolute  d-none d-md-block'
                             style={{left: '-114px', bottom: '-44px', zIndex: -1}}>
                            <DotBox data={[7, 8]} margin={10}/>
                        </div>
                        <h3 className='title'>{invoice.title}</h3>
                        <p className='information pt-md-3 pt-3 text-center'>
                            {invoice.subtitle}
                        </p>

                        <DashedLine/>
                        <div className='information-item py-md-4 py-4'>
                            <p>
                                قیمت خرید: <span> {Helper.money(invoice.price)}  </span> تومان
                            </p>
                        </div>
                        <CustomButton
                            onClick={startPayment}
                            disabled={isDisabled}
                            style={{height: 65, fontWeight: 'bold', fontSize: 18}}
                            text={isDisabled ? (<i className="fa fa-spin fa-spinner fa-2x"/>) : 'پرداخت و خرید محصول'}
                            className='w-100'/>
                    </div>
                </div>
            ) : '' }
        </Style>
    )
}

Invoice.LayoutFluid = true;

Invoice.getInitialProps = async (ctx) => {
    // @ts-ignore
    return {
        id: ctx.query.id
    }
}

export default Invoice;