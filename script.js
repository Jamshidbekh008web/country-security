const countries = [
	{
		name: 'Germany',
		population: '81,770,900',
		region: 'Europe',
		capital: 'Berlin',
		flag: 'https://flagcdn.com/w640/de.png',
	},
	{
		name: 'United States of America',
		population: '323,947,000',
		region: 'Americas',
		capital: 'Washington, D.C.',
		flag: 'https://flagcdn.com/w640/us.png',
	},
	{
		name: 'Brazil',
		population: '206,135,893',
		region: 'Americas',
		capital: 'Brasilia',
		flag: 'https://flagcdn.com/w640/br.png',
	},
	{
		name: 'Iceland',
		population: '334,300',
		region: 'Europe',
		capital: 'Reykjavik',
		flag: 'https://flagcdn.com/w640/is.png',
	},
	{
		name: 'Afghanistan',
		population: '27,657,145',
		region: 'Asia',
		capital: 'Kabul',
		flag: 'https://flagcdn.com/w640/af.png',
	},
	{
		name: 'Åland Islands',
		population: '28,875',
		region: 'Europe',
		capital: 'Mariehamn',
		flag: 'https://flagcdn.com/w640/ax.png',
	},
	{
		name: 'Albania',
		population: '2,886,026',
		region: 'Europe',
		capital: 'Tirana',
		flag: 'https://flagcdn.com/w640/al.png',
	},
	{
		name: 'Algeria',
		population: '40,400,000',
		region: 'Africa',
		capital: 'Algiers',
		flag: 'https://flagcdn.com/w640/dz.png',
	},
]

const countriesBox = document.getElementById('countries')

function renderCountries(data) {
	countriesBox.innerHTML = ''

	data.forEach(country => {
		countriesBox.innerHTML += `
<div class="card">

<img src="${country.flag}" alt="${country.name}">

<div class="card-content">

<h2>${country.name}</h2>

<p>
<span>Population:</span>
${country.population}
</p>

<p>
<span>Region:</span>
${country.region}
</p>

<p>
<span>Capital:</span>
${country.capital}
</p>

</div>

</div>
`
	})
}

renderCountries(countries)

const themeBtn = document.getElementById('themeBtn')

themeBtn.addEventListener('click', () => {
	document.body.classList.toggle('dark')
})

const searchInput = document.getElementById('searchInput')

searchInput.addEventListener('input', () => {
	const value = searchInput.value.toLowerCase()

	const filtered = countries.filter(country =>
		country.name.toLowerCase().includes(value),
	)

	renderCountries(filtered)
})

const filterBtn = document.getElementById('filterBtn')
const dropdown = document.getElementById('dropdown')

filterBtn.addEventListener('click', () => {
	dropdown.classList.toggle('show')
})
