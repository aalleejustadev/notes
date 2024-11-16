import { Notes } from './Notes';
import { Sidebar } from './Sidebar';

export const Home = ({
	cats,
	setCats,
	notes,
	setNotes,
	selectedCat,
	setSelectedCat,
	handleCompleteButton,
	handleDeleteNote,
}) => {
	return (
		<div className='max-w-screen-xl mx-auto max-xl:px-5 mt-5 md:mt-10 flex justify-between flex-wrap md:flex-nowrap flex-col md:flex-row gap-x-10'>
			<Sidebar cats={cats} setCats={setCats} setSelectedCat={setSelectedCat} />
			<Notes
				cats={cats}
				notes={notes}
				setNotes={setNotes}
				selectedCat={selectedCat}
				handleCompleteButton={handleCompleteButton}
				handleDeleteNote={handleDeleteNote}
			/>
		</div>
	);
};
