import { types } from 'react-bricks/frontend'

//import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import Thumbnail from './Thumbnail'
import Footer_copyRight from './Footer_copyRight'


const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    /*themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit], // Custom Bricks
      },
    ],*/
    themeName: 'Custom Theme 1',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [Thumbnail, Footer_copyRight], // Custom Bricks
      },
    ],
  },
]

export default bricks

