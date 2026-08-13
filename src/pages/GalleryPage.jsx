import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { galleryCategories, galleryItems } from '../data/galleryData';

export function GalleryPage({ onSelectGalleryItem }) {
  const [selectedCat, setSelectedCat] = useState('All');

  const filteredItems = selectedCat === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCat);

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
      <div className="container">
        <SectionHeading
          badge="VISUAL TOUR"
          title="FACILITY & COMMUNITY GALLERY"
          subtitle="Explore our modern strength facility, state-of-the-art equipment, group sessions, and vibrant community in Addis Ababa."
          center
        />

        {/* Category Filters */}
        <div className="filter-tabs">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCat === cat ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="gallery-grid" style={{ marginBottom: '6rem' }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => onSelectGalleryItem(item)}
            >
              <img src={item.image} alt={item.title} className="gallery-img" loading="lazy" />
              <div className="gallery-hover-overlay">
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {item.category}
                </span>
                <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginTop: '0.25rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#D4D4D8', marginTop: '0.25rem' }}>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
