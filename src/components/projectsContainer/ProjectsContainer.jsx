"use client";

import Link from "next/link";
import styles from "./projectsContainer.module.css";
import ProjectCard from "../projectCard/ProjectCard";
import { useState } from "react";
import Image from "next/image";
import FiltersContainer from "../filtersContainer/FiltersContainer";

const ProjectsContainer = ({ projects, divisions, link }) => {
  const MIN = 0;
  const MAX = 5000;

  const [values, setValues] = useState([MIN, MAX]);
  const [showItems, setShowItems] = useState(6);
  const [divisionFilters, setDivisionFilters] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [open, setOpen] = useState(false);

  const openFiltersClick = () => {
    clearFilterHandler();
    setOpen((prev) => !prev);
  };

  const updateFilters = (e) => {
    const selectedDivision = e.target.value;
    const checked = e.target.checked;

    if (checked && selectedDivision.length > 0) {
      const inDivisionFilters = divisionFilters.includes(selectedDivision);
      if (!inDivisionFilters) {
        setDivisionFilters((divisionFilters) => [
          ...divisionFilters,
          selectedDivision,
        ]);
      }
    } else {
      setDivisionFilters((divisionFilters) =>
        divisionFilters.filter((value, i) => value !== selectedDivision)
      );
    }
  };

  const handleShowMore = () => {
    setShowItems((prevShowItems) =>
      prevShowItems >= projects.length ? prevShowItems : prevShowItems + 4
    );
  };

  function isInRange(number, valueRange) {
    return valueRange[0] <= number && number <= valueRange[1];
  }

  const filterHandler = () => {
    console.log(divisionFilters);

    if (divisionFilters.length === 0) {
      divisions.map((division) => {
        setDivisionFilters((divisionFilters) => [
          ...divisionFilters,
          division._id,
        ]);
      });
      const divisionFilter = projects.filter((item) => {
        return divisionFilters.includes(item.division[0]);
      });

      const priceFilter = divisionFilter.filter((item) => {
        return isInRange(item.price, values);
      });

      setFilteredProjects(priceFilter);
    }

    const divisionFilter = projects.filter((item) => {
      return divisionFilters.includes(item.division[0]);
    });

    const priceFilter = divisionFilter.filter((item) => {
      return isInRange(item.price, values);
    });

    setFilteredProjects(priceFilter);
  };

  const clearCheckBoxes = () => {
    setValues([0, 5000]);
    var clist = document.getElementsByTagName("input");
    for (var i = 0; i < clist.length; ++i) {
      clist[i].checked = false;
    }
  };

  const clearFilterHandler = () => {
    clearCheckBoxes();
    setFilteredProjects(projects);
  };

  const filterLogoClick = () => {
    setOpen(true);
  };

  const displayedItems = filteredProjects.slice(0, showItems).map((project) => (
    <Link href={`${link}${project.slug}`} key={project.slug}>
      <ProjectCard project={project} />
    </Link>
  ));

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsBoxesContainer}>
        <div className={styles.headers}>
          <h1 className={styles.pageHeader}>הפרויקטים שלנו</h1>
          <div className={styles.filtersShowBtn}>
            <Image
              onClick={filterLogoClick}
              className={styles.filterLogo}
              src="/filter.svg"
              width={30}
              height={30}
              alt="filter-logo"
              unoptimized
            />
          </div>
        </div>
        <div className={styles.boxContainer}>{displayedItems}</div>
        {showItems < filteredProjects.length ? (
          <button className={styles.showMoreBtn} onClick={handleShowMore}>
            <h2>טען עוד</h2>
          </button>
        ) : (
          <></>
        )}
      </div>
      <FiltersContainer
        open={open}
        openFiltersClick={openFiltersClick}
        divisions={divisions}
        updateFilters={updateFilters}
        values={values}
        setValues={setValues}
        MIN={MIN}
        MAX={MAX}
        filterHandler={filterHandler}
        clearFilterHandler={clearFilterHandler}
      />
    </div>
  );
};

export default ProjectsContainer;
