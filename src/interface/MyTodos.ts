export interface TodoMas {
    id: string | number;
    title: string;
    completed:boolean
  }

interface addressInterface {
  street:string;
  suite:string;
  city:string;
  zipcode:string;
}
export interface aUsers{
  id:number;
  name: string;
  username: string;
  email:string;
  address:addressInterface;
}
 