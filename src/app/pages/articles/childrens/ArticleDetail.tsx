import React, { useEffect, useState } from 'react';
import {  RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import purify from "dompurify";
import { useLoading } from '@app/shared/contexts/loading.context';
import { getArticleDetail, getCommentsList, postFollow, getAuthor } from '../article.middleware';
import Sidebar from '@app/shared/components/layout/Sidebar';
import CommentForm from '../partials/CommentForm';
import { Like } from '../partials/Like';
import { CommentsList } from '../partials/CommentList';
import { useDialog } from '@app/shared/contexts/dialog.context';
import { deleteArticle } from '../article.middleware';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>({});
  const [comments, setComments] = useState<any>();
  const [commentsList, setCommentsList] = useState<any>([]);
  const { setLoading } = useLoading();
  const disPatch = useDispatch();
  const { title, likes, user, cover, content, isLiked } = article;
  const currentUser = useSelector((state: RootStateOrAny) => state.authReducer.userInfo);
  const { setDialog, onClosed } = useDialog();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      setLoading(true);
      disPatch(getArticleDetail(
        id,
        (res) => {
          setComments(res.comments);
          setArticle(res);
          getAuthorInfo(res);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
        })
      );
      getComments();
    }
  }, [id]);
  const getComments = () => {
    setLoading(true);
    disPatch(getCommentsList(
      id,
      (res) => {
        setCommentsList(res);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      })
    );
  };
  const getAuthorInfo = (article) => {
    setLoading(true);
    disPatch(getAuthor(
      article.user.id,
      (res) => {
        const authorUser = { ...article.user, isFollowed: res.isFollowed };
        const newArticle = { ...article, user: authorUser };
        setArticle(newArticle);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      })
    );
  };
  const submitComment = () => {
    setLoading(true);
    disPatch(getCommentsList(
      id,
      (res) => {
        setCommentsList(res);
        setComments(res.length);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      })
    );
  };
  const followUser = () => {
    const data = {
      'followingId': user.id
    }
    setLoading(true);
    disPatch(postFollow(
      data,
      (res) => {
        const newArticle = { ...article, user: { ...user, isFollowed: res.followed } };
        setArticle(newArticle);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      })
    );
  };
  const handleDelete = () => {
    setDialog({
      type: 'danger',
      data: {
        title: 'Confirm',
        content: 'Are you sure you want to delete?',
        accept: 'Delete',
        cancel: 'Cancel'
      },
      confirmDialog: () => confirmDeleteArticle()
    }
    );
  };
  const confirmDeleteArticle = () => {
    setLoading(true);
    disPatch(deleteArticle(
      id,
      (res) => {
        onClosed();
        navigate('/user')
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      }
    ))
  };
  const updateArticle = () => {
    navigate(`/articles/${id}/edit`);
  };
  return (
    <>
      <div className="row">
        <main className="col col-8 main-content">
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
                  {currentUser?.email !== user?.email ?
                    <button className={`btn ${user?.isFollowed ? 'btn-primary' : 'btn-outline-primary'}`} onClick={followUser}>{user?.isFollowed ? 'Following' : '+ Follow'}</button>
                    :
                    <> 
                      <button className="btn btn-danger mr-2" onClick={handleDelete}>Delete</button>
                      <button className="btn btn-primary" onClick={updateArticle}>Update</button>
                    </>
                  }
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
                  {likes && (<Like id={id} like={likes} liked={isLiked} />)}
                  <button className="btn-interact">
                    <i className="far fa-comment"></i>
                    <span>{comments}</span>
                  </button>
                </div>
              </div>
            </div>
            <CommentForm id={id} submitComment={submitComment} />
            <CommentsList id={id} commentsList={commentsList} />
          </div>
        </main>
        <Sidebar />
      </div>
    </>
  );
};

export default ArticleDetail;
