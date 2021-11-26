import "@fontsource/roboto"
import { between } from 'polished'

const breakpoints = ['40em', '52em', '64em', '80em'] // [640px , 832px, 1024px, 1280px]

// aliases
breakpoints.sm = breakpoints[0] // 640px
breakpoints.md = breakpoints[1] // 832px
breakpoints.lg = breakpoints[2] // 1024px
breakpoints.xl = breakpoints[3] // 1280px

export const breakpointsAliases = ["xs", "sm", "md", "lg"]

const fontFamilyPrimary = `
  font-family: "Roboto";
  font-weght: 400;
`
const fontFamilySecondary = `
  font-family: "Roboto";
  font-weght: 700;
`

const space = []
for (let i = 0; i <= 200; i++) {
  space[i] = `${i * 4}px`
}
const sizes = space

const pallete = {
  common: {
    black: "#000",
    white: "#fff",
    grey: "#e6e6e6"
  },
  text: {
    primary: '#192F2D',
    secondary: '#A3B7B5',
    active: '#18C6AC',
    inactive: '#C5D6D5'
  },
  border: '#C5D6D5'
}

const typography = {
  htmlFontSize: 16,
  fontSize: 14,
  fontFamily: {
    primary: fontFamilyPrimary,
    secondary: fontFamilySecondary
  },
  title: `
      ${fontFamilyPrimary};
      font-size: 4em;
    `,
  subtitle: `
      ${fontFamilyPrimary};
      font-size: ${between('24px', '36px', '400px', '1500px')};
    `,

  navigation: `
      ${fontFamilySecondary};
      font-size: ${between('16px', '20px', '400px', '1500px')};
      color: ${pallete.text.secondary};
    `,
  body: `
      ${fontFamilySecondary};
      font-size: ${between('14px', '16px', '400px', '1500px')};
      line-height: 1.4em;
      `,

  label: `
    ${fontFamilySecondary};
    line-height: 1.2em;
    font-size: ${between('16px', '18px', '400px', '1500px')};
  `,

}

const theme = {
  pallete,
  breakpoints,
  space,
  sizes,
  typography
}

export default theme