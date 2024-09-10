import styles from "./filtersContainer.module.css";
import PricesSlider from "../pricesSlider/pricesSlider";
import Checkbox from "../checkbox/Checkbox";
import Image from "next/image";

const FiltersContainer = ({
  open,
  openFiltersClick,
  divisions,
  updateFilters,
  values,
  setValues,
  MIN,
  MAX,
  filterHandler,
  clearFilterHandler,
}) => {
  return (
    // <div className={styles.filters}>
    //   <div className={styles.divisionsFilters}>
    //     {divisions.map((division) => (
    // <Checkbox
    //   key={division._id}
    //   label={division.title}
    //   id={division._id}
    //   updateFilters={updateFilters}
    // />
    //     ))}

    //     <PricesSlider
    //       values={values}
    //       setValues={setValues}
    //       MIN={MIN}
    //       MAX={MAX}
    //     />
    //     <button className={styles.filterBtn} onClick={filterHandler}>
    //       סינון
    //     </button>
    //     <button className={styles.filterBtn} onClick={clearFilterHandler}>
    //       נקה סינון
    //     </button>
    //   </div>
    // </div>

    <div className={styles.container}>
      <div className={styles.filters} id="filters">
        {divisions.map((division) => (
          <Checkbox
            key={division._id}
            label={division.title}
            id={division._id}
            updateFilters={updateFilters}
          />
        ))}

        <PricesSlider
          values={values}
          setValues={setValues}
          MIN={MIN}
          MAX={MAX}
        />
        <button className={styles.filterBtn} onClick={filterHandler}>
          סינון
        </button>
        <button className={styles.filterBtn} onClick={clearFilterHandler}>
          נקה סינון
        </button>
      </div>
      <div>
        <Image
          id="filterLogoButton"
          className={styles.filterLogoButton}
          src={"/filter.svg"}
          alt=""
          width={30}
          height={30}
          onClick={openFiltersClick}
          unoptimized
        />
      </div>

      {open && (
        <div className={styles.mobileDivisions}>
          <div className={styles.mobileDivisionsDiv}>
            <Image
              id="filterLogoButton"
              className={styles.filterLogoButton}
              src={"/close-circle.svg"}
              alt=""
              width={30}
              height={30}
              onClick={openFiltersClick}
              unoptimized
            />
            {divisions.map((division) => (
              <Checkbox
                key={division._id}
                label={division.title}
                id={division._id}
                updateFilters={updateFilters}
              />
            ))}

            <PricesSlider
              values={values}
              setValues={setValues}
              MIN={MIN}
              MAX={MAX}
            />
            <button className={styles.filterBtn} onClick={filterHandler}>
              סינון
            </button>
            <button className={styles.filterBtn} onClick={clearFilterHandler}>
              נקה סינון
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersContainer;
