import GlobalStyles from '../src/styles/globals'
import * as NextImage from "next/image";
import CurrentUserProvider from "../src/contexts/currentUserContext"

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});
export const decorators = [
  (Story) => (
    <>
      <CurrentUserProvider>
      <GlobalStyles />
      <Story />
      </CurrentUserProvider>
    </>
  )
]