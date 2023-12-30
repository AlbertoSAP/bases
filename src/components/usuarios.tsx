import { useEffect } from "react"
import { reqResApi } from "../Api/reqResUsuario"


export const Usuarios = () => {

    useEffect(() => {
    //   Llamado API
    reqResApi
      .get("/users")
      .then((resp) => {
        console.log(resp.data.data);
      })
      .catch(console.log);

    }, [])
    

  return (
    <>
    <h3>  usuarios</h3>

    <table className="table table-dark table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Avatar</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    
  </tbody>sss
</table>
  
    </>
  )
}
