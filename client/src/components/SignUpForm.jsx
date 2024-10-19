import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { axiosAPI } from '../api/axiosAPI';
import './AuthForm.css';

function SignupForm() {
    const {register, handleSubmit} = useForm()
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()

    const createUser = async(data) => {

        
        
        try{
            const response = await axiosAPI.post('/users/register', data)
            console.log(response.data);
            setUserData(response.data);
            
            navigate('/')
            
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="bg-gray-50 flex flex-col gap-3 justify-center border border-gray-300 border-solid p-8 pt-16 rounded-lg shadow-lg align-middle min-w-96 w-1/5 h-[28rem]">
            <h1 className="text-black font-bold text-4xl">SignUp</h1>
            
            {/* {userData && <p className=" text-lg text-teal-500 font-bold ">{userData.message}</p>} */}
            <div className="py-8 ">
            <form  className="flex flex-col gap-3" onSubmit={handleSubmit(createUser)}>
                <div className="flex flex-col">
                    <label className="text-gray-500 font-medium text-left"
                        htmlFor="name">Username
                    </label>
                    <input className = 'p-2 rounded-lg border-gray-300 border-solid border text-base hover:bg-gray-100 focus:bg-gray-100 outline-gray-300'
                        {...register('name')}
                        type="text" />
                    
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-500 font-medium text-left"
                    htmlFor="email">Email
                    </label>
                    <input className= 'p-2 rounded-lg border-gray-300 border-solid border text-base hover:bg-gray-100 focus:bg-gray-100 outline-gray-300'
                        {...register('email')}
                        type="email"  />
                    
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-500 font-medium text-left"
                    htmlFor="password">Password
                    </label>
                    <input className= 'p-2 rounded-lg border-gray-300 border-solid border text-base hover:bg-gray-100 focus:bg-gray-100 outline-gray-300'
                        {...register('password')}
                        type="password"  />
                    
                </div>
                <input className="p-3 rounded-lg text-white font-medium text-xl bg-zinc-800 drop-shadow-md my-4 hover:bg-black focus:bg-black focus:shadow-xl"

                    type="submit"
                    value="Submit" />
            </form>
            </div>
            
        </div>
    )
}

export default SignupForm;

