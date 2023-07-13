import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { CustomButton } from '../components';

import state from '../store';

import { 
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
 } from '../config/motion'


const Home = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {snap.intro && (
        // logo moving from left down
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt='logo'
              className='w-20 h-20 object-contain'
            />
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET&apos;S <br className='xl:block hidden'/>DO IT.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base '>Crea la tua camicia unica ed esclusiva con il nostro nuovissimo strumento di personalizzazione 3d. <strong>Scatena la tua immaginazione</strong>{" "}e definisci il tuo stile</p>

              <CustomButton 
                type="filled"
                title="Personalizza"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
               />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home