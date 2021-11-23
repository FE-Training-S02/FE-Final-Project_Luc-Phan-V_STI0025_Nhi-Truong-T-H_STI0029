import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import purify from "dompurify";
import { useLoading } from '@app/shared/contexts/loading.context';
import { getArticleDetail, getCommentsList } from '../article.middleware';
import Sidebar from '@app/shared/components/layout/Sidebar';
import CommentForm from '../partials/CommentForm';
import { Like } from '../partials/Like';
import { CommentsList } from '../partials/CommentList';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>({});
  const [comments, setComments] = useState<any>();
  const [commentsList, setCommentsList] = useState<any>([]);
  const { setLoading } = useLoading();
  const disPatch = useDispatch();
  const { title, user, likes, cover, content, isLiked } = article;
  useEffect(() => {
    if (id) {
      disPatch(getArticleDetail(
        id,
        (res) => {
          setComments(res.comments);
          setArticle(res);
        },
        (error) => {
          setLoading(false);
        }));
      disPatch(getCommentsList(
        id, 
        (res) => {
          setCommentsList(res)
        },
        (error) => {
          setLoading(false);
        }))
    }
  }, [id])
    
  const submitComment = () => {
    disPatch(getCommentsList(
      id, 
      (res) => {
        setCommentsList(res);
        setComments(res.length);
      },
      (error) => {
        setLoading(false);
      }))
  }
  return (
    <>
      <div className="row">
        <main className="col-8 main-content">
          <div className="grid-box pd-10">
            <div className="article-header">
              <div className="featured">
                <img src={cover} className="article-cover-image" alt="image-article" />
              </div>
              <h2 className="article-title txt-capitalize">{title}</h2>
              <div className="article-author-follow">
                <div className="article-author">
                  <span className="text-writen-by">WRITEN BY -</span>
                  <Link to="/" className="article-author-name">
                    <i className="fas fa-pen-fancy"></i>
                    <h3 className="txt-capitalize">{user?.firstName + " " + user?.lastName}</h3>
                  </Link>
                  <button className="btn btn-outline">+ Follow</button>
                </div>
                <button className="btn btn-icon">
                  <i className="far fa-bookmark"></i>
                </button>
              </div>
            </div>
            <div className="article-body">
              <div className="article-content" dangerouslySetInnerHTML={{ __html: purify.sanitize(content) }}>
              </div>
            </div>
            <div className="article-footer">
              <div className="article-footer-left">
                <p className="txt-uppercase"><span>TAGS </span>bc</p>
              </div>
              <div className="article-footer-right">
                <div className="interact">
                  <Like id={id} like={likes} liked={isLiked} />
                  <button className="btn-interact">
                    <i className="far fa-comment"></i>
                    <span>{comments}</span>
                  </button>
                </div>
              </div>
            </div>
            <CommentForm id={id} submitComment={submitComment}/>
            <CommentsList id={id} commentsList={commentsList}/>
          </div>
        </main>
        <Sidebar />
      </div>
    </>
  );
};

export default ArticleDetail;
