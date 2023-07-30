import { useTranslation } from "next-i18next"
import { useEffect } from "react"

export const useHMR = () => {
  const { i18n } = useTranslation()

//   if (process.env.NODE_ENV === "development" && !process.browser) {
//     import("i18next-hmr/server").then(({ applyServerHMR }) => {
//       applyServerHMR(i18n)
//     })
//   }

  useEffect(() => {
    console.log('reaching custom hook useHMR')
    // import("i18next-hmr/client").then(({ applyClientHMR,  }) => {
    import("i18next-hmr/client").then( i18Client => {
        console.log('i18Client')
        console.log(i18Client)

        console.log('i18Client.applyClientHMR')
        console.log(i18Client.applyClientHMR)
        i18Client.applyClientHMR(i18n)
    })
  }, [i18n])
}