import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"
const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="text-4xl font-palanquin text-center font-bold ">What Our <span className="text-coral-red"> Customers </span> Say?</h3>
            <p className="mt-4 text-slate-gray info-text m-auto max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
            <div className="flex flex-1 justify-evenly mt-24 items-center max-lg:flex-col gap-14">
                {reviews.map((re) => (
                    <ReviewCard key={re.customerName} imgURL={re.imgURL} customerName={re.customerName} rating={re.rating} feedback={re.feedback} />
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews
