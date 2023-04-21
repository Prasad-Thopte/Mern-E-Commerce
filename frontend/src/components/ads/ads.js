import sale from "./images/adv.jpg"
// Create a fuction for adding hero image in home page
export default function Advertise() {
    return (
        <div className="ads__image--container container">
            <img src={sale} alt="ecommerce" className="ads__image"/>
        </div>
    )
}
