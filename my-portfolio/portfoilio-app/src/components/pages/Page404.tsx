 import pic404 from '../uploads/cat 404.jpeg'

const Page404 = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <img src={pic404} alt="404" srcset="" width="450" height="450" />
    </div>
  )
}

export default Page404