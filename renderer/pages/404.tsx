import React from 'react'
import Lottie from 'react-lottie';
import animationData from './../app/lotties/404-planet-animation.json';
import Button from "../app/components/common/Button";
class Custom404 extends React.Component{
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid"
            }
        };
        return (
            <div className="row justify-content-center text-center">
                <div className="col-12">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                        <Lottie
                            height={300}

                            options={defaultOptions}
                        />
                    <br/>
                    <br/>
                    <h4>صفحه مورد نظر یافت نشد !</h4>
                    <br/>
                    <p>متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه </p>
                    <br/>
                    <Button href={"/"} color={"merlot"} title="بازگشت به صفحه اصلی"/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>
            </div>
        );
    }
}
// @ts-ignore
export default Custom404;