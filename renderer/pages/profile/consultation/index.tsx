import { getProfileContracts } from 'app/api/Contract';
import { useState , useEffect } from 'react';
import Table from 'app/components/table';
import TableFilter from 'app/components/pages/profile/contracts/tableFilter';
import TableSearch from 'app/components/pages/profile/contracts/tableSearch';
import SwitchButton from 'app/components/switchButton';
import Helper from 'app/utils/Helper';
import Style from 'app/styles/profile';
import Pagination from 'app/components/pagination';
import { contractColumns } from 'app/components/pages/profile/table/configs/contracts';



const Consultation = ({ consultations }) => {
    const [page , setPage] = useState(1);
    const [consultationData , setConsultationData ] = useState(consultations);
    const [filter , setFilter] = useState('');
    const [search , setSearch] = useState('');
    const [loading , setLoading] = useState(false);
    const [ total , setTotal] = useState(0);
    const [ sortValues , setSortValues ] = useState([]);

    const fetchData = async () => {
      const sort = sortValues && sortValues.toString();
      const query = Helper.queryString({filter, search, sort});
      setLoading(true);
      const { contracts , total } = await getProfileContracts({query});
      setConsultationData([...contracts]);
      setTotal(total);
      setTimeout(() => {
        setLoading(false);
      },1000)
    }

    useEffect(() => {
      fetchData();
    } , [filter,search])

    const hanldePageChange = ({currentPage}) => {
        setPage(currentPage);
        fetchData();
    }
 

    useEffect(() => {
      fetchData();
    },[sortValues])

    const handleSort = (e) => {
      let val = [...sortValues];
      if(sortValues.includes(e)){
        const index = val.findIndex((f) => f === e);
        if (index > -1) {
          val.splice(index, 1);
        }
        setSortValues(val);
        return;
      }

      const sortedItems = [...sortValues,e];
      setSortValues(sortedItems);
    }

    return( <Style><div className='w-100'>
                       
                  
                       <div className='row p-0 m-0 pt-3 px-1'>

                            <div className='responsive-title py-2 row m-0 w-100 d-md-none justify-content-between align-items-center d-flex'>
                                  <h1 className='col-6 m-0'> مشاوره حقوقی </h1>
                            </div>

                              <div className='d-none consultation-type-box justify-content-md-between d-md-flex flex-row m-0 w-100 py-1 pt-3 py-md-5 px-md-3 pb-md-4 pt-md-2 row'>
                                      {[1,2,3,4].map(e =>   <div className='consultation-type'>
                                        <div className='p-3 d-flex flex-column justify-content-between h-100'>
                                          <div className='icon'> icon pls </div>
                                          <h3 className='m-0'> مشاوره تلفنی</h3>
                                          <p className='m-0 pt-1'>قرارداد خرید و فروقوقی و تشریفات قانونی مخصوصی است. در یک قرارداد</p>
                                        </div>
                                        </div>)}
                              </div>
                  
                            <div className='m-0 pt-3 row w-100 p-md-2 d-flex align-items-center justify-content-between' >
                                  <div className='table-search-box col-md-4 col-7 p-0'>
                                          <TableSearch onsearch={setSearch} placeholder='جستجوی قرارداد...'/>
                                  </div>
                                  <div className='p-0 table-filter-box pt-md-0 pr-3 col-md-2 offset-md-6 col-5'>
                                          <TableFilter onselect={({title}) => {setFilter(title)}}/>
                                  </div>
                            </div>

                            <div className='d-md-none consultation-type-box  d-flex flex-row m-0 w-100 pt-1 pb-0 pt-3 py-md-5 px-md-3 pb-md-4 pt-md-2 row'>
                                      {[1,2,3,4].map(e =>   <div className='consultation-type ml-3'>
                                        <div className='text-center p-3 d-flex flex-column align-items-center h-100'>
                                          <div className='icon'> icon pls </div>
                                          <h3 className='m-0 pt-3'> مشاوره تلفنی</h3>
                                        </div>
                                        </div>)}
                              </div>

                            </div>

                        <div className='row m-0 p-0 px-1 pb-5' style={{backgroundColor: '#f2f2f2'}}>
                            
                            <div className='col-12 p-2 px-md-3 py-md-0 pb-5'>
                                <div className='w-100'>
                                    <Table 
                                      columns={contractColumns(handleSort,sortValues,Helper.isXSSize())} 
                                      data={consultationData}
                                      customLoading={loading}
                                      progressComponent={<div className='p-5'><h3>در حال بارگزاری</h3></div>}
                                    />
                                </div>

                                <div className='m-0 row p-0 w-100'>
                               
                                {total && 
                                <>
                                <div className='col-md-5 col-12 offset-md-5 d-flex justify-content-center justify-content-md-start'>
                                  <Pagination 
                                  total = {total}
                                  maxKeys = {5}
                                  rowPerPage = {5}
                                  onchange={hanldePageChange}
                                  page = {page}
                                  />
                                </div>

                                <div className='p-0 pt-2 pt-md-0 col-md-2 col-12 contract-number d-md-flex d-none flex-row align-items-center justify-content-md-end'>
                                   <p className='m-0'> {(page * 5) - 4}-{((page * 5) - 4) + consultationData.length - 1 } <span className='m-0 mr-1'> از {total} قرارداد</span></p>
                                </div>

                                </>
                                }
                                </div>
                            </div>
                        </div>
            </div></Style> )
}

export const getServerSideProps =  async () => {
  const consultations = await getProfileContracts({query:null});
  return({
    props:{
      consultations : consultations
    }
  })
}

Consultation.LayoutType = 'profile';
Consultation.LayoutFluid = true;

export default Consultation;