import notFound from "../Asserts/images/404.jpg"
const NotFound = () => {
    return (
        <img src={notFound} style={{ width: "35%", margin: "80px 0 0 35%" }} />
    )
}
export default NotFound;