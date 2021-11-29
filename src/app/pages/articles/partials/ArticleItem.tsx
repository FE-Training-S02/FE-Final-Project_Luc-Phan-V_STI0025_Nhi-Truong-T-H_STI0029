import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import JwtHelper from '@app/core/helpers/jwtHelper';
import { useDialog } from '@app/shared/contexts/dialog.context';
import { useLoading } from '@app/shared/contexts/loading.context';
import { Like } from './Like';
import { deleteArticle } from '../article.middleware';

const ArticleItem = (props) => {
  const jwtHelper = new JwtHelper();
  const { setDialog, onClosed } = useDialog();
  const dispatch = useDispatch();
  const { id, cover, userId, user, tags, title, description, likes, comments, isLiked, createdAt } = props.post;
  const curentUserId = jwtHelper.getUserInfo() ? jwtHelper.getUserInfo().userId : null;
  const { list, hadleDeleteArticle } = props;
  const newList = list.filter(item => item.id !== id);
  const { setLoading } = useLoading();
  
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
        hadleDeleteArticle(newList);
        onClosed();
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      }
    ))
  };
  return (
    <div className="article-item grid-box">
      <div className="feature">
        <img src={cover} alt="article image" className="article-img" />
      </div>
      {curentUserId === userId ?
        <div className="dropdown">
          <button className="btn-dropdown">...</button>
          <div className="sub-dropdown">
            <button onClick={handleDelete} className="sub-dropdown-item">Delete</button>
            <Link to={`/articles/${id}/edit`} className="sub-dropdown-item">Update</Link>
          </div>
        </div>
        : ''}
      <div className="article-body pd-5">
        <div className="article-author mb-3">
          <img src={user.picture || "./assets/icons/user.png"} alt="avatar" className="author-img" />
          <div className="author-info">
            <h4>
              <span><Link className="author-name txt-uppercase" to="/">{user.firstName} {user.lastName}</Link></span>
              {tags[0] ?
                <>
                  <span>&nbsp;-&nbsp;</span>
                  <span className="article-tag">{tags[0]}</span>
                </> : <></>}
            </h4>
          <p className="create-at">{new Date(createdAt).toLocaleString("en-US")}</p>
          </div>
        </div>
        <h3><Link to={`/articles/${id}`} className="article-title">{title}</Link></h3>
        <p className="article-content">{description}</p>
        <Link to={`/articles/${id}`} className="read-more">Read more...</Link>
        <div className="article-interact">
          <div className="list-icon-interact">
            <Like key={id} id={id} like={likes} liked={isLiked} />
            <button className="btn-interact">
              <i className="far fa-comment"></i>
              <span>{comments}</span>
            </button>
          </div>
          <button className="btn btn-icon">
            <i className="far fa-bookmark"></i>
          </button>
        </div >
      </div>
    </div >
  );
};

export default ArticleItem;
