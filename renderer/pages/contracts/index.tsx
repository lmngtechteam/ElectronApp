import React from 'react'
import Link from 'next/link';
import Layout from 'app/layout'
import {wrapper} from 'store/store'
import FAQ from 'app/components/faq'
import {connect} from 'react-redux'
import {withRouter} from 'next/router'
import Style from 'app/styles/contractPage'
import {IContract} from 'app/api/Contract'
import ContactUs from 'app/components/contactUs'
import {searchContract} from 'app/api/Contract'
import {setContracts} from "store/actions/contractAtions"
import TitleBox from 'app/components/pages/contract/titleBox'
import CustomButton from 'app/components/common/customButton'
import ContractSmallCard from 'app/components/pages/contract/smallCard'
import SearchableSelect from 'app/components/common/SearchableSelect/index'
import ContractSideBar from 'app/components/pages/contract/contractSideBar'
import {setFeedbacks, setCounsellors} from "store/actions/consultationActions"
import faqQuestionsData from '../../app/data/faq-contracts.json'

const pops = ['نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن', 'نمونه قرارداد برگزاری جشن']

interface IcontractProps {
    feedBacks?: []
    counsellors?: []
    contracts?: IContract[]
    router?: { push: (e) => void }
}


class Contract extends React.Component<IcontractProps> {
    state = {contractsData: [], searchValue: '', activekey: 0};

    setContractsData = (val) => {
        this.setState({contractsData: val})
    };
    setSearchValue = (val) => {
        this.setState({searchValue: val})
    };

    handleSearch = async (e) => {
        if (e) {
            let res = await searchContract(e)
            this.setContractsData(res)
        }
    }

    handleSelect = (e) => {
        const {router} = this.props;
        const {url} = e;
        router.push(`contracts/${url}`);
    }

    handleChange = (e) => {
        this.setContractsData([]);
        this.setSearchValue(e)
    }

    handleSubmit = () => {
        const {searchValue} = this.state;
        if (searchValue) {
            // do search
        }
    }

    handleSidebarChange = (e) => {
        this.setState({activekey: e});
    }

    render() {
        const {contracts, counsellors, feedBacks} = this.props;
        const {contractsData, activekey} = this.state;
        const filteredContracts = contracts[activekey];

        return (
            <Style>
                <div className='row'>
                    <div className='w-100'>

                        <div className='w-100 top-cover'>
                            <img src='../../images/contract/background.webp' alt='a'
                                 style={{position: 'relative', width: '100%', right: 0, left: 0}}/>
                            <div className='top-cover-content'>
                                <h1 style={{fontSize: '2rem'}} className='m-0 pb-5'>بانک قرارداد لامینگو</h1>
                                <p style={{fontSize: 20}} className='text-center m-0 w-50 d-none d-md-block'>لورم ایپسوم
                                    متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون هدف بهبود ابزارهای کاربردی می باشد.</p>
                            </div>
                        </div>

                        <div className='w-100 d-flex justify-content-center row m-0 px-4 px-md-2'>
                            <div
                                className='d-flex flex-md-row flex-column row align-items-center p-0 py-3 px-3 px-md-0 col-12 col-md-6 pr-md-5 '
                                style={{
                                    background: 'white', minHeight: 60,
                                    zIndex: 1,
                                    boxShadow: '1px 3px 5px 0px rgb(0 0 0 / 14%)',
                                    borderRadius: 12, marginTop: '-38px', paddingBottom: 38,
                                }}>

                                <div className='col-md-9 col-12 contract-input-box'>
                                    <SearchableSelect
                                        placeholder='به چه قراردادی نیاز دارید؟'
                                        onsearch={this.handleSearch}
                                        onchange={this.handleChange}
                                        options={contractsData}
                                        onselect={this.handleSelect}
                                    />
                                </div>
                                <div className='col-md-3 col-12 pt-2 pt-md-0'>
                                    <CustomButton
                                        style={{width: '100%', minHeight: '100%', height: 50}}
                                        onClick={this.handleSubmit}
                                        text='جستجو'/>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className='container' style={{margin: '0 auto'}}>


                        <div className='py-5 d-none d-md-block'>
                            <TitleBox width={100} title="محبوب ترین قراردادها"/>
                        </div>


                        <div className='w-100 d-flex align-items-center justify-content-center pt-3'>
                            <div className='row'>
                                {pops &&
                                pops.map(e =>
                                    <div className='col-md-3 py-2 py-md-1'>
                                        <Link href={`contract/${e}`}>
                                            <a href="!#" style={{textDecoration: 'none', color: 'unset'}}>
                                                <ContractSmallCard title={e}/>
                                            </a>
                                        </Link>
                                    </div>)}
                            </div>
                        </div>


                        <div className='py-5 d-none d-md-block'>
                            <TitleBox title="دسته بندی قراردادها"/>
                        </div>

                        <div className='w-100 align-items-center justify-content-center d-none d-md-flex'>
                            <div className='row'>
                                <div className='col-md-3 pb-2'>
                                    <ContractSideBar
                                        data={contracts}
                                        activekey={activekey}
                                        onchange={this.handleSidebarChange}
                                    />
                                </div>
                                <div className='col-md-9 p-0'>
                                    <div className='row m-0 w-100'>
                                        {filteredContracts && filteredContracts.contracts && filteredContracts.contracts.map((e) => {
                                            return (
                                                <div className='col-md-4 py-1'>
                                                    <Link href={`contract/${e.url}`}>
                                                        <a href="!#" style={{textDecoration: 'none', color: 'unset'}}>
                                                            <ContractSmallCard title={e.title}/>
                                                        </a>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='w-100 py-5'>
                            <div className='w-100 py-md-5 py-0'>
                                <div className='w-100 d-flex justify-content-center align-items-center'
                                     style={{height: 400, backgroundColor: '#fbfbfb', borderRadius: '50px 0 50px 0'}}>
                                    <div className='d-flex flex-column align-items-center justify-content-center px-3'>
                                        <h1 style={{fontWeight: 'bold', fontSize: 30, lineHeight: '1.6'}}
                                            className='text-center mr-0 pb-2'> قراردادی که نیاز دارید در لیست ما
                                            نیست؟ </h1>
                                        <CustomButton
                                            className='pt-2 mt-3'
                                            style={{width: 200, minHeight: 50, margin: '0 auto'}}
                                            onClick={this.handleSubmit}
                                            text='درخواست تنظیم قرارداد'/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='py-md-5 py-0 pb-3 w-100'>
                            <TitleBox width={140} title="سوالات متداول"/>
                        </div>
                        {faqQuestionsData.map((item, key) => {
                            return (
                                <FAQ
                                    key={key}
                                    title={item.question}
                                    content={item.answer}
                                    />
                            );
                        })}
                    </div>
                    <ContactUs/>
                </div>
            </Style>
        )
    }

}

const mapStateToProps = (state, selfProps) => {
    return ({
        feedBacks: state.consultation.feedBacks,
        counsellors: state.consultation.counsellors,
        contracts: state.contract.contracts
    })
};


export const getServerSideProps = wrapper.getServerSideProps(
    async (context) => {
        await context.store.dispatch(setContracts());
        await context.store.dispatch(setFeedbacks());
        await context.store.dispatch(setCounsellors());
        return ({})
    })

const myComponent = withRouter(connect(mapStateToProps, {})(Contract));
// @ts-ignore
myComponent.LayoutFluid = true;
export default myComponent;