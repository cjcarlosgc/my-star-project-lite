import { CustomerEntity } from "./customer.entity";

export interface GetCustomersByOutputRoot {
    findCustomersBy: CustomerEntity[];
}
