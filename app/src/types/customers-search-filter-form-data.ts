import { CustomerSearchType } from "@/utils/enums";

export interface CustomersSearchFilterFormData {
    searchType: CustomerSearchType;
    pattern: string;
}
