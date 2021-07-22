
import axios from "axios";
import  React from 'react';
import { IUser } from "../types/user";
// you don't need anything else to import
interface Props {
 user:any
}


export default function AxiosTest(props: Props) {
  // TODO: once you get data map through data and show them name
  console.log(props.user);
  return (

    <div>
            <h2>
              {
                props.user.map((item:any)=>{
                  return(
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                    </div>
                  );

                })
              }
           
            </h2>
   </div>
  ); 
}
export async function getServerSideProps(){
 
  // axios.get('http://localhost:3000/api/users')
  // .then(res=>{
  //  console.log(res.data)
  

  const res = await fetch(`http://localhost:3000/api/users`)
  const user = await res.json()


    return{
      props:{
        user:user
  
      }

    }
}
// TODO: fetch data with axios to use in app
// RestApi: axios.get("/api/users") => [{name: "amir"}]
// NOTE: data fetching should happen in server side
// Resource: https://nextjs.org/docs/basic-features/data-fetching
// Resource: https://github.com/axios/axios
