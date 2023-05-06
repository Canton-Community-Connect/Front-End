import Link from "next/link";

const Category = () => {
  const categories = [
    { name: "Technology", count: 3 },
    { name: "Health Care", count: 4 },
    { name: "Community", count: 2 },
    { name: "Education/Literacy", count: 8 },
    { name: "Animals", count: 5 },
  ];

  return (
    <ul className="style-none">
      {categories.map((category, index) => (
        <li key={index}>
          <Link href="/blog-details/1">
            {category.name}
            <span className="float-end">({category.count})</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Category;
