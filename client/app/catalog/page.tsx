import CataLogBox from "@/components/catalogBox/CatalogBox";
import CategoryList from "@/components/categoryList/CategoryList";

function Page() {
	return ( 
		<section id="catalog">
			<div className="container">
				<h3 className="title">Каталог товаров</h3>
				<CategoryList />
				<CataLogBox />
			</div>
		</section>
	);
}

export default Page;