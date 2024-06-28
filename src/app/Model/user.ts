export interface User{
    id:number,
    name:string,
    username:string,
    email:string,
    address: {
        street:string,
        suite:string,
        city:string
    },
    phone:number,
    website:string,
    company:{
        name:string,
        catchPhrase:string,
        bs:string
    }
}