import React from 'react'
// import { useRef } from 'react'
import { styled } from 'styled-components'
// import { motion, useMotionValue, useTransform, animate, delay,AnimatePresence ,useInView } from 'framer-motion'
// import { motion, useMotionValue, useTransform, AnimatePresence, useScroll, easeInOut } from 'framer-motion';
import { motion, useScroll, easeInOut, easeIn, easeOut, delay } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import { LazyMotion, domAnimation, m } from "framer-motion"

const Home = () => {

    // const x = useMotionValue(0)
    // const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
    // const scrollRef = useRef(null)

    // second attempt 
    // const [ref, inView] = useInView('');

    // third attempt 
    // const x = useMotionValue(0);
    // const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
    // const [ref, inView] = useInView({
    //     triggerOnce: true, // Ensure the animation triggers only once
    //     threshold: 0.5, // Customize the visibility threshold as per your needs
    // });

    const { scrollYProgress } = useScroll();
    console.log(scrollYProgress)

    return (
        <Wrapper>

            {/* first attempt  */}
            {/* <AnimatePresence>
           {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onExitComplete={() => {
            // Element has exited the DOM
            console.log('Element has exited');
          }}
         className="container">
                <h1>Learn with smile</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cupiditate quaerat! Iusto, qui, corrupti fugit, commodi at cum expedita labore mollitia repellat architecto nemo autem porro ipsa cumque ullam explicabo impedit veniam maiores quaerat totam natus aut. Possimus aperiam consequatur saepe beatae cupiditate, incidunt maxime quam, odio quaerat est similique eum tempore. Reiciendis numquam illum animi reprehenderit ex quis dolorum, dolor nulla consectetur, maiores tempore dolorem enim at quidem assumenda ipsa earum iste! Culpa est architecto cum tenetur nam quam exercitationem iste ex quidem iusto impedit eveniet ipsam mollitia sapiente adipisci ratione dolorum nulla necessitatibus dolore, rerum velit! Tenetur necessitatibus doloremque similique molestiae, unde voluptatibus hic iure eos, beatae eveniet temporibus consequuntur, possimus quas vitae esse. Provident, iure soluta cumque dolorem cum dolorum ab optio quod ratione ipsam necessitatibus, animi in quibusdam minima vitae quia reprehenderit vel dolor deserunt deleniti dignissimos ad repellat est aspernatur. Necessitatibus recusandae repellat maxime, voluptatibus autem libero nesciunt mollitia iste at corrupti laudantium corporis inventore magnam velit sunt et debitis, fuga reiciendis illo voluptas pariatur! Neque perferendis dicta atque nihil minima nesciunt nam deleniti! Nobis, consequuntur quo quia veritatis quaerat fugit dolores blanditiis, ad error autem in adipisci illo quibusdam repudiandae consectetur aut optio. Repellat.</p>
            </motion.div>
           )}
           </AnimatePresence> */}


            {/* second attempt  */}


            {/* <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      className="container" >
      <h1>Learn with smile</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cupiditate quaerat! Iusto, qui, corrupti fugit, commodi at cum expedita labore mollitia repellat architecto nemo autem porro ipsa cumque ullam explicabo impedit veniam maiores quaerat totam natus aut. Possimus aperiam consequatur saepe beatae cupiditate, incidunt maxime quam, odio quaerat est similique eum tempore. Reiciendis numquam illum animi reprehenderit ex quis dolorum, dolor nulla consectetur, maiores tempore dolorem enim at quidem assumenda ipsa earum iste! Culpa est architecto cum tenetur nam quam exercitationem iste ex quidem iusto impedit eveniet ipsam mollitia sapiente adipisci ratione dolorum nulla necessitatibus dolore, rerum velit! Tenetur necessitatibus doloremque similique molestiae, unde voluptatibus hic iure eos, beatae eveniet temporibus consequuntur, possimus quas vitae esse. Provident, iure soluta cumque dolorem cum dolorum ab optio quod ratione ipsam necessitatibus, animi in quibusdam minima vitae quia reprehenderit vel dolor deserunt deleniti dignissimos ad repellat est aspernatur. Necessitatibus recusandae repellat maxime, voluptatibus autem libero nesciunt mollitia iste at corrupti laudantium corporis inventore magnam velit sunt et debitis, fuga reiciendis illo voluptas pariatur! Neque perferendis dicta atque nihil minima nesciunt nam deleniti! Nobis, consequuntur quo quia veritatis quaerat fugit dolores blanditiis, ad error autem in adipisci illo quibusdam repudiandae consectetur aut optio. Repellat.</p>
    </motion.div> */}


            {/* third attempt  */}

            {/* <AnimatePresence>
                {inView && (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        className="container"
                    >
                        <h1>Learn with smile</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cupiditate quaerat! Iusto, qui, corrupti fugit, commodi at cum expedita labore mollitia repellat architecto nemo autem porro ipsa cumque ullam explicabo impedit veniam maiores quaerat totam natus aut. Possimus aperiam consequatur saepe beatae cupiditate, incidunt maxime quam, odio quaerat est similique eum tempore. Reiciendis numquam illum animi reprehenderit ex quis dolorum, dolor nulla consectetur, maiores tempore dolorem enim at quidem assumenda ipsa earum iste! Culpa est architecto cum tenetur nam quam exercitationem iste ex quidem iusto impedit eveniet ipsam mollitia sapiente adipisci ratione dolorum nulla necessitatibus dolore, rerum velit! Tenetur necessitatibus doloremque similique molestiae, unde voluptatibus hic iure eos, beatae eveniet temporibus consequuntur, possimus quas vitae esse. Provident, iure soluta cumque dolorem cum dolorum ab optio quod ratione ipsam necessitatibus, animi in quibusdam minima vitae quia reprehenderit vel dolor deserunt deleniti dignissimos ad repellat est aspernatur. Necessitatibus recusandae repellat maxime, voluptatibus autem libero nesciunt mollitia iste at corrupti laudantium corporis inventore magnam velit sunt et debitis, fuga reiciendis illo voluptas pariatur! Neque perferendis dicta atque nihil minima nesciunt nam deleniti! Nobis, consequuntur quo quia veritatis quaerat fugit dolores blanditiis, ad error autem in adipisci illo quibusdam repudiandae consectetur aut optio. Repellat.</p>
                    </motion.div>
                )}
            </AnimatePresence> */}

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: .9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: .35, duration: .55, }}
                    viewport={{ once: false }}>
                    <div className='heading'>
                        <h1>eazily </h1> <h1>mission & vision</h1>
                    </div>
                    <div className='para'>
                        <span>‘Eazily’ is a commitment to bring a ‘change’ in the prevailing conventional teaching and learning methods and demolish the existing idea of profit-based industries in the name of education.</span>
                        <span>We don’t claim ourselves to be the BEST but we believe in giving you the best of us we have; that includes a dedicated team of skilled, experienced, and amazing educators who have researched for more than a year to produce the most comprehensive and top-rated quality content, with thought-provoking and challenging daily practice problems.</span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: .9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: .3, duration: .5, }}
                    viewport={{ once: false }}>
                    <div className='para'>
                        <h3 className='king'><span > We place content first because</span>
                            <span> ‘Content is King’.</span></h3>
                        <span > We aim to create and provide learning opportunities to all those who dream, those who thrive, and those who never get tired of trying. Our mission is to become your ‘one-stop solution’ and work on capacity building by catering to individual needs.</span>
                        <h3><span>We promise ‘Yahan na aapki Jeb Kategi, Na barbaad hoga aapka Samay’ </span></h3>
                        <h3> <span>‘Learn with a Smile 😊’ with Eazily</span></h3>
                        <h3><span>Made in INDIA, With love ❤️</span></h3>
                    </div>
                </motion.div>
            </div>
            <div className='home-foot'>
            <motion.div
            initial={{opacity:0,scale:.9}}
            whileInView={{opacity:1,scale:1}}
            transition={{delay:.3,duration:.5}}
            viewport={{once:true}}>
                <div className='container'>
                        <p>
                            Our goal is to develop students who are creative, courageous and respectful.
                        </p>
                    </div>
            </motion.div>
                </div>

        </Wrapper>
    )
}

export default Home
const Wrapper = styled.section`
.heading{
    padding: 3.5rem 0;
    text-transform: uppercase;
    font-family: "Noto Serif TC", serif;
    line-height: 1.5;
    color: rgb(36, 11, 92);
    letter-spacing: normal;
    /* "Noto Serif TC", serif */
}
.heading h1:nth-child(1){
    font-family: "Noto Serif TC", serif;
    font-size: 5.5rem;
    text-align: center;
    text-decoration: underline;
    font-weight: 500;
}
.heading h1:nth-child(2){
    font-size: 3.9rem;
    text-align: center;
    font-weight: 500;
    text-decoration: underline;
    font-style: italic;
}
span{
font-family :"Noto Serif TC, serif";
display: inline-block;
font-size :35px;
font-style: normal;
font-weight :500;
height :auto;
letter-spacing: 1.2px;
line-height :1.7;
margin-bottom: 0px;
text-align: center;
overflow-wrap :break-word;
word-spacing: normal;
padding-bottom: 40px;
align-items: center;
text-align: center;
}
.para{
    text-align: center;
}
.king{
    text-align: center;
    font-weight: 550;
    padding-bottom: 0;
    padding-bottom: 40px;
}
.king span{
    text-align: center;
    font-weight: 550;
    padding-bottom: 0;
}
.home-foot {
    background-color: rgb(56,31,112); 
}
/* .home-foot-div{
    
} */
.home-foot p{
    background-color: rgb(56,31,112);  
    color: rgb(255, 255, 255);
    font-size :5rem;
    font-family: "Noto Serif TC", serif;
    line-height :60px ;
    max-width: 85rem;
    overflow-wrap: break-word;
    text-align: left;
    padding-top: 9rem;
    padding-bottom: 20rem;
    letter-spacing: .2rem;
/*     
    box-sizing border-box
display inline
font-family "Noto Serif TC", serif
font-style normal
font-weight 500
height auto
letter-spacing normal
*/
}

`;
