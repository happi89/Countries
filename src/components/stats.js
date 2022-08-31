import { Link } from 'react-router-dom';

export function Stats({ country, borders }) {
	const {
		name,
		nativeName,
		population,
		region,
		subregion,
		capital,
		currencies,
		languages,
		topLevelDomain,
	} = country;
	return (
		<div className='ml-32 mt-12'>
			<h1 className='text-2xl font-bold mb-4'>{name}</h1>

			<p>
				<span className='font-bold'>Native Name:</span> {nativeName}
			</p>
			<p>
				<span className='font-bold'>Population:</span> {population}
			</p>
			<p>
				<span className='font-bold'>Region:</span> {region}
			</p>
			<p>
				<span className='font-bold'>Sub Region:</span> {subregion}
			</p>
			<p>
				<span className='font-bold'>Capital:</span> {capital}
			</p>
			<p>
				<span className='font-bold'>Top Level Domain:</span> {topLevelDomain}
			</p>
			<p>
				<span className='font-bold'>Currency:</span>{' '}
				{currencies?.length !== 1 ? (
					currencies?.map((c) => (
						<span className='mx-1' key={c?.name}>
							{c?.name},
						</span>
					))
				) : (
					<span>{currencies[0]?.code}</span>
				)}
			</p>
			<div>
				<span className='font-bold'>Languages:</span>{' '}
				{languages?.length !== 1 ? (
					languages?.map((l) => (
						<span className='mx-1' key={l?.name}>
							{l?.name},
						</span>
					))
				) : (
					<span>{languages[0]?.name}</span>
				)}
				{borders?.length > 0 ? (
					<div>
						<p className='font-bold'>
							Bordering Countries:{' '}
							{borders?.map((b) => (
								<Link
									to={`/countries/${b.name}`}
									className='mx-1 link'
									key={b?.name}>
									{b?.name},
								</Link>
							))}
						</p>
					</div>
				) : null}
			</div>
		</div>
	);
}
