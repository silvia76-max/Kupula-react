// eslint-disable-next-line react-refresh/only-export-components
const CourseCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <a
          href={link}
          className="inline-block px-4 py-2 bg-[goldenrod] text-white rounded hover:bg-[gold] transition"
        >
          Más información
        </a>
      </div>
    </div>
  );
};
