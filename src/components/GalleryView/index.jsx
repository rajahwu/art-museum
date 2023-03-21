import { Link, useParams } from "react-router-dom";

export default function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const galley = galleries.find(record => record.gallerynumber === galleryId )
//   console.log(galley)
  return (
    <>
      {/* <h1>GalleryView</h1> */}
      <h2>{galley.name}</h2>
      <Link to="/">Back</Link>
    </>
  );
}
