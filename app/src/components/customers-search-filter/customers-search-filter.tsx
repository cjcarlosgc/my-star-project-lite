import { CustomersSearchFilterFormData } from "@/types/customers-search-filter-form-data";
import { CustomersSearchFilterProps } from "@/types/customers-search-filter-props";
import { CustomerSearchType } from "@/utils/enums";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

export const CustomersSearchFilter = (props: CustomersSearchFilterProps) => {
    const { register, handleSubmit, control, setValue } = useForm<CustomersSearchFilterFormData>({
        defaultValues: {
            pattern: '',
            searchType: CustomerSearchType.BY_NAME
        },
        mode: 'onChange'
    })

    const searchTypeControl = useWatch({
        control,
        name: 'searchType'
    });
    
    const sendForm = handleSubmit((values: CustomersSearchFilterFormData) => {
        props.handleSearch(values);
    })

    useEffect(() => {
        setValue('pattern', '');
    }, [searchTypeControl])

    return (
        <form onSubmit={sendForm}>
            <label>Buscar por</label>
            <select id="searchType" {...register('searchType')}>
                { Object.keys(CustomerSearchType).map(iterable => {
                    return <option key={iterable} value={iterable}>{iterable}</option>
                }) }
            </select>
            <br></br>
            <label>Patrón</label>
            <input id="pattern" {...register('pattern')} ></input>
            <button type="submit">{props.loading? 'Cargando...' : 'Buscar'}</button>
        </form>
    )
}