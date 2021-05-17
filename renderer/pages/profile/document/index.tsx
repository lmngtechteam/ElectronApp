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


const Profile = ({ contracts }) => {
    const [page , setPage] = useState(1);
    const [contractsData , setContractData ] = useState(contracts);
    const [filter , setFilter] = useState('');
    const [search , setSearch] = useState('');
    const [switchValue , setSwitch] = useState('');
    const [loading , setLoading] = useState(false);
    const [ total , setTotal] = useState(0);
    const [ sortValues , setSortValues ] = useState([]);

    const fetchData = async () => {
      const sort = sortValues && sortValues.toString();
      const query = Helper.queryString({filter, search, switch : switchValue , sort});
      setLoading(true);
      const { contracts , total } = await getProfileContracts({query});
      setContractData([...contracts]);
      setTotal(total);
      setLoading(false);
    }

    useEffect(() => {
      fetchData();
    } , [filter,search,switchValue])

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
                        <div className='row p-0 m-0 py-3 px-1'>
                            <div className='responsive-title py-2 row m-0 w-100 d-md-none justify-content-between align-items-center d-flex'>
                                  <h1 className='col-6 m-0'> قرارداد ها </h1>
                                  <p className='col-6 m-0'> <img src='/images/icons/archive-outline.svg'/> تمپلیت های ذخیره شده   </p>
                            </div>
                            <div className='m-0 col-12 pt-3 row w-100 p-md-2 d-flex align-items-center justify-content-between' >
                                  <div className='table-search-box col-md-4 col-7 p-0'>
                                          <TableSearch onsearch={setSearch} placeholder='جستجوی قرارداد...'/>
                                  </div>
                                  <div className='p-0 table-filter-box pt-md-0 pr-3 col-md-2 offset-md-4 col-5'>
                                          <TableFilter onselect={({title}) => {setFilter(title)}}/>
                                  </div>
                                 <div className='d-none d-md-block pt-md-0 col-md-2 col-0'>
                                        <SwitchButton style={{width:'100%'}} options={['شخصی' ,'دریافتی']} onchange={setSwitch} />
                                 </div>
                            </div>
                            
                            <div className='col-12 p-md-3 p-2'>
                                <div className='w-100'>
                                    <Table 
                                      columns={contractColumns(handleSort,sortValues,Helper.isXSSize())} 
                                      data={contractsData}
                                      progressPending={loading}
                                    />
                                </div>

                                <div className='row w-100 m-0'>
                               
                                {total && 
                                <>
                                <div className='m-0 col-md-5 col-12 d-flex justify-content-center justify-content-md-start offset-md-5'>
                                  <Pagination 
                                  total = {total}
                                  maxKeys = {5}
                                  rowPerPage = {5}
                                  onchange={hanldePageChange}
                                  page = {page}
                                  />
                                </div>

                                <div className='p-0 pt-2 pt-md-0 col-md-2 col-12 d-none d-md-flex contract-number flex-row align-items-center justify-content-md-end'>
                                   <p className='m-0'> {(page * 5) - 4}-{((page * 5) - 4) + contractsData.length - 1 } <span className='m-0 mr-1'> از {total} قرارداد</span></p>
                                </div>

                                </>
                                }
                                </div>
                            </div>
                        </div>
            </div></Style> )
}

export const getServerSideProps =  async () => {
  const contracts = await getProfileContracts({query:null});
  return({
    props:{
      contracts : contracts
    }
  })
}

Profile.LayoutType = 'profile';
Profile.LayoutFluid = true;

export default Profile;