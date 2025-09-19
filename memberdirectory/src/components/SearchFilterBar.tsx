import React from "react";
import styles from "../styles/SearchFilterBar.module.css";
import { SearchFilterBarProps } from "@/utils/searchFilterBarProps";

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  search,
  onSearchChange,
  occupation,
  onOccupationChange,
  farm,
  onFarmChange,
  kulam,
  onKulamChange,
  location,
  onLocationChange,
  occupationOptions,
  farmOptions,
  kulamOptions,
  locationOptions,
  view,
  onViewChange,
}) => (
  <div className={styles.searchFilterBar}>
    <div className={styles.searchInputWrapper}>
      <div className={styles.searchIcon}>
        {/* Search Icon */}
        <svg fill="currentColor" height="20" width="20" viewBox="0 0 256 256">
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
        </svg>
      </div>
      <input
        className={styles.searchInput}
        placeholder="Search by name, occupation, etc."
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search members"
      />
    </div>
    <div className={styles.filterButtons}>
      <span className={styles.filterButtonWrapper}>
        <select
          className={styles.filterButton}
          value={occupation}
          onChange={(e) => onOccupationChange(e.target.value)}
          aria-label="Occupation"
        >
          <option value="">Occupation/Business</option>
          {occupationOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span className={styles.dropdownArrow}>
          {/* Downward arrow SVG */}
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path
              d="M6 8l4 4 4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
      <span className={styles.filterButtonWrapper}>
        <select
          className={styles.filterButton}
          value={farm}
          onChange={(e) => onFarmChange(e.target.value)}
          aria-label="Farm/Thottam"
        >
          <option value="">Farm/Thottam</option>
          {farmOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span className={styles.dropdownArrow}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path
              d="M6 8l4 4 4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
      <span className={styles.filterButtonWrapper}>
        <select
          className={styles.filterButton}
          value={kulam}
          onChange={(e) => onKulamChange(e.target.value)}
          aria-label="Kulam"
        >
          <option value="">Kulam</option>
          {kulamOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span className={styles.dropdownArrow}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path
              d="M6 8l4 4 4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
      <span className={styles.filterButtonWrapper}>
        <select
          className={styles.filterButton}
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          aria-label="Name"
        >
          <option value="">Name</option>
          {occupationOptions && occupationOptions.length === 0 && (
            <option value="">No names available</option>
          )}
          {/* Use member names instead of location */}
          {Array.isArray(locationOptions)
            ? locationOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))
            : null}
        </select>
        <span className={styles.dropdownArrow}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path
              d="M6 8l4 4 4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
      <button
        className={
          styles.filterButton +
          " " +
          (view === "grid" ? "bg-blue-600 text-white" : "")
        }
        aria-pressed={view === "grid"}
        onClick={() => onViewChange("grid")}
        type="button"
      >
        Grid View
      </button>
      <button
        className={
          styles.filterButton +
          " " +
          (view === "list" ? "bg-blue-600 text-white" : "")
        }
        aria-pressed={view === "list"}
        onClick={() => onViewChange("list")}
        type="button"
      >
        List View
      </button>
    </div>
  </div>
);

export default SearchFilterBar;
