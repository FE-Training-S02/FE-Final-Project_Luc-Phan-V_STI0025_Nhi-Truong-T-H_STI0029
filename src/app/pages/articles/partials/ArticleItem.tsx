import React from 'react';
import { Link } from 'react-router-dom';
import JwtHelper from '@app/core/helpers/jwtHelper';
import { useDialog } from '@app/shared/contexts/dialog.context';
import { useDispatch } from 'react-redux';
import { Like } from './Like';
import { deleteArticle } from '../article.middleware';

const ArticleItem = (props) => {
  const jwtHelper = new JwtHelper();
  const { setDialog, onClosed } = useDialog();
  const dispatch = useDispatch();
  const { id, cover, userId, user, tags, title, description, likes, comments, isLiked } = props.post;
  const curentUserId = jwtHelper.getUserInfo() ? jwtHelper.getUserInfo().userId : null;
  const { list, hadleDeleteArticle } = props;
  const newList = list.filter(item => item.id !== id);
  const handleDelete = () => {
    setDialog({
      type: 'DeleteCofirm',
      data: {
        title: 'Confirm',
        content: 'Are you sure you want to delete',
        yes: 'Yes',
        cancel: 'Cancel'
      },
      confirmDialog: () => confirmDeleteArticle()
    }
    );
  };

  const confirmDeleteArticle = () => {
    dispatch(deleteArticle(
      id,
      (res) => {
        hadleDeleteArticle(newList);
        onClosed();
      },
      (error) => {
        console.log(error);
      }
    ))
  }
  return (
    <div className="article-item grid-box pd-5">
      <div className="feature">
        <img src={cover} alt="article image" className="article-img" />
      </div>
      {curentUserId === userId ?
        <div className="dropdown">
          <button className="btn-dropdown">...</button>
          <ul className="sub-dropdown">
            <button onClick={handleDelete} className="sub-dropdown-item">Delete</button>
            <Link to={`/articles/${id}/edit`} className="sub-dropdown-item">Update</Link>
          </ul>
        </div>
        : ''}
      <div className="article-body">
        <div className="article-author">
          <img src="./assets/icons/user.png" alt="avatar" className="author-img" />
          <h4>
            <span>By <Link className="author-name txt-uppercase" to="/">{user.firstName} {user.lastName}</Link></span>
            {tags[0] ?
              <>
                <span>&nbsp;-&nbsp;</span>
                <span className="article-tag">{tags[0]}</span>
              </> : <></>}
          </h4>
        </div>
        <h3 className="article-title">{title}</h3>
        <p className="article-content">{description}</p>
      </div>
      <div className="article-interact">
        <div className="list-icon-interact">
          <Like key={id} id={id} like={likes} liked={isLiked} />
          <span className="item-icon-item"><i className="far fa-comment"></i>{comments}</span>
        </div>
        <Link to={`/articles/${id}`} className="article-interact-item btn-read-more">READ MORE</Link>
      </div >
    </div >
  );
};

export default ArticleItem;
