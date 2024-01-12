import { Link } from 'react-router-dom';
import './login.scss';
import { useForm } from 'react-hook-form';
export default function Login() {
    const {handleSubmit,reset,register}=useForm();
    const loginAccount=(data)=>{
        console.log(data);
        reset();
    }
  return (
    <>
      <div className="login">
        <img
          src="/loginCreate/loginCreate.png"
          alt=""
          style={{ width: 805, height: 781 }}
        />
        <div className="login_form">
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
          <form onSubmit={handleSubmit(loginAccount)}>
            <input type="text" {...register('emailOrPhone',{required:true})}placeholder="Email or Phone Number" />
            <input type="password"{...register('password',{required:true})} placeholder="Password" />
            <div>
              <button>Log in</button>
              <Link> Forget Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
