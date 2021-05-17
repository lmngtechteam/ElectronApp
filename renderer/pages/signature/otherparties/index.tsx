import { useState , useEffect} from 'react';
import Style from 'app/styles/signature/otherparties';
import WelcomToLawmingo from 'app/components/pages/signature/otherparties/welcomeToLawmingo';
import Authentication from 'app/components/pages/signature/otherparties/authentication';
import AuthenticationRejection from 'app/components/pages/signature/otherparties/authenticationRejection';
import Otp from 'app/components/pages/signature/otherparties/otp';
import DotBox from 'app/components/dotBox';

const Panel = () => {
    const [ active, setActive ] = useState('WELCOME_TO_LAWMINGO');
    const onChange = (e) => { setActive(e) };
    
    const handleAuthontication = (values) => {
        //fetch data at here
        setActive('OTP')
        // or national code rejection page
        // setActive('AUTHENTICATION_REJECTION')
    }
    
    const handleSendOtp = (otpCode) => {
        //sending otp code width phonenumber to server
    }

    const components = {
                         WELCOME_TO_LAWMINGO : <WelcomToLawmingo handleChange={onChange}/> ,
                         AUTHENTICATION : <Authentication handleAuth={handleAuthontication} /> ,
                         OTP : <Otp handleOtp={handleSendOtp}/>,
                         AUTHENTICATION_REJECTION : <AuthenticationRejection handlePrev={() => {setActive('AUTHENTICATION')}}/>
                        }

    const renderFarm = () => {return (components[active])};

    return <Style> 
             <div className='w-100'>
                 <div className='d-flex align-items-center justify-content-center h-100 py-5'>

                        <div className='other-parties-box position-relative'>

                        <div className='dots-container-one position-absolute dot-right'>
                            <DotBox data={[6,5]} margin={10}/>
                        </div>
                        
                        {renderFarm()}

                        <div className='dots-container-one position-absolute dot-left'>
                            <DotBox data={[6,5]} margin={10}/>
                        </div>

                        </div>
                 </div>
             </div>
           </Style>
}


Panel.LayoutFluid = true;

export default Panel;