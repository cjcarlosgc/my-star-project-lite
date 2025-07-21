import { CustomersSearchFilterFormData } from "./customers-search-filter-form-data";

export interface CustomersSearchFilterProps {
    handleSearch: (values: CustomersSearchFilterFormData) => void;
    loading: boolean;
}