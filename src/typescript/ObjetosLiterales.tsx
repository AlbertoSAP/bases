
interface IPerson {
  fullName: string;
  age: number;
  address: IAddress;
}
 interface IAddress {
  country: string;
  houseNo: number;
}


export const ObjetosLiterales = () => {

     const person:IPerson = {
        fullName:'Alberto',
        age:26,
        address:{
            country:'Nicaragua',
            houseNo:615 
        }
     }

  return (<>
    <h3>Objetos Literales</h3>
    {/* {
        JSON.stringify(person)
    } */}
    <code>
        <pre>
        {JSON.stringify(person, null, 2)}
        </pre>
    </code>
  </>)
}
