import { useCustomersBy } from "@/hooks/useCustomersBy";
import { CustomersSearchFilter } from "../customers-search-filter/customers-search-filter"
import { CustomersSearchTable } from "../customers-search-table/customers-search-table"
import { CustomersSearchFilterFormData } from "@/types/customers-search-filter-form-data";

export interface CustomersGridProps {
    handleClickDetail: (customerId: string) => void;
    handleClickEdit: (customerId: string) => void;
    handleClickDelete: (customerId: string) => void;
}

export const CustomersGrid = (props: CustomersGridProps) => {
    const { customers, getCustomersBy, loading } = useCustomersBy();
    
    const handleSearch = (filterFormData: CustomersSearchFilterFormData) => {
        getCustomersBy({
            input: {
                searchType: filterFormData.searchType,
                pattern: filterFormData.pattern
            }
        });
    }

    return (
        <>
            <CustomersSearchFilter
                handleSearch={handleSearch}
                loading={loading}
            />
            <CustomersSearchTable
                customers={customers}
                handleClickDetail={props.handleClickDetail}
                handleClickEdit={props.handleClickEdit}
                handleClickDelete={props.handleClickDelete}
            />
        </>
    )
}