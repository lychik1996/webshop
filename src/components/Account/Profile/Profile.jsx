import { useForm } from 'react-hook-form';
import './profile.scss';
import { useState } from 'react';
const Pass = '42420';
export default function Profile() {
  const { handleSubmit, register, reset, watch } = useForm();
  const [testPass, _] = useState(Pass);
  const changeInfo = (data) => {
    const { currentPass, newPass, confirmNewPass } = data;
    if (testPass !== currentPass) {
      alert('U currentPass pass do not match');
      return;
    }
    if (newPass !== confirmNewPass) {
      alert('New Password and Confirm New Password do not match');
      return;
    }
    console.log(data);
    reset();
  };

  const currentPass = watch('currentPass');
  const confirmNewPass = watch('confirmNewPass');
  const newPass = watch('newPass');
  const isCurrentPassMatch = currentPass === testPass;
  const isConfirmNewPass = (newPass && confirmNewPass) && (newPass === confirmNewPass) && (newPass.length > 0 || confirmNewPass.length > 0);;

  return (
    <>
      <div className="profile">
        <p className="profile_edit">Edit Your Profile</p>
        <form onSubmit={handleSubmit(changeInfo)} className='profile_edit_form'>
          <div className="form_top">
            <label >
              First Name
              <span></span>
              <input
                type="text"
                {...register('firstName', { required: true })}
                placeholder="Mr"
              />
            </label>
            <label>
              Last Name
              <span></span>
              <input
                type="text"
                {...register('lastName', { required: true })}
                placeholder="Rimel"
              />
            </label>
            <label >
              Email
              <span></span>
              <input
                type="email"
                {...register('email', { required: true })}
                placeholder="rimel1111@gmail.com"
              />
            </label>
            <label>
              Address
              <span></span>
              <input
                type="text"
                {...register('adress', { required: true })}
                placeholder="Kingston, 5236, United State"
              />
            </label>
          </div>
          <div className="form_bot">
            <label>
              Password Changes
              <span></span>
              <input
                type="password"
                {...register('currentPass', { required: true })}
                placeholder="Current Passwod"
                className={isCurrentPassMatch?'pass-match':''}
              />
              <input
                type="password"
                {...register('newPass', { required: true })}
                placeholder="New Passwod"
                className={isConfirmNewPass?'pass-match':''}
              />
              <input
                type="password"
                {...register('confirmNewPass', { required: true })}
                placeholder="Current New Passwod"
                className={isConfirmNewPass? 'pass-match':''}
              />
            </label>
          </div>
          <div className="form_send">
            <p onClick={() => reset()}>Cancel</p>
            <button>Save Changes</button>
          </div>
        </form>
      </div>
    </>
  );
}
