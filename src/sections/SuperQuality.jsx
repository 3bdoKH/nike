import { shoe8 } from "../assets/images"
import Button from "../components/button"
function SuperQuality() {
    return (
        <section className="flex justify-between items-center max-container w-full gap-10 max-lg:flex-col" id="about-us">
            <div className="flex flex-1 flex-col">
                <h2 className='font-palanquin text-4xl font-bold lg:max-w-lg'>
                    We Provide You
                    <span className='text-coral-red'> Super </span>
                    <span className='text-coral-red'>Quality </span>
                    Shoes
                </h2>
                <p className='mt-4 lg:max-w-lg info-text'>
                    Ensuring premium comfort and style, our meticulously
                    crafted footwear is designed to elevate your experience,
                    providing you with unmatched quality, innovation, and a touch of elegance.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Our dedication to detail and excellence ensures your satisfaction
                </p>
                <div className="mt-11">
                    <Button label="View Details"></Button>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="shoe8" height={522} width={570} className="object-contain" />
            </div>
        </section>
    )
}

export default SuperQuality
