
import { useParams } from 'react-router-dom'

function Params() {

    const {id} = useParams()
  return (
    <div className='bg-gray-600 text-white flex justify-center items-center text-3xl'>
      Param : {id}
    </div>
  )
}

export default Params
