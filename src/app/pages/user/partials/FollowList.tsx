import React, { useState, useEffect } from 'react';
import FollowItem from './FollowItem';
import { getFollowingsList } from '../user.middleware';
import { useDispatch } from 'react-redux';
import { useLoading } from '@app/shared/contexts/loading.context';
const FollowList = (props) => {
  const { id, type } = props;
  const dispatch = useDispatch();
  const [followsList, setFollowsList] = useState([]);
  const { setLoading } = useLoading();
  useEffect(() => {
    setLoading(true);
    dispatch(getFollowingsList(
      id,
      type,
      (res) => {
        setFollowsList(res);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      }
    ))
  }, [id])
  return (
    <ul className="row pd-5">
       {followsList.map((item: any, index: any) =>
          <FollowItem key={index} user={item}/>
        )}
    </ul>
  );
};

export default FollowList;
