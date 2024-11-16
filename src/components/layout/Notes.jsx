import { NotesList } from '../logic/NotesList';

export const Notes = ({
	cats,
	notes,
	setNotes,
	selectedCat,
	handleCompleteButton,
	handleDeleteNote,
}) => {
	return (
		<div className='w-full pt-10 md:pt-3'>
			<h3 className='lg:hidden text-2xl font-adobeCleanBold mb-2'>Notes</h3>
			<NotesList
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
