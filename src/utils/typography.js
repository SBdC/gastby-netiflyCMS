import Typography from "typography"
import kirkhamTheme from 'typography-theme-kirkham'

const typography = new Typography(kirkhamTheme)


export const { scale, rhythm, options } = typography
export default typography


// import Wordpress2016 from "typography-theme-wordpress-2016"
//
// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//   }
// }
//
// delete Wordpress2016.googleFonts
//
// const typography = new Typography(Wordpress2016)
//
// // Hot reload typography in development.
// if (process.env.NODE_ENV !== `production`) {
//   typography.injectStyles()
// }
//
// export default typography
// export const rhythm = typography.rhythm
// export const scale = typography.scale
