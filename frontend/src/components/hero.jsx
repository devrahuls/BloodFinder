import bloodImg from '../assets/blood.jpg'

const hero = () => {
  return (
    <>
    <div className="mx-auto flex flex-col items-center pb-10">
      <img
        src={bloodImg}
        alt="Blood donation image"
        className="rounded-3xl md:w-auto md:max-w-md lg:max-w-full shadow-2xl"
      />
      <div className="text-container text-center pt-4">
        <p className="text-4xl font-bold tracking-wide md:text-3xl lg:text-4xl">
          Find Your Matching <span className="bg-red-500 text-white pl-1 pr-1">Blood</span>{' '}
          <br /> Near You!
        </p>
      </div>
    </div>
    </>
  )
}

export default hero