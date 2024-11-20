import PropTypes from "prop-types";
import s from "./SearchBox.module.css";

const SearchBox = ({ searchWord, onSearch }) => {
    return (
        <div className={s.search_section}>
            <label className={s.search_label} htmlFor='search'>Find contacts by name</label>
            <input className={s.search_input}
                value={searchWord}
                onChange={evt => onSearch(evt.target.value)}
                type='string'
                name='search'
                id='search'
            />
        </div>
  )
}

SearchBox.propTypes = {
    searchWord: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
}

export default SearchBox