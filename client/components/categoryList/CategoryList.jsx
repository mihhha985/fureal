"use client"

import styles from "./CategoryList.module.scss";

function CategoryList() {
	
	return ( 
		<div className={styles.catagoryListContainer}>

			<div className={styles.categoryListBox}>

				<div className={styles.catagoryListItemActive}>
					<span>Все товары</span>
				</div>

				<div className={styles.catagoryListItem}>
					<span>Размер 48см * 48см</span>
				</div>

				<div className={styles.catagoryListItem}>
					<span>Размер 48см * 124см</span>
				</div>

				<div className={styles.catagoryListItem}>
					<span>Размер 60см * 156см</span>
				</div>

				<div className={styles.catagoryListItem}>
					<span>Патриотические венки</span>
				</div>

				<div className={styles.catagoryListItem}>
					<span>Атнические венки</span>
				</div>

				<div className={styles.catagoryListItem}>
					<span>Разное, свечи, ленты, иконы</span>
				</div>

			</div>

		</div>
	);
}

export default CategoryList;