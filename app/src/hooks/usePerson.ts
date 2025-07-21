// import { useQuery } from '@apollo/client';
// import { GET_PERSON_QUERY } from '@/graphql/queries/get-params.query';

// export const usePerson = (
//   personDocumentType: string,
//   personDocumentNumber: string
// ) => {
//   const { data, loading, error } = useQuery(GET_PERSON_QUERY, {
//     variables: { documentNumber: personDocumentNumber, documentType: personDocumentType },
//   });

//   return {
//     person: data?.person,
//     loading,
//     error
//   }
// }