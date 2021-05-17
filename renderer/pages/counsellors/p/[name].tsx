import { useState } from 'react';
import Style from 'app/styles/counsellorsPage';
import ContactUs from 'app/components/contactUs';
import Booking from "app/components/consultation/direct/Booking";
import CounsellorBooking from "app/components/pages/counsellors/counsellorBooking"
import CounsellorProfileCard from "app/components/pages/counsellors/counsellorProfileCard";
import {SELECT_DATE_AND_TIME, SELECT_DURATION, SUCCESS , SELECT_REQUEST_COUNSELLOR} from "app/constants/consultation";

const counsellors = ({slug}) => {
    const [ consultationType , setCounsultationType ] = useState('');
    const [ active , setActive ] = useState(false);
    const handleChange = ({title}) => { setCounsultationType(title); };

  

    return(
            <Style>
                <div className='row' >
                        <div className='w-100 pt-4 pb-0 pt-md-5 pb-md-5 container d-flex justify-content-center'>
                                <CounsellorProfileCard 
                                    onchange={handleChange} 
                                    setCounsellorRequest={setActive} 
                                    slug={slug}/>
                        </div>
                                <ContactUs/>       
                </div>

                    <Booking 
                    stepsOrder={{[SELECT_DURATION]: true,
                    [SELECT_DATE_AND_TIME]: true,
                    [SUCCESS]: true }} 
                    />
                    <CounsellorBooking active={active} onClose={() => setActive(false)}/>
            
            </Style>
    )
}

export const getServerSideProps = async ({query})  => {

    const { name } = query;
    let replace = name.split('-');

    // fetching data with city and cat queries 

    return ({
        props : {
            slug : { name : replace[0] , id : replace[1]}
        }
    })
}

counsellors.LayoutFluid = true;
export default counsellors;
