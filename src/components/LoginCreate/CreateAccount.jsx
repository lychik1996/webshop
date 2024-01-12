import { Link } from 'react-router-dom';
import './create.scss';
import { useForm } from 'react-hook-form';
export default function CreateAccount() {
    const {handleSubmit,reset,register}=useForm();
    const createAccount=(data)=>{
        console.log(data);
        reset();
    }
  return (
    <>
      <div className="create">
        <img src="/loginCreate/loginCreate.png" alt="" style={{width:805,height:781}}/>
        <div className="create_form">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <form onSubmit={handleSubmit(createAccount)}>
            <input type="text"{...register('name',{required:true})} placeholder="Name" />
            <input type="text"{...register('emailOrPhone',{required:true})} placeholder="Email or Phone Number" />
            <input type="password"{...register('password',{required:true})} placeholder="Password" />
            <button>Create Account</button>
          </form>
          <Link className="create_google">
            <img src="/loginCreate/Icon-Google.png" alt="" />
            <p>Sign up with Google</p>
          </Link>
          <div className="create_problem">
            <Link className="create_alredy">Already have account?</Link>
            <Link to="/login" className="create_login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
