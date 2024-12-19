import React from 'react'
import state from '../store'
import {useSnapshot} from 'valtio'

const CustomButton = ({title, type, custom, handleClick}) => {

    const snap = useSnapshot(state);

    const generateStyle = (type) => {
        switch(type){
            case 'filled':
                return {
                    backgroundColor: snap.color,
                    color: '#fff',
                }
            case 'outlined':
                return {
                    backgroundColor: 'transparent',
                    color: '#2563EB',
                    border: '1px solid #2563EB',
                }
            default:
                return {
                    backgroundColor: '#2563EB',
                    color: '#fff',
                }
        }
    }

  return (
    <button className={`px-2 py-1.5 rounded-md ${custom}`} style={generateStyle(type)} onClick={handleClick}>
        {title}
    </button>
  )
}

export default CustomButton
