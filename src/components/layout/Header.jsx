import { AddNote } from '../logic/AddNote';
import { Logo } from './Logo';

export const Header = ({ cats, notes, setNotes }) => {
	return (
		<div className='max-w-screen-xl max-xl:px-5 mx-auto py-7 md:py-10 mb-8 md:mb-0 flex items-center justify-between border-b md:border-b-0'>
			{/* Logo */}
			<Logo />
			{/* Add note */}
			<AddNote cats={cats} notes={notes} setNotes={setNotes} />
		</div>
	);
};
