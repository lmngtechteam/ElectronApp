import Style from 'app/styles/signature/panel';
import Header from 'app/components/pages/signature/panel/header';
import SubHeader from 'app/components/pages/signature/panel/subHeader';
import RightBar from 'app/components/pages/signature/panel/rightBar';

const SignaturePanel = () => {

    return(
        <Style>
            <div className='w-100 position-relative'>
                    <Header/>

                    <div className='position-fixed w-100' style={{top:80,bottom:0,right:0,left:0}}>

                    <div className='position-absolute d-none d-md-block' style={{right:0,top:0,bottom:0,width:330}}> 
                              <RightBar/> 
                    </div>

                    <div className='sidebar-padding sub-header-box'>
                        <div className='position-relative w-100'>
                              <SubHeader />
                        </div>
                    </div>

                    <div className='sidebar-padding' style={{background:'#f2f2f2',width:'100%',height:'100vh'}}> 
                        
                        <div  className='position-relative p-0 p-md-5 w-100 h-100'>
                        <div  style={{
                              margin:'0 auto',
                              boxShadow: '0 3px 14px 0 rgba(0, 0, 0, 0.1);',
                              background: 'white'}}    

                              className='w-100 px-0 editor-box px-md-5 h-100 position-relative'>

                        {/* <Scrollbars style={{direction:'ltr'}}> */}
                              <h1> editor is here </h1>
                        {/* </Scrollbars> */}

                        </div>
                        </div>
                        </div>

                    </div>
             </div>
        </Style>
    )
}

SignaturePanel.LayoutType = 'empty';

export default SignaturePanel;