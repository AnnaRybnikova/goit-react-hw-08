import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
    const dispatch = useDispatch();

    return (
        <div className={s.search_section}>
            <label className={s.search_label} htmlFor='search'>Find contacts by name</label>
            <input className={s.search_input}
                value={useSelector(selectNameFilter)}
                onChange={evt => dispatch(changeFilter(evt.target.value))}
                type='string'
                name='search'
                id='search'
            />
        </div>
  )
}

export default SearchBox