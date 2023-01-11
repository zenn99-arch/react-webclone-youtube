import React from 'react'
import { Stack } from '@mui/system'
import { categories } from '../Utils/constants'



const SideBar = (props) => {

  const {setSelectedCategory, SelectedCategory} = props

  return (
    <Stack direction='row' sx={{overflow: 'auto', height: {sx:'auto', md:'95%'}, flexDirection: { md:'column' } }} >
        {categories.map((category) => (
            <button className='category-btn'
            onClick={ () => {
              setSelectedCategory(category.name)
            } } style= {{
                background: category.name === SelectedCategory && '#FC1503', color: '#fff'
            }} ket={category.name}  >
                <span style={{color: category.name === SelectedCategory ? 'white' : 'red', marginRight: '15px' }} >{category.icon}</span>
                <span style={{opacity: category.name === SelectedCategory ? '100%' : '70%' }} >{category.name}</span>
            </button>
        ) )}
    </Stack>
  )
}

export default SideBar