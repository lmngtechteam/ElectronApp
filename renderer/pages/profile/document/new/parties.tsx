

import Style from 'app/styles/profile/signature';
import CustomInput from 'app/components/common/customInput';
import CustomButton from 'app/components/common/customButton';
import { useFieldArray , useForm } from 'react-hook-form';
import { ArrowLeft } from 'react-bootstrap-icons';
import { emailRegex } from 'app/utils/patterns';
import { DragDropContext,Draggable, Droppable } from 'react-beautiful-dnd';
import Dot from 'app/components/dotBox';
import { useSelector , useDispatch } from 'react-redux';
import { SET_OTHER_PARTIES, REMOVE_OTHER_PARTIES } from '../../../../store/actions/types';
import { useRouter } from 'next/router';
import BreadCrumb from 'app/components/pages/profile/contracts/breadCrumb';

const Signature = () => {
    // @ts-ignore
    const { otherParties } = useSelector(e => { return e.document});
    const dispatch = useDispatch();
    const router = useRouter();

    const { register, control, handleSubmit,errors, getValues } = useForm({
      defaultValues: {
        data : otherParties && otherParties.length > 0 ? otherParties : [
          {firstName : '' , lastName :'',email :'', id:'default-first-element-id'}
        ]
      }
    });

    const { fields, append, remove, swap } = useFieldArray({
      name: 'data',
      control
    });
    
    const handleChange = () => {
        dispatch({type:SET_OTHER_PARTIES,payload:getValues().data})
    }

    function handleSubmitForm(e){
      console.log(e,'submited')
      router.push('/profile/document/new/editor');
    }

    const onDragEnd = (result) => {
      if (!result.destination) {
        return;
      }

      function swaper(x, y){
        let list = getValues().data;
        var b = list[y];
        list[y] = list[x];
        list[x] = b;
        return list;
        }

      dispatch({type:SET_OTHER_PARTIES,payload:swaper(result.source.index,result.destination.index)});
      swap(result.source.index,result.destination.index);
    }

    return( 
            <Style>
              <div className='signature-main p-md-5 p-2 d-flex flex-column position-relative align-items-center justify-content-center'>
                    <div className='w-100 d-flex justify-content-center'>
                      <BreadCrumb activekey='parties'/>
                    </div>
                    <div className='w-100 m-md-5 text-center signature-forward-box p-md-5 p-3 d-flex align-items-center flex-column position-relative'>
                      <h3 className='m-0 upload-box-title py-3'>
                        گیرندگان را اضافه کنید
                      </h3>
                      <p className='m-0 upload-box-description pt-2 pb-4'>
                        چه کسی این قرارداد را دریافت می کند؟
                      </p>
                      <form onChange={handleChange} >
                         <DragDropContext onDragEnd={onDragEnd}>
                           <Droppable droppableId="draggable">
                              {(provided) => {return (
                              <div
                              className='w-100' 
                              {...provided.droppableProps}
                              ref={provided.innerRef}>
                              {fields && fields.map((e,index) => {
                              console.log(e,'e');
                              return ( 
                              <Draggable onDrag={() => {console.log('hii')}} key={e.id} index={index} draggableId={e.id}> 
                              {(provided,snapshot) => { 
                              return (
                              <div 
                                key={e.id}
                                className={`mt-3 d-flex align-item-center`}
                                ref={provided.innerRef} {...provided.draggableProps}  >
                                <span className='ml-2 d-flex align-items-center' {...provided.dragHandleProps} > 
                                      <Dot data={[2,3]} margin={1}/>
                                </span>
                                <div className={`d-flex flex-column w-100 px-4 forward-form-box py-3 d-flex align-items-center flex-column  ${snapshot.isDragging?'isDragging':''}`}> 
                                <div className='w-100 forward-item row p-0'>
                                     <div className='col-md-4 col-12 px-1 d-flex flex-column'>
                                          <CustomInput 
                                          key={e.id}
                                          name={`data[${index}].email`} 
                                          haveError={errors && errors.data && errors.data[index] && errors.data[index]['email'] ? true:false}
                                          innerRef={register({
                                            required: "required",
                                            pattern: {
                                              value: emailRegex,
                                              message: "آدرس ایمیل اشتباه است*"
                                            }
                                          })} 
                                          defaultValue = {e.email}
                                          placeholder='آدرس ایمیل'/>
                                          {errors && errors.data && errors.data[index] && errors.data[index]['email'] &&
                                          <div className='pt-2'>
                                            <p className='m-0 mr-1 error text-right'> {errors.data[index]['email'] && errors.data[index]['email'].type && errors.data[index]['email'].type === 'required' ? 'این فیلد اجباریست' : errors.data[index]['email'].message } </p>
                                          </div>
                                          }
                                      </div>
                                     <div className='col-md-3 col-12 pt-md-0 pt-2 px-1 d-flex flex-column'>
                                          <CustomInput 
                                          defaultValue = {e.firstName}
                                          key={e.id}
                                          name={`data[${index}].firstName`} 
                                          innerRef={register({required: true})} 
                                          haveError={errors && errors.data && errors.data[index] && errors.data[index]['firstName'] ? true:false}
                                          placeholder='نام'/>
                                          {errors && errors.data && errors.data[index] && errors.data[index]['firstName'] &&
                                          <div className='pt-2'>
                                            <p className='m-0 mr-1 error text-right'> {errors.data[index]['firstName'] && errors.data[index]['firstName'].type === 'required' && 'این فیلد اجباریست' }</p>
                                          </div>
                                          }
                                      </div>
                                     <div className='col-md-4 col-12 pt-md-0 pt-2 px-1'>
                                          <CustomInput
                                          key={e.id}
                                          defaultValue = {e.lastName}
                                          name={`data[${index}].lastName`} 
                                          innerRef={register({required: true})} 
                                          haveError={errors && errors.data && errors.data[index] && errors.data[index]['lastName'] ? true:false}
                                          placeholder='نام خانوادگی'/>
                                          {errors && errors.data && errors.data[index] && errors.data[index]['lastName'] &&
                                          <div className='pt-2'>
                                            <p className='m-0 mr-1 error text-right'> {errors.data[index]['lastName'] && errors.data[index]['lastName'].type === 'required' && 'این فیلد اجباریست' }</p>
                                          </div>
                                          }
                                      </div>
                                     <div className='col-md-1 pt-2'>
                                      {index === 0 ? <img style={{width:14}} src='/images/icons/android-delete.svg'/> 
                                      :
                                      <img className='pointer' onClick={() => {remove(index)}} style={{width:14}} src='/images/icons/android-delete-red.svg'/>}
                                </div>
                                </div>
                                </div>
                              </div>)}}
                              </Draggable>)})}
                              {provided.placeholder}
                              </div>)
                              }}
                          </Droppable> 
                         </DragDropContext>

                      <div className='w-100 d-flex align-items-center justify-content-between pt-4'>
                        <p 
                        onClick={() => { append({ firstName: "" , lastName : "", email : "" }) }} 
                        className='m-0 add pointer'> اضافه کردن </p>
                        <div>
                          <CustomButton 
                          onClick={handleSubmit(handleSubmitForm)}
                          style={{height:40,fontSize:16,fontWeight:'bold'}} 
                          className='px-5' 
                          text={ <p className='m-0'>مرحله بعد <ArrowLeft className='mr-1' style={{fontSize:20}}/></p> } />
                        </div>
                      </div>
                        </form>
                    </div>
              </div>
            </Style> 
          )
}


Signature.LayoutType = 'profile';
Signature.LayoutFluid = true;

export default Signature;