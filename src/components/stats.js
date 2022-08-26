import { Link } from 'react-router-dom';

export function Stats({ country, borders }) {
	return (
		<div className='ml-32 mt-12'>
			<h1 className='text-2xl font-bold mb-4'>{country?.name}</h1>

			<p>
				<span className='font-bold'>Native Name:</span> {country?.nativeName}
			</p>
			<p>
				<span className='font-bold'>Population:</span> {country?.population}
			</p>
			<p>
				<span className='font-bold'>Region:</span> {country?.region}
			</p>
			<p>
				<span className='font-bold'>Sub Region:</span> {country?.subregion}
			</p>
			<p>
				<span className='font-bold'>Capital:</span> {country?.capital}
			</p>
			<p>
				<span className='font-bold'>Top Level Domain:</span>{' '}
				{country?.topLevelDomain}
			</p>
			<p>
				<span className='font-bold'>Currency:</span>{' '}
				{country?.currencies?.length !== 1 ? (
					country?.currencies?.map((c) => (
						<span className='mx-1' key={c?.name}>
							{c?.name},
						</span>
					))
				) : (
					<span>{country?.currencies[0]?.code}</span>
				)}
			</p>
			<div>
				<span className='font-bold'>Languages:</span>{' '}
				{country?.languages?.length !== 1 ? (
					country?.languages?.map((l) => (
						<span className='mx-1' key={l?.name}>
							{l?.name},
						</span>
					))
				) : (
					<span>{country?.languages[0]?.name}</span>
				)}
				<div>
					<p className='font-bold'>
						Bordering Countries:{' '}
						{borders?.map((b) => (
							<Link
								to={`/countries/${b.name}`}
								className='mx-1 link'
								key={b.name}>
								{b.name},
							</Link>
						))}
					</p>
				</div>
			</div>
		</div>
	);
}
