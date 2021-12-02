import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
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
import { convertDate } from '@app/shared/pipes/convert-date';
import { Follow } from '../partials/Follow';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>({});
  const [comments, setComments] = useState<any>();
  const [commentsList, setCommentsList] = useState<any>([]);
  const { setLoading } = useLoading();
  const dispatch = useDispatch();
  const { title, description, createdAt, likes, user, cover, content, isLiked, tags } = article;
  const currentUser = useSelector((state: RootStateOrAny) => state.authReducer.userInfo);
  const { setDialog, onClosed } = useDialog();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      setLoading(true);
      dispatch(getArticleDetail(
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
    dispatch(getCommentsList(
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
    dispatch(getAuthor(
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
    dispatch(getCommentsList(
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
    dispatch(postFollow(
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
    dispatch(deleteArticle(
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
              <h2 className="article-title txt-capitalize">{title}</h2>
              <p className="article-description">{description}</p>
              <div className="article-author-info">
                <div className="article-author">
                  <div className="article-author-img">
                    <Link to={`/users/${user?.id}`}>
                      <img src={user?.picture || "./assets/images/user.png"} alt="avatar" className="author-img" />
                    </Link>
                  </div>
                  <div className="article-author-left">
                    <div className="article-author-name-follow">
                      <Link to={`/users/${user?.id}`} >
                        <h4 className="article-author-name">{user?.firstName + " " + user?.lastName}</h4>
                      </Link>
                      {currentUser ?
                        currentUser?.email !== user?.email ?
                          (user?.isFollowed !== undefined) && <Follow user={article.user} followUser={followUser} />
                          :
                          <></>
                        :
                        <Follow />
                      }
                    </div>
                    <p className="create-at">{convertDate(createdAt)}</p>
                  </div>
                </div>
                <div className="article-bookmark">
                  <i className="far fa-bookmark"></i>
                  {currentUser?.email === user?.email ?
                    <div className="dropdown">
                      <button className="btn-dropdown">...</button>
                      <div className="sub-dropdown">
                        <button onClick={handleDelete} className="sub-dropdown-item">Delete</button>
                        <button onClick={updateArticle} className="sub-dropdown-item">Update</button>
                      </div>
                    </div>
                    : ''}
                </div>
              </div>
            </div>
            <img src={cover} className="article-cover-image" alt="image-article" />
            <div className="article-body">
              <div className="article-content" dangerouslySetInnerHTML={{ __html: purify.sanitize(content) }}>
              </div>
            </div>

            <div className="article-footer">
              <div className="article-footer-left">
                {tags && <p className="txt-uppercase"><span>TAGS: </span>
                  {(tags.length && tags[0]) ?
                    <span className="badge badge-tag">{tags[0]}</span>
                    : <></>
                  }
                </p>}
              </div>
              <div className="article-footer-right">
                <div className="interact">
                  {likes && (<Like id={id} like={likes} liked={isLiked} user={currentUser} />)}
                  <button className="btn-interact">
                    <i className="far fa-comment"></i>
                    <span>{comments}</span>
                  </button>
                </div>
              </div>
            </div>
            <CommentForm id={id} submitComment={submitComment} user={currentUser} />
            <CommentsList id={id} commentsList={commentsList} />
          </div>
        </main>
        <Sidebar />
      </div>
    </>
  );
};

export default ArticleDetail;
