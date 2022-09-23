import { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

import Pagination from '../components/Pagination';
import { useContext } from 'react';
import { SearchContext } from '../App';

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sort: 'rating',
  });

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62cd39e1066bd2b699213cb2.mockapi.io/items?limit=4&page=${currentPage}&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sort}&order=desc${searchValue ? `&title=${searchValue}` : ''}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((el) => <PizzaBlock key={el.id} {...el} />);

  const skeletons = new Array(8).fill(<Skeleton />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onClickType={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
