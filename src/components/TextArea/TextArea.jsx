import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { patchActors } from '../../redux/thunk/thunk';
import style from './index.module.scss';

export default function TextArea() {
	const dispatch = useDispatch();
	const { actors } = useSelector(state => state.actorsRed);
	const [formState, setFormState] = React.useState([]);
	const [info, setInfo] = React.useState('');

	const handleInputChange = e => {
		try {
			setInfo('');
			JSON.parse(e.target.value);
		} catch (e) {
			setInfo('Неправильный JSON');
		}
		setFormState(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(patchActors(JSON.parse(formState)));
	};

	const exportJson = e => {
		e.preventDefault();
		setFormState(JSON.stringify(actors));
	};

	return (
		<form className={style.form}>
			<span>
				Напишите запрос в формате JSON для обновления списка или выгрузите
				данные в JSON
			</span>
			<textarea
				className={style.textarea}
				onChange={handleInputChange}
				placeholder={`Пример:
				[
					{
						"id": "1",
						"name": "Rosie Mante",
						"email": "Watson53@gmail.com",
						"phone": "991-593-2468",
						"country": "Belize"
					},
					{
						"id": "2",
						"name": "Mr. Warren Goodwin",
						"email": "Charlie_Larson@yahoo.com",
						"phone": "668-717-7091",
						"country": "Mongolia"
					}
				]
				`}
				name={'textarea'}
				cols={160}
				rows={20}
				value={formState}
			></textarea>
			<div className={style.info}>{info}</div>
			<div className={style.btnGroup}>
				<div onClick={exportJson} className={style.btnExport}>
					Выгрузить в JSON
				</div>
				<button
					onClick={handleSubmit}
					className={style.btn}
					disabled={info ? true : false}
					type='submit'
				>
					Обновить список
				</button>
			</div>
		</form>
	);
}
