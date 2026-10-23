import { useRef, useState } from "react";

// One object per piece of art. Edit the title, medium, year, and alt text.
const artworks = [
  {
    id: 1,
    src: "/art/IMG_1249.jpeg",
    //title: "Title 1",
    // medium: "Medium",
    // year: 2025,
    // alt: "Describe this piece",
  },
  {
    id: 2,
    src: "/art/IMG_1373.jpeg",
    //title: "Title 2",
    // medium: "Medium",
    // year: 2025,
    // alt: "Describe this piece",
  },
  {
    id: 3,
    src: "/art/IMG_2324.jpeg",
    // title: "Title 3",
    // medium: "Medium",
    // year: 2025,
    // alt: "Describe this piece",
  },
  {
    id: 4,
    src: "/art/IMG_2407.jpeg",
    // title: "Title 4",
    // medium: "Medium",
    // year: 2025,
    // alt: "Describe this piece",
  },
  {
    id: 5,
    src: "/art/IMG_2515.jpeg",
    // title: "Title 5",
    // medium: "Medium",
    // year: 2025,
    // alt: "Describe this piece",
  },
  {
    id: 6,
    src: "/art/IMG_3410.jpeg",
    // title: "Title 6",
    // medium: "Medium",
    // year: 2025,
    // alt: "Describe this piece",
  },
  {
    id: 7,
    src: "/art/IMG_3652.jpeg",
    // title: "Title 7",
    // medium: "Medium",
    // year: 2025,
    // alt: "Describe this piece",
  },
  {
    id: 8,
    src: "/art/IMG_3915.jpeg",
    // title: "Title 8",
    // medium: "Medium",
    // year: 2025,
    // alt: "Describe this piece",
  },
  {
    id: 9,
    src: "/art/IMG_3933.jpeg",
    // title: "Title 9",
    // medium: "Medium",
    // year: 2025,
    // alt: "Describe this piece",
  },
];

// Adds the site's base path (/portfolio/) so images work on GitHub Pages
const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export default function ArtGallery() {
  const dialogRef = useRef(null);
  const [selected, setSelected] = useState(null);

  function openPiece(piece) {
    setSelected(piece);
    dialogRef.current.showModal();
  }

  function closeDialog() {
    dialogRef.current.close();
  }

  return (
    <section className="gallery" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading">Art Gallery</h2>

      <ul className="gallery-grid">
        {artworks.map((piece) => (
          <li key={piece.id}>
            <button
              type="button"
              className="gallery-item"
              onClick={() => openPiece(piece)}
            >
              <img src={assetUrl(piece.src)} alt={piece.alt} loading="lazy" />
              <span className="gallery-caption">{piece.title}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={selected ? selected.title : "Artwork"}
        onClick={(e) => {
          // Clicking the dark backdrop closes the dialog
          if (e.target === dialogRef.current) closeDialog();
        }}
      >
        {selected && (
          <>
            <img src={assetUrl(selected.src)} alt={selected.alt} />
            <p className="lightbox-info">
              <strong>{selected.title}</strong>
              <br />
              {selected.medium}, {selected.year}
            </p>
            <button type="button" onClick={closeDialog}>
              Close
            </button>
          </>
        )}
      </dialog>
    </section>
  );
}
