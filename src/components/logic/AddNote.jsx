import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

export const AddNote = ({ cats, notes, setNotes }) => {
	const [modalVisibility, setModalVisibility] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [selectedCategory, setSelectedCategory] = useState(0);

	const handleModalVisibility = () => {
		setModalVisibility(!modalVisibility);
	};

	const handleAddNoteSubmit = e => {
		e.preventDefault();
		setModalVisibility(!modalVisibility);
		title !== '' && description !== '' && selectedCategory !== 0
			? setNotes([
					...notes,
					{
						id: !notes.length ? 1 : notes.length + 1,
						title: title,
						content: description,
						selectedCategory: selectedCategory,
						completed: false,
					},
			  ])
			: null;
		setTitle('');
		setDescription('');
		setSelectedCategory(0);
	};

	// useEffect(() => {
	// 	console.log(notes);
	// }, [notes, setNotes]);

	return (
		<>
			<Plus
				className='text-tana-800 cursor-pointer'
				size={38}
				strokeWidth={2.5}
				onClick={handleModalVisibility}
			/>
			{modalVisibility && (
				<div className='fixed top-0 left-0 z-20 p-5 md:p-0 w-full h-full flex items-center justify-center bg-dark-500'>
					<div className='w-full max-w-screen-md h-auto p-10 md:p-12 rounded-3xl bg-white shadow-md'>
						<form action='' onSubmit={handleAddNoteSubmit}>
							<div className='flex items-start justify-between mb-4'>
								<button className='hover:underline' onClick={handleModalVisibility}>
									Cancel
								</button>
								<button
									type='submit'
									className='transition hover:shadow-xl rounded-lg py-3 px-8 text-center bg-tana-800 text-white'
								>
									Add
								</button>
							</div>
							<div>
								<label htmlFor='addTitle' className='text-xl font-adobeCleanBold block mb-1'>
									Title
								</label>
								<input
									id='addTitle'
									type='text'
									placeholder='Add a title ...'
									value={title}
									onChange={e => setTitle(e.target.value)}
									className='rounded-md bg-light p-3 w-full block mb-4'
								/>
								<label htmlFor='addDescription' className='text-xl font-adobeCleanBold block mb-1'>
									Description
								</label>
								<textarea
									id='addDescription'
									placeholder='Add a description ...'
									value={description}
									onChange={e => setDescription(e.target.value)}
									className='rounded-md bg-light p-3 w-full block mb-4 min-h-28'
								></textarea>
								<label htmlFor='selectCategory' className='text-xl font-adobeCleanBold block mb-1'>
									Category
								</label>
								<select
									className='rounded-md bg-light p-3 w-full block'
									name='selectCategory'
									id='selectCategory'
									value={selectedCategory}
									onChange={e => setSelectedCategory(e.target.value)}
								>
									<option value=''>Select a category ...</option>
									{cats?.map(cat => {
										return (
											<option key={cat.id} value={cat.id}>
												{cat.name}
											</option>
										);
									})}
								</select>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};
