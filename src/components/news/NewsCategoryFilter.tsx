import React from 'react';
import { NewsCategoryName, NewsCategorySpec } from '../../data/news';

export type NewsCategorySelection = 'All' | NewsCategoryName;

export interface NewsCategoryFilterProps {
  categories: NewsCategorySpec[];
  selectedCategory: NewsCategorySelection;
  onSelectCategory: (category: NewsCategorySelection) => void;
}

/**
 * Reusable News Category Filter Bar (Phase 7 — Section 4)
 * Data-driven filter controls supporting Company, Technology, Engineering,
 * Products, Research, Announcements, and future categories.
 */
export const NewsCategoryFilter: React.FC<NewsCategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div
      role="tablist"
      aria-label="Filter news categories"
      className="inline-flex flex-wrap items-center gap-1 p-1 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-[var(--radius-md)]"
    >
      <button
        role="tab"
        type="button"
        aria-selected={selectedCategory === 'All'}
        onClick={() => onSelectCategory('All')}
        className={`px-3 py-1.5 text-xs font-semibold rounded-[var(--radius-sm)] transition-colors whitespace-nowrap cursor-pointer ${
          selectedCategory === 'All'
            ? 'bg-[var(--color-accent)] text-[var(--color-button-text)]'
            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
        }`}
      >
        All Categories
      </button>

      {categories.map((cat) => {
        const active = selectedCategory === cat.name;
        return (
          <button
            key={cat.id}
            role="tab"
            type="button"
            aria-selected={active}
            onClick={() => onSelectCategory(cat.name)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-[var(--radius-sm)] transition-colors whitespace-nowrap cursor-pointer ${
              active
                ? 'bg-[var(--color-accent)] text-[var(--color-button-text)]'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
};
