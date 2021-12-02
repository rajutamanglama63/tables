import './table.css'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { getAllCompanyCategory } from '../../redux/actions/companyCategoryAction'
import { getAllCompany } from '../../redux/actions/companyAction'

const Table = () => {
    const dispatch = useDispatch();
    const companyCategories = useSelector(state => state.company_category);
    const companies = useSelector(state => state.company);
    console.log(companyCategories);


    useEffect(() => {
        
        dispatch(getAllCompanyCategory());
        dispatch(getAllCompany());
    }, [dispatch])
    return (
        <div>
            <h1 className="heading">1.Company Category Table</h1>
            <table class="w3-table-all">
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Created_at</th>
                    <th>Updated_at</th>
                </tr>
                {companyCategories.map((companyCategory) => (
                    <>
                        <tr key={companyCategory._id}>
                            <td>{companyCategory._id}</td>
                            <td>{companyCategory.title}</td>
                            <td>{companyCategory.createdAt}</td>
                            <td>{companyCategory.updatedAt}</td>
                        </tr>
                    </>
                ))}
            </table>
            
            <h1 className="heading">2.Company Table</h1>
            <table class="w3-table-all">
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Tech_company</th>
                    <th>Category_id</th>
                    <th>Created_at</th>
                    <th>Updated_at</th>
                </tr>
                {companies.map((company) => (
                    <>
                        <tr key={company._id}>
                            <td>{company._id}</td>
                            <td>{company.title}</td>
                            <td>{company.image === null ? "Null" : company.image}</td>
                            <td>{company.description === null ? "Null" : company.description}</td>
                            <td>{!company.isTechCompany ? "False" : "True"}</td>
                            <td>{company.category_id === null ? "Null" : company.category_id}</td>
                            <td>{company.createdAt}</td>
                            <td>{company.updatedAt}</td>
                        </tr>
                    </>
                ))}
            </table>
        </div>
    )
}

export default Table
