import Icons from "@/utils/Icons";
import styles from "../AllEvents.module.css";
import { SORT_BY } from "../constants";

interface Props {
  filter_data: {
    search_query: string;
    sort_order: string;
  };
  handle_on_change: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

// Filter component for searching & sorting
const FilterComp = ({ filter_data, handle_on_change }: Props) => {
  const { search_query, sort_order } = filter_data;

  return (
    <div className={styles.controls}>
      <input
        type="text"
        name="search_query"
        placeholder="Search events..."
        value={search_query}
        onChange={handle_on_change}
        className={styles.searchInput}
      />
      <div className={styles.sortButton}>
        <select
          className={styles.selectBar}
          name="sort_order"
          value={sort_order}
          onChange={handle_on_change}
        >
          {SORT_BY.map((each_sort, idx) => (
            <option key={idx} value={each_sort.value}>
              {each_sort.label}
            </option>
          ))}
        </select>
        <Icons.KeyboardArrowDownIcon style={{ color: "#45a049" }} />
      </div>
    </div>
  );
};

export default FilterComp;
