import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/features/counter/counterSlice';


const Counter = () => {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch();


    return (
        <div className="border mx-32 bg-slate-50">
            <div className="border w-1/3 h-44 text-center flex flex-col items-center justify-center bg-pink-100 mx-auto m-4">
                <button onClick={() => dispatch(increment())} className="btn bg-gray-300 border  p-2 px-8 rounded-md hover:bg-gray-400 hover:text-white ">Increment</button>
            </div>
            <p className='text-center text-3xl font-bold'>{count} </p>
            <div className="border w-1/3 h-44 mx-auto flex flex-col items-center justify-center bg-green-100 text-center m-4">
                <button onClick={() => dispatch(decrement())} className="btn bg-purple-200 p-2 px-8 rounded-md border hover:bg-purple-400 hover:text-white" >Decrement</button>
            </div>

        </div >
    );
};

export default Counter;