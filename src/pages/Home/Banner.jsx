import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="bg-[url('/f_assets/header_img.png')] bg-no-repeat bg-center bg-cover min-h-[550px] flex items-center px-16 mt-12 rounded-lg">
            <div className="space-y-5">
                <motion.h2
                initial={{opacity: 0, y: '100%'}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.3}}
                className="text-4xl lg:tex-5xl xl:text-6xl text-white font-bold w-full md:w-3/4 ">Order Your Favourite Food Here</motion.h2>
                <motion.p
                initial={{opacity: 0, y: '100%'}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.5}}
                className="w-1/2  text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis beatae, eligendi consequuntur animi eum?</motion.p>
                <motion.button
                initial={{opacity: 0, y: '100%'}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.7}}
                className="btn rounded-full border-0">View Menu</motion.button>
            </div>
        </div>
    );
};

export default Banner;