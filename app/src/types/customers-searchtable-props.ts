import { CustomerEntity } from "@/graphql/types/customer.entity";

export interface CustomersSearchTableProps {
    customers: CustomerEntity[];
    handleClickDetail: (customerId: string) => void;
    handleClickEdit: (customerId: string) => void;
    handleClickDelete: (customerId: string) => void;
}
