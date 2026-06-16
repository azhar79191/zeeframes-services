import Button from '@/src/components/button'
import gif from "@/src/assets/images/spining-star-BHYjMLGF.gif"
import bg from "@/src/assets/images/gradient-bg.webp"
import Image from 'next/image'

const DesignSection = () => {
    return (
        <section
            className="relative bg-cover"
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <div className="container">
                <div className='flex flex-col md:flex-row items-center gap-6 md:justify-between py-6 md:py-12'>
                    <div>
                        <h2 className="md:text-5xl text-4xl w-full md:w-150.75 font-tight  font-semibold text-white md:leading-15 leading-11">
                            Start your UI/UX  design project today
                        </h2>

                        <p className="mt-4 mb-9 text-base md:text-lg leading-6 md:leading-7 text-[#FAFAFA]">
                            Book a free discovery call with a senior designer no commitment,no pressure.
                        </p>

                        <Button
                            text="Book a Free Discovery Call"
                            textClassName='text-[#000]'
                            className='w-full flex items-center justify-center md:w-fit bg-[#F3FE00] border-0'
                            iconClassName='text-[#0B0B0B]'
                        />
                    </div>
                    <div className="relative  max-w-65 md:max-w-73.5 h-73.5">
                        <Image
                            src={gif}
                            alt='gif'
                            width={294}
                            height={294}
                            className='w-[294] md:w-73.5 h-73.5'
                        />
                        <Image
                            src={gif}
                            alt='gif'
                            width={103}
                            height={103}
                            className='absolute top-0 right-3 w-25.75 h-25.75'
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default DesignSection
