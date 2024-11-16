import { Note } from './Note';

// const notesList = [
// 	{
// 		id: 1,
// 		title: 'The first note title',
// 		content:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum leo sed leo consectetur pulvinar.',
// 		category: 0,
// 		completed: false,
// 	},
// 	{
// 		id: 2,
// 		title: 'The second note title',
// 		content:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum leo sed leo consectetur pulvinar.',
// 		category: 2,
// 		completed: false,
// 	},
// 	{
// 		id: 3,
// 		title: 'The third note title',
// 		content:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum leo sed leo consectetur pulvinar.',
// 		category: 1,
// 		completed: false,
// 	},
// ];

export const NotesList = ({ cats, notes, selectedCat, handleCompleteButton, handleDeleteNote }) => {
	return (
		<div className='flex justify-between flex-col md:flex-row flex-wrap gap-x-[3%]'>
			{selectedCat
				? notes
						?.filter(note => {
							return Number(note.selectedCategory) === Number(selectedCat);
						})
						.map(note => {
							return (
								<Note
									key={note.id}
									id={note.id}
									title={note.title}
									content={note.content}
									completed={note.completed}
									noteCategory={cats.length && cats[note.selectedCategory - 1]?.name}
									handleCompleteButton={() => handleCompleteButton(note.id)}
									handleDeleteNote={() => handleDeleteNote(note.id)}
								/>
							);
						})
				: notes?.map(note => {
						return (
							<Note
								key={note.id}
								title={note.title}
								content={note.content}
								completed={note.completed}
								noteCategory={cats.length && cats[note.selectedCategory - 1]?.name}
								handleCompleteButton={() => handleCompleteButton(note.id)}
								handleDeleteNote={() => handleDeleteNote(note.id)}
							/>
						);
				  })}
		</div>
	);
};
