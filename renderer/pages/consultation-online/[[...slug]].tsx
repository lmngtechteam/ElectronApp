import React from 'react'
import Link from 'next/link'
import Helper from 'app/utils/Helper'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import QuesCard from 'app/components/quesCard'
import ModalFlow from 'app/components/ModalFlow'
import RowDivider from 'app/components/rowDivider'
import { IQuestions } from "app/api/OnlineConsultation"
import NavigationBar from 'app/components/navigationBar'
import { getQuestions } from "app/api/OnlineConsultation"
import InfiniteScroll from 'react-infinite-scroll-component'
import CustomButton from 'app/components/common/customButton';
import Success from 'app/components/pages/onlineConsultation/modal/Success'
import InsertQuez from 'app/components/pages/onlineConsultation/modal/InsertQuez'

interface IPageProps {
    questions: IQuestions[],
    slug?: any
}

const navigationBarOptions = [
                              {label:'همه ی سوالات',value:'همه ی سوالات'},
                              {label:'کسب و کار',value:'کسب و کار'},
                              {label:'تجارت و بازرگانی',value:'تجارت و بازرگانی'},
                              {label:'امور ثبتی',value:'امور ثبتی'},
                              {label:'مالیات',value:'مالیات'},
                              {label:'خانواده',value:'خانواده'},
                              {label:'ثبت احوال',value:'ثبت احوال'},
                              {label:'اسناد رسمی',value:'اسناد رسمی'},
                              {label:'کیفری',value:'کیفری'}
                            ];


class ConsulationOnline extends React.Component<IPageProps> {

    state = { row : 10 , data : [] , hasMore : true , activeRow : 0 , modalVisibility : false}
    setRow = (e) => this.setState({row:e})
    setData = (e) => this.setState({data:e})
    setHasMore = (e) => this.setState({hasMore:e})
    setActiveRow = (e) => this.setState({activeRow:e})

    getData =  async () => {
        const { slug } = this.props;
        const { row , activeRow , data} = this.state;

        if(row !== activeRow){
            try{
                const res = await getQuestions( slug && slug[1] ? slug[1] : false , row  );
                if(res && res.length>0){
                    setTimeout(() => {
                        this.setRow(row + 10);
                        this.setActiveRow( activeRow + 10)
                        this.setData([...data,...res]);
                    },3000)
                }else{
                    this.setHasMore(false);
                }
            }catch (e){
            }
        }
        }
    static LayoutFluid: boolean

    render(){
        const { row , data , hasMore , modalVisibility } = this.state;
        const { questions , slug} = this.props;

        let activeRoute;

        if(slug){
            activeRoute = slug[1] || ''
        }else{
            activeRoute = 'همه ی سوالات'
        }
        return(
            <>
            <div className="row vertical-divider">
                <div className='d-flex justify-content-center w-100 align-items-center border-bottom py-3 pt-4 px-3'>
                
                <div className='m-3 d-flex justify-content-center w-100'>
                <CustomButton
                            theme='merlot'
                            style={{minHeight:50,maxWidth:300}}
                            className='px-5 w-100'
                            onClick={() => {
                                this.setState({modalVisibility:true})
                            }}
                            text='پرسش خود را مطرح کنید' />
                </div>

                <ModalFlow 
                    activeKeyProp = {"insertQuez"}
                    active = { modalVisibility ? true : false}
                    onClose = { () => { this.setState({modalVisibility : false})}}
                    components={{insertQuez : <InsertQuez/> , success :<Success/>}}
                    />
                </div>
                </div>
                
                <div className='pt-2' style={{position:'absolute'}}>
                {/* <RowDivider /> */}
            </div>

            <div className='container p-0'>

            <div className='pt-2 m-3'>
                <NavigationBar 
                    style='justify-content-between'
                    data={ navigationBarOptions }
                    baseRoute={'/consultation-online/c'}
                    activeRoute = {activeRoute}
                    />
            </div>
                <div className='w-100 pt-1 pb-5'>
                <InfiniteScroll
                    dataLength={data.length}
                    next={() => this.getData()}
                    hasMore={hasMore}
                    style={{overflowY:'hidden'}}
                    className=''
                    loader={
                        <div className='d-flex justify-content-center pt-3 w-100'>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                scrollableTarget="scrollableDiv"
                >
                        {questions && questions.map( (e,index) => {
                            const { subject , code } = e;
                            const address = `/consultation-online/q/${code}-${subject}`;
                            return (
                                <Link key={index} href={Helper.cleanAddress({ value: address, seprator: '-' })}>
                                    <a className='quez w-100' style={{color:'inherit'}}> 
                                        <QuesCard data={e}/> 
                                    </a> 
                                </Link>
                        )
                    })}
                </InfiniteScroll>
                </div>
                </div>
                </>
        )
    }

}

export const getServerSideProps = async ({query})  => {
    const { slug } = query;
    const response = await getQuestions( slug && slug[1] ? slug[1] : false );
    
    return ({
        props:{
            questions : response,
            slug : slug || []
        }
    })

}

// @ts-ignore
const myComponent = withRouter(connect()(ConsulationOnline));

// @ts-ignore
myComponent.LayoutFluid = true;

export default myComponent;