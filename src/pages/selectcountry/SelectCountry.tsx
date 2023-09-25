import { useContext, useEffect } from "react"
import { NewsContext } from "../../context/news-context"
import countryData from '../../data/country';

function SelectCountry() {
    const {
        countries,
        countryInput,
        countryFiltered,
        setCountryInput,
        setCountryFiltered
    } = useContext(NewsContext);

    const save = (country: string, nameCountry: string) => {
        localStorage.setItem('country', JSON.stringify({ country, nameCountry }))
    };

    useEffect(() => {
        const filterByName = () => {
            const filter = countries.filter((country) => {
                return countryData[country].toLowerCase().includes(countryInput)
            })
            setCountryFiltered(filter)
        }
        filterByName()
    }, [countryInput])
    return (
        <>
            <h4>Select your Country</h4>
            <input
                type="text"
                placeholder="Search"
                value={countryInput}
                onChange={({ target }) => setCountryInput(target.value)} />
            {
                countryFiltered.map((country, i) => {
                    return (
                        <label htmlFor={`${country}${i}`} key={`${country}${i}`}>
                            <input
                                id={`${country}${i}`}
                                type="radio"
                                name="country"
                                value={`${country}${i}`}
                                onClick={() => save(country, countryData[country])} />
                            <img
                                src={`https://flagcdn.com/w40/${country}.png`}
                                srcSet={`https://flagcdn.com/w80/${country}.png 2x`}
                                width="40"
                                alt={`país ${country}`} >
                            </img>
                            <span>{countryData[country]}</span>
                        </label>
                    )
                })
            }
            <a href="/topics">Next</a>
        </>
    )
}

export default SelectCountry