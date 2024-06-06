import { star } from "../assets/icons"
const ReviewCard = ({ imgURL, feedback, rating, customerName }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]" />
            <p className="mt-6 max-w-sm info-text text-enter">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5 ">
                <img src={star} alt="" width={24} height={24} className="m-0 object-contain" />
                <p className="text-slate-gray font-montserrat text-xl">({rating})</p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
        </div>
    )
}

export default ReviewCard
