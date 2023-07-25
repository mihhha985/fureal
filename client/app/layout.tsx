import { PT_Serif_Caption, Sofia_Sans_Condensed, Kablammo} from 'next/font/google';
import { Providers } from "@/store/provider";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import './globals.scss';

const lobster = Kablammo({
	weight: '400',
  subsets: ['latin'],
  display: 'swap',
	variable: '--font-lobster',
});

const caption = PT_Serif_Caption({
	weight: '400',
  subsets: ['latin'],
  display: 'swap',
	variable: '--font-caption',
});

const sofia_sans_sondensed = Sofia_Sans_Condensed({
	weight: ['600', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sofia-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`
			${sofia_sans_sondensed.variable} 
			${caption.variable}
			${lobster.variable}
		`}>
      <body>
				<Providers>
					<Header />
					<div className='wrapper'>
						<div className='content'>
							{children}
						</div>
						<div className='loader'></div>
					</div>
					<Footer />
				</Providers>
			</body>
    </html>
  )
}
