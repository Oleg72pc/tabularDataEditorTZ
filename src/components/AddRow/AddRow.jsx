import React from 'react';
import { useDispatch } from 'react-redux';
import { postActor } from '../../redux/thunk/thunk';
import style from './index.module.scss';

export default function AddRow() {
	const dispatch = useDispatch();
	const [formState, setFormState] = React.useState({
		name: '',
		email: '',
		phone: '',
		country: '',
	});

	const handleInputChange = event => {
		const target = event.target;
		const name = target.name;
		setFormState(prevState => ({ ...prevState, [name]: target.value }));
	};

	const handleSubmit = event => {
		event.preventDefault();
		dispatch(postActor(formState));
	};
	return (
		<form>
			<div className={style.row}>
				<input
					onChange={handleInputChange}
					value={formState.name}
					type='text'
					className={style.cell}
					placeholder='Имя'
					name='name'
				/>
				<input
					onChange={handleInputChange}
					value={formState.email}
					type='text'
					className={style.cell}
					placeholder='Email'
					name='email'
				/>
				<input
					onChange={handleInputChange}
					value={formState.phone}
					type='text'
					className={style.cell}
					placeholder='Телефон'
					name='phone'
				/>
				<input
					onChange={handleInputChange}
					value={formState.country}
					type='text'
					className={style.cell}
					placeholder='Страна'
					name='country'
				/>
				<div className={style.btn} type='submit' onClick={handleSubmit}>
					Сохранить
				</div>
			</div>
		</form>
	);
}
