import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Home } from './components/layout/Home';

function App() {
	const [cats, setCats] = useState([]);
	const [notes, setNotes] = useState([]);
	const [selectedCat, setSelectedCat] = useState(null);

	const handleCompleteButton = id => {
		setNotes(
			notes?.map(note => {
				if (note.id === id) {
					return { ...note, completed: true };
				} else {
					return note;
				}
			})
		);
	};

	const handleDeleteNote = id => {
		setNotes(
			notes?.filter(note => {
				return note.id !== id;
			})
		);
	};

	return (
		<main className='p-5 md:p-12 bg-light min-h-screen w-full relative overflow-hidden'>
			<div className='w-[700px] h-[650px] rounded-full bg-blue absolute -top-[450px] -left-[200px]'></div>
			<div className='w-[400px] md:w-[700px] h-[400px] md:h-[650px] rounded-full bg-romance absolute bottom-0 -right-16 md:right-0'></div>
			<div className='min-h-[94vh] md:min-h-[90vh] relative z-10 bg-white rounded-3xl shadow-sm'>
				<Header
					cats={cats}
					setCats={setCats}
					notes={notes}
					setNotes={setNotes}
					selectedCat={selectedCat}
					setSelectedCat={setSelectedCat}
				/>
				<Home
					cats={cats}
					setCats={setCats}
					notes={notes}
					setNotes={setNotes}
					selectedCat={selectedCat}
					setSelectedCat={setSelectedCat}
					handleCompleteButton={handleCompleteButton}
					handleDeleteNote={handleDeleteNote}
				/>
			</div>
		</main>
	);
}

export default App;
