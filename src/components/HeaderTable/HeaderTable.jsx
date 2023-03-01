import React from 'react';
import style from './index.module.scss';

export default function HeaderTable() {
	return (
		<div className={style.row}>
			<div className={style.cell}>Имя</div>
			<div className={style.cell}>Email</div>
			<div className={style.cell}>Телефон</div>
			<div className={style.cell}>Страна</div>
			<div className={style.cell}>Действие</div>
		</div>
	);
}
