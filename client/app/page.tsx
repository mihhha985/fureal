import { Metadata } from 'next';
import MainBox from '@/components/mainBox/MainBox';
import CataLogBox from '@/components/catalogBox/CatalogBox';

export const metadata:Metadata = {
  title: 'Траурная флористика',
  description: 'Изготовление траурных винков по вашим пожеланиям',
}

export default function Home() {
	
  return (
		<>
			<MainBox />
			<CataLogBox />
		</>	
  )
}
