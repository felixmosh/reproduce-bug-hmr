import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import nextI18NextConfig from '../../next-i18next.config';
import Link from 'next/link';

export default function Home(props) {

const router = useRouter();
const changeTo = router.locale === 'en' ? 'de' : 'en'

const { t:translate } = useTranslation(['ns1','common']);

return(
    <div>
        <h1>
            Translation the key "welcome"
            <br/> ---::: {translate("welcome")}
        </h1>

        <h1>
            ONLY EXIST IN COMMON
            <br/> ---::: {translate("missingNEW")}
        </h1>

        <Link href={router.pathname} locale={changeTo}>
           LINK TO CHANGE LOCALE
        </Link>
    </div>
)
}

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['ns1','common'],nextI18NextConfig)),
      },
    }
}