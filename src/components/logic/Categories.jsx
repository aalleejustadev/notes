import { CirclePlus } from 'lucide-react';
import { useState } from 'react';

export const Categories = ({ cats, setCats, setSelectedCat }) => {
	const [newCat, setNewCat] = useState('');

	const addCategoryHandleSubmit = e => {
		e.preventDefault();

		setCats([...cats, { id: cats.length + 1, name: newCat }]);
		setNewCat('');
	};

	return (
		<div>
			{/* Categories */}
			{cats.map(cat => {
				return (
					<p
						className='m-0 py-3 text-lg hover:text-rose transition cursor-pointer'
						data-id={cat.id}
						key={cat.id}
						onClick={() => setSelectedCat(cat.id)}
					>
						{cat.name}
					</p>
				);
			})}

			{/* Add New Category */}
			<form
				onSubmit={addCategoryHandleSubmit}
				action=''
				className='relative border flex flex-row items-center justify-between gap-2 mt-4 rounded-md overflow-hidden'
			>
				<input
					type='text'
					placeholder='Category Name'
					className='p-3 md:p-2 pr-14 indent-2 text-sm w-full focus:outline-none'
					value={newCat}
					onChange={e => setNewCat(e.target.value)}
				/>
				<button
					type='submit'
					className='absolute right-0 bg-tana-800 h-11 w-11 md:h-10 md:w-10 flex items-center justify-center'
				>
					<CirclePlus color='white' />
				</button>
			</form>
		</div>
	);
};
