import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from "valtio";

import config from '../config/config';
import state from "../store";
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';

const Customizer = () => {

  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
            {/* start custom left tabs */}
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() => {}}
                  />
                ))}
              </div>
            </div>
            {/* end custom left tabs */}
          </motion.div>
          {/* start top right button */}
          <motion.div 
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
            >
              <CustomButton 
                type="filled"
                title="Torna Indietro"
                handleClick={() => state.intro = true}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
          </motion.div>
          {/* end top right button */}

          {/* start buttons filters bottom */}
          <motion.div
            className="filtertabs-container"
            {...slideAnimation('up')}
            >
              {FilterTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    isFilterTab
                    isActiveTab=""
                    handleClick={() => {}}
                  />
                ))}
            </motion.div>
          {/* end buttons filters bottom */}
        </>
        
      )}
    </AnimatePresence>
  )
}

export default Customizer