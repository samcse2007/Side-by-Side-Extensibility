using {LSH as external} from './external/LSH.csn';

service CatalogService {

    @readonly
    entity EmpDetailsSet as projection on external.EmpDetailsSet {
        key Empid
    };

}