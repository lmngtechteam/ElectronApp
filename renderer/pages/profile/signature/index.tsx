

import Style from 'app/styles/profile/signature';
import CustomButton from 'app/components/common/customButton';
import { FileEarmarkArrowUp , ExclamationCircle, ArrowLeft } from 'react-bootstrap-icons';
import { useState } from 'react';
import Link from 'next/link';
import { Progress } from 'reactstrap';

const Signature = () => {
    const [ selected , setSelected ] = useState(false);
    const [ files , setFiles ] = useState([]);
    const [ progress , setProgress ] = useState(0);

    async function postData(file){
      //post file in here with api

        let int = setInterval(() => {
          setProgress((e) => {
            if(e === 100){
              clearInterval(int);
              return e;
            }
            return e + 1;
          });
        },300)

      //after data posted set progress to 100
    }

    function onChange(e) {
      var val = e.target.files;
      var filesArr = Array.prototype.slice.call(val);
      setFiles([...files, ...filesArr]);
      postData(filesArr);
    }

    function handleSelectFile(e) {
      setSelected(true);
      onChange(e);
    }


    return( 
            <Style>
              <div className='signature-main p-md-5 p-2 d-flex position-relative align-items-md-center justify-content-md-center'>
                    <div className='m-md-5 text-center signature-upload-box p-md-5 p-3 d-flex align-items-center flex-column position-relative'>
                      { !selected ? 
                      <>
                      <h3 className='m-0 upload-box-title py-3'>
                        فایل خود را آپلود کنید
                      </h3>
                      <p className='m-0 upload-box-description py-3'>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                      </p>
                      <div className='d-flex justify-content-center py-3 position-relative pointer'>
                        <input type='file' onChange={handleSelectFile} className='position-absolute w-100' style={{opacity:0,height:55}}/>
                        <CustomButton style={{height:55,fontSize:16,fontWeight:'bold'}} className='px-4' icon={<FileEarmarkArrowUp style={{fontSize:20}}/>} text={'اپلود قرارداد جدید'}/>
                      </div>
                      <Link href='profile/contracts py-3'>
                            <a className='my-contracts-link'>
                            قرارداد های من
                            </a>
                      </Link>
                      </>
                      :
                      <>
                      <h3 className='m-0 upload-box-title py-2 pt-3'>
                        درحال آپلود
                      </h3>
                      <p className='m-0 file-name'>
                        {files && files[0] && files[0].name && files[0].name}
                      </p>
                      <div className='upload-progress d-flex justify-content-center py-2 w-100'>
                        <Progress className='w-100' value={progress} />
                      </div>
                      <div className='progress-value py-2'>
                        {progress}%
                      </div>
                      <div className='py-3'>
                          <CustomButton disabled={progress < 100} style={{height:55,fontSize:16,fontWeight:'bold'}} className='px-4' text={ <p className='m-0'>مرحله بعد <ArrowLeft className='mr-1' style={{fontSize:20}}/></p> } />
                      </div>
                      </>
                      }
                    </div>

                    { !selected && <div>
                      <p style={{fontSize:14,color:'#919399'}} 
                      className='m-0 position-absolute fixed-bottom p-3 text-center'>
                      <ExclamationCircle />   فایل های   PDF, Word, PowerPoint, JPG, PNG  
                      </p>
                    </div> }
              </div>
            </Style> 
          )
}


Signature.LayoutType = 'profile';
Signature.LayoutFluid = true;

export default Signature;