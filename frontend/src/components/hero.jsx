import bloodImg from '../assets/blood.jpg'

const hero = () => {
  return (
    <>
    <div className='p-7 pb-10'>
        <img src={bloodImg} alt="" className='w-full rounded-3xl'/>
    </div>
    <div className=''>
        <p className='pl-14 pt-4 text-8xl font-bold tracking-wide'>Find Your Matching <span className='text-red-600'>Blood</span> <br/>Near You!</p>
    </div>
    </>
  )
}

export default hero