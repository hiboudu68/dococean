import Link from "next/link";

export type ProjectInfo = {
  name: string;
  tags: Array<string>;
  description: string;
  image: string;
  pageLink: string;
};

export default function Project(infos: ProjectInfo) {
  return (
    <>
      <div className="section-container">
        <div className="img-container relative">
          <img src={infos.image} />
        </div>
        <div className="tags">
          {infos.tags.map((element, index) => (
            <span key={index}>{element}</span>
          ))}
        </div>
        <h4>{infos.name}</h4>
        <p>{infos.description}</p>
        <button
          className="btn-type-more"
          onClick={() => (window.location.href = infos.pageLink)}
        >
          Découvrir →
        </button>
      </div>
    </>
  );
}
