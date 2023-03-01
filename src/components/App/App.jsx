import React from 'react';
import style from './index.module.scss';
import Row from '../Row/Row';
import HeaderTable from '../HeaderTable/HeaderTable';
import TextArea from '../TextArea/TextArea';
import AddRow from '../AddRow/AddRow';
import { useDispatch, useSelector } from 'react-redux';
import { getActors } from '../../redux/thunk/thunk';
import { Reorder } from 'framer-motion';

export default function App() {
	const dispatch = useDispatch();
	const { actors } = useSelector(state => state.actorsRed);
	const [addButton, setAddButton] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(true);
	const [actorsState, setActorsState] = React.useState(actors);

	React.useEffect(() => {
		dispatch(getActors());
		setIsLoading(false);
	}, [dispatch]);

	const toggleAddButton = () => {
		setAddButton(!addButton);
	};

	React.useEffect(() => {
		setActorsState(actors);
	}, [actors]);

	return (
		<div className={style.app}>
			<>
				<div className={style.inner}>
					<div onClick={toggleAddButton} className={style.addButton}>
						Добавить
					</div>
					{addButton && <AddRow />}
					<HeaderTable />

					{!isLoading && actors.length ? (
						<Reorder.Group
							as='div'
							axis='y'
							values={actorsState}
							onReorder={setActorsState}
						>
							{actorsState.map(element => (
								<Row
									key={
										element.id +
										element.name +
										element.email +
										element.phone +
										element.country
									} //можно было бы оставить только element.id, но это вынужденный костыль для обновления списка на фронте (из за невозможности обновить список новыми данными при обновлении списка(т.к. API не поддерживает PATCH))
									row={element}
								/>
							))}
						</Reorder.Group>
					) : (
						<div
							style={{
								display: 'flex',
								fontSize: '38px',
								color: 'green',
								justifyContent: 'center',
								margin: '50px auto',
							}}
						>
							Loading... (возможно список пуст, добавьте строку)
						</div>
					)}
				</div>
				<TextArea />
			</>
		</div>
	);
}
