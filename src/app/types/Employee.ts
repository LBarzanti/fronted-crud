   export interface ServerData{
    _embedded:Employess;
    _links:Links;
    page:Page;
    } 
export interface Employess{
    employees:Employee[];
}
export interface Employee{
    id:number;
    firstname:string;
    lastanem:string;
    birthDate:string;
    hireDate:string;
    gender:string;
    link:Links;
}
export interface Links{
    first:Link;
    prev:Link;
    self:Link;
    next:Link;
    last:Link;
}
export interface Link{
    href:string;
}
export interface Page{
    size:number;
    totalElemnts:number;
    totalPages:number;
    number:number
}