import { Trash } from 'lucide-react';

Trash;

export const Note = ({
	title,
	content,
	noteCategory,
	completed,
	handleCompleteButton,
	handleDeleteNote,
}) => {
	return (
		<div
			className={`w-full md:w-[48.5%] p-8 rounded-2xl mb-7 ${completed ? 'bg-light' : 'bg-corn'}`}
		>
			<div className='flex items-start justify-between gap-x-3'>
				<h3
					className={`text-2xl mb-5 font-adobeCleanBold ${
						completed && 'line-through text-gray-500'
					}`}
				>
					{title}
				</h3>
				<button onClick={handleDeleteNote}>
					<Trash className='text-tana-400' />
				</button>
			</div>
			<p className={`mb-4 pb-4 border-b ${completed && 'line-through text-gray-400'}`}>{content}</p>
			<div className='flex items-center justify-between'>
				{noteCategory?.length ? (
					<p className='py-1 px-3 rounded-full bg-rose text-center text-sm'>{noteCategory}</p>
				) : null}

				<p
					className={`pb-2 cursor-pointer ${
						completed && 'text-gray-400 cursor-no-drop line-through'
					}`}
					onClick={handleCompleteButton}
				>
					{completed ? 'Completed' : 'Complete'}
				</p>
			</div>
		</div>
	);
};
