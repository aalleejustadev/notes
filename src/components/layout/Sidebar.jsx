import { Categories } from '../logic/Categories';

export const Sidebar = ({ cats, setCats, setSelectedCat }) => {
	return (
		<div className='basis-1/5'>
			<h3 className='lg:hidden text-2xl font-adobeCleanBold mb-2'>Categories</h3>
			<Categories cats={cats} setCats={setCats} setSelectedCat={setSelectedCat} />

			{/* Image below categories */}
			<div className='mt-12 w-[120px] hidden lg:block'>
				<img className='w-full object-contain' src='/images/notes.svg' alt='Notes Illustration' />
			</div>
		</div>
	);
};
