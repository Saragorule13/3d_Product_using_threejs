import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {useSnapshot} from 'valtio'
import { AIPicker, FilePicker, ColorPicker, Tab, CustomButton } from '../components'

import config from '../config/config'
import state from '../store'
import {download} from '../assets'
import {downloadCanvasToImage, reader} from '../config/helpers'
import {EditorTabs, FilterTabs, DecalTypes} from '../config/constants'
import {fadeAnimation, slideAnimation} from '../config/motion'


const Customizer = () => {

  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
        <motion.div key={"custom"} {...slideAnimation('left')} className='absolute top-0 left-0 z-10'> 
          <div className='flex items-center min-h-screen'>
            <div className='editortabs-container tabs'>
              {EditorTabs.map((tab)=>(
                <Tab
                  key={tab.name}
                  tab={tab}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className='absolute z-10 top-5 right-5' {...fadeAnimation}>
          <CustomButton
          type={"filled"}
          title={"Go Back"}
          handleClick={()=> state.intro = true}
          custom='w-fit px-4 py-2.5 font-bold text-sm'
          />       
         </motion.div>

         <motion.div className='filtertabs-container' {...slideAnimation('up')} >
          {FilterTabs.map((tab)=>(
            <Tab
             key={tab.name}
              tab={tab}
              isFilterTab
              isActiveTab=" "
              handleClick={()=>{}}
            />
          ))}
         </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer
