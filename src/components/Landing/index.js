import React from 'react'
import foregroundImg from '../../images/foreground.png'
import backgroundImg from '../../images/background1.png'
import midgroundImg from '../../images/mid.png'
import earth from '../../images/earth.png'
import rock1 from '../../images/rock.png'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Landing = () => {
   const fadeLeft = {
       hidden: { opacity: 0 , x: -100},
       visible: { opacity: 1, x: 0}
   }

    const ImageRight = styled(motion.img)`
    position: absolute;
    width: 50%;
    height: 100vh;
 
 `;

    const ImageMid = styled(motion.img)`
    position: absolute;
    width: 1100px;
    height: 200px;

`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${backgroundImg});

  ${ImageRight}:nth-child(1) {
    top: 40px;
    left: 800px;
  }

  ${ImageMid}:nth-child(2) {
    bottom: -40px;
    left: 30px;
  }

`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  p {
    margin: 1rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1rem;
  border: 1px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;


const ImageRock = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 60px;
  max-height: 60px;
`;



const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${ImageRock}:nth-child(2) {
    top: 10px;
    right: 300px;
  }
  ${ImageRock}:nth-child(3) {
    bottom: 100px;
    right: 600px;
  }
  
`;

    return (
        
     <>
       <Section>
           <ImageRight src={foregroundImg}/>
           <ImageMid src={midgroundImg}/>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to Galaxy 
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            Your journey to NFT
          </motion.p>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: '#67F6E7',
              border: 'none',
              color: '#000'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Get Started
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={earth}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 2 }, rotate: 360 }}
          />
           <ImageRock
            src={rock1}
            alt='rock'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 10, bottom: 50 }}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 6 }, 
            scale: [1, 1, 1, 2, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "20%", "20%"]  }}
          />
          <ImageRock
            src={rock1}
            alt='rock'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 10, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 6 }, 
            scale: [1, 2, 2, 1, 1],
            rotate: [360, 0, 360, 270, 180],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"]}}
          />
        </ColumnRight>
      </Container>
    </Section>
        
            
        </>
    )
}

export default Landing
