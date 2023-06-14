import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import ReactBricksApp from '../components/ReactBricksApp'

import '../css/styles.css'

const MyApp = (props: AppProps) => {
  return (
    
     <ReactBricksApp {...props}></ReactBricksApp>
  )
}

export default MyApp
