import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Post } from '@app/shared/models/post';
import SidebarItem from '../partials/SidebarItem';
import { getArticlesRecommend } from '@app/pages/articles/article.middleware';

const Sidebar = () => {

  const [page, setPage] = useState(1);
  const [articlesRecommend, setArticlesRecommend] = useState<Post[]>([]);
  const disPatch = useDispatch();
  let endPoint = '/posts/recommend/';
  useEffect(() => {
    disPatch(getArticlesRecommend(
      endPoint,
      page,
      (res) => {
        setArticlesRecommend(res.data.slice(0, 5));
      },
      (error) => {
      }
    )
    );
  }, []);
  return (
    <>
      <aside className="col col-4 sidebar">
        <ul>
          <li className="grid-box widget">
            <h4 className="widget-title">Categories</h4>
            <ul className="categories-list pd-5">
              <li className="categorie-item"><Link to="/">Travel</Link><span className="categorie-item-qty">(7)</span></li>
              <li className="categorie-item"><Link to="/">Food</Link><span className="categorie-item-qty">(17)</span></li>
              <li className="categorie-item"><Link to="/">Lifestyle</Link><span className="categorie-item-qty">(8)</span></li>
              <li className="categorie-item"><Link to="/">Shopping</Link><span className="categorie-item-qty">(2)</span></li>
              <li className="categorie-item"><Link to="/">Fashion</Link><span className="categorie-item-qty">(4)</span></li>
            </ul>
          </li>
          <li className="grid-box widget">
            <h4 className="widget-title">Quote of the day</h4>
            <div className="widget-content pd-5">
              <div className="content-quote">
                <p>&quot;There are no #strangers here, only #friends that have not yet met.&quot;</p>
              </div>
              <span className="byline">Theme Doe</span>
            </div>
          </li>
          <li className="grid-box widget">
            <h4 className="widget-title">Popular Articles</h4>
            <ul className="popular-list pd-5">
              {articlesRecommend ?
                articlesRecommend.map((item) =>
                  <li className="popular-item" key={item.id}>
                    <SidebarItem article={item} />
                  </li>
                )
                : ''}
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}
export default Sidebar
