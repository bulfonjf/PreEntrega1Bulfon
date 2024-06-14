import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../firebase/firebase';

export default function Categories() {

    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        getAllCategories().then((categories) => setCategories(categories));
    }, []);

    return (
        <ul className="menu bg-base-200 w-56 rounded-box">
            <li key='all'><Link to={`/categories/all`}>All</Link></li>
            {categories.map((category) => (
                <li key={category}>
                    <Link to={`/categories/${category}`}>{category}</Link>
                </li>
            ))}
        </ul>
    )
}