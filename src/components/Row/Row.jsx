import { Reorder } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteActor, putActor } from '../../redux/thunk/thunk';
import style from './index.module.scss';

export default function Row({ row }) {
	const dispatch = useDispatch();
	const [formState, setFormState] = React.useState({
		id: row.id,
		name: row.name,
		email: row.email,
		phone: row.phone,
		country: row.country,
	});

	const delRow = e => {
		e.preventDefault();
		dispatch(deleteActor(row.id));
	};

	const updateRow = e => {
		e.preventDefault();
		dispatch(putActor(formState));
	};

	const handleInputChange = e => {
		const target = e.target;
		const name = target.name;
		setFormState(prevState => ({ ...prevState, [name]: target.value }));
	};

	return (
		<Reorder.Item
			as='div'
			value={row}
			whileDrag={{
				outline: '2px solid green'
			}}
		>
			<form>
				<div className={style.row}>
					<input
						onChange={handleInputChange}
						type='text'
						className={style.cell}
						name='name'
						value={formState.name}
					/>
					<input
						onChange={handleInputChange}
						value={formState.email}
						type='text'
						className={style.cell}
						name='email'
					/>
					<input
						onChange={handleInputChange}
						value={formState.phone}
						type='text'
						className={style.cell}
						name='phone'
					/>
					<input
						onChange={handleInputChange}
						value={formState.country}
						type='text'
						className={style.cell}
						name='country'
					/>
					<div className={style.btnGroup}>
						<button onClick={updateRow} className={style.btnUpdate}>
							Сохр. изменения
						</button>
						<button onClick={delRow} className={style.btnDelete}>
							Удалить
						</button>
						<div className={style.move}>☰</div>
					</div>
				</div>
			</form>
		</Reorder.Item>
	);
}
