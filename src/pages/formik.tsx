import { Input, Form, Button, Space } from "antd";
import { Formik, useFormik } from "formik";
const FormItem = Form.Item;
interface IForm {
  username: string;
  password: string;
}

const validate = (values:IForm) => {
  let errors= {};
  
  if (!values.username) {
    console.log('Required')
      alert('Required')
  } else if (values.username.length>5) {
    console.log('username to cMust be 5 characters or less')
      alert('username to cMust be 5 characters or less')
  }

  if (!values.password) {
    console.log('Required')
      alert('Required')
  } else if (values.password.length>7) {
    console.log('password to cMust be 7 characters or less')
    alert('password to cMust be 7 characters or less')  }
  return errors;
}
export default function FormikTestexport () {
  {
  // TODO: make form work with formik , pass handleSubmit to onSubmit of formik
  // BONUS: adding validation has extra points
  // Resource: https://formik.org/docs/tutorial
  

  // const handleSubmit = (values: IForm) => {
  //   console.log(values);
  // };
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: (values:IForm) => {
      alert(JSON.stringify(values, null, 2));
      console.log('submit')
    },
    
    
  });
  


  return (
    <div>
      <div>Simple Formik With Antd Inputs :: Edit src/pages/formik.tsx</div>
      <hr />
      {/* TODO: use Formik */}
      <form onSubmit={formik.handleSubmit}>
        {/* TODO: make this inputs work with formik i suggest make it a c */}



        <FormItem label="Username" >
          <Input value={formik.values.username} onChange={formik.handleChange} name="username" type="text" />
          
        </FormItem>
       
        


        {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
        <FormItem label="Password"  >
        <Input  value={formik.values.password} onChange={formik.handleChange} name="password" type="password"/>
        </FormItem>


        <Space>
          <Button type="primary" htmlType="submit">
            submit
          </Button>


          <Button 
            onClick={() => {
              // TODO: reset form with formik
             formik.handleReset({
               values:{
                 username:'',
                 password:''
               }
             });
             console.log('rest')
              
            }}
          >
            reset
          </Button>
        </Space>
      </form>
    </div>
  );
}
}
