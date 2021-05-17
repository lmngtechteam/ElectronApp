import Style from 'app/styles/payment';
import DashedLine from 'app/components/dashedLine';
import CustomButton from 'app/components/common/customButton';
import {Check, X} from 'react-bootstrap-icons';
import React, {useEffect, useState} from "react";
import {getPaymentInfo, IPaymentInfo} from "../../../app/api/Payment";
import Helper from "../../../app/utils/Helper";
import {getPaymentLink} from "../../../app/api/Consultation";

const Response = (props) => {
    const {id} = props;
    const [isDisabled, setDisable] = useState(false)
    const [paymentData, setPaymentData] = useState<IPaymentInfo>({})
    useEffect(() => {
        getPaymentInfo({id: id})
            .then(res => {
                // @ts-ignore
                setPaymentData(res.data)
            })
    }, [])

    function startPayment() {
        setDisable(true);
        getPaymentLink({
            oid: parseInt(paymentData.oid)
        }).then(res => {
            // @ts-ignore
            window.location.href = res.data.url
        })

    }

    return (
        <Style>
            <div className='w-100 h-100 position-relative py-md-5'>

                <div className='response-container'>
                    {Object.keys(paymentData).length ? (
                        <>
                            <div className='py-md-5 py-5 text-md-right text-center response-box my-md-5 my-5'>

                                <div
                                    className='px-md-5 px-5 d-flex flex-column align-items-center align-items-md-center'>

                                    <div className={`${paymentData.status ? 'success' : 'error'} header-icon`}>
                                        {paymentData.status ? <Check/> : <X/>}
                                    </div>
                                    <div className='header-title pt-3 mt-1'>
                                        <h3>
                                            {paymentData.status ? 'پرداخت موفق' : 'پرداخت ناموفق'}
                                        </h3>
                                    </div>
                                    <div className='date-and-time'>
                                        <p className='m-0'>
                                            {paymentData.time}
                                        </p>
                                    </div>

                                    <div className='information-box py-4'>
                                        <div className='information-item title pl-4'>
                                            <p>کد پیگیری</p>
                                            <p>شماره سفارش</p>
                                        </div>
                                        <div className='information-item value'>
                                            <p>{paymentData.tracking}</p>
                                            <p>{id}</p>
                                        </div>
                                    </div>

                                </div>

                                {/* i will refactor this section 100%  */}
                                <div className='circle-box'>
                                    <div className='circle-left'/>
                                    <DashedLine className='dashed-line'/>
                                    <div className='circle-right'/>
                                </div>

                                <div className='px-md-5 px-5 d-flex flex-column align-items-md-center'>
                                    <div className='contract-information'>
                                        <p className='m-0 name'>
                                            {paymentData.title}
                                        </p>
                                        <p className='m-0 date-and-time'>
                                            {paymentData.subtitle}
                                        </p>
                                        <p className='m-0 price pt-3'>
                                            مبلغ <span> {Helper.money(paymentData.price)} </span> تومان
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {!paymentData.status ? (
                                <div className='px-5'>
                                    <CustomButton
                                        text={isDisabled ? (<i className="fa fa-spin fa-spinner fa-2x"/>) : 'پرداخت مجدد'}
                                        onClick={startPayment}
                                        disabled={isDisabled}
                                        style={{height: 65, fontWeight: 'bold', fontSize: 18}}
                                        className='w-100'/>
                                </div>
                            ) : ''}
                        </>
                    ) : ''}


                </div>
            </div>
        </Style>
    )
}


export const getServerSideProps = async (context) => {
    const {params: {id}} = context;

    return ({
        props: {
            id
        }
    })

}

Response.LayoutFluid = true;
export default Response;