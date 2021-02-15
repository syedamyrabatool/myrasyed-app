import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from "../../store/actions/postsAction.js";
import { loadUsers } from "../../store/actions/usersAction.js";
import Table from './Table.js';
import SC from '../../styles.js';
import Loader from '../Loader';

const UsersList = (props) => {
  const dispatch = useDispatch();
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [searchUser, setSearchUser] = useState('');

  const postsData = useSelector(state => state.posts);
  const usersData = useSelector(state => state.users);

  const userColumns = [
    {
      Header: "Name",
      accessor: "name",
      filter: 'find',
    },
    {
      Header: "Email",
      accessor: "email"
    },
    {
      Header: "City",
      accessor: "address.city"
    },
    {
      Header: "Company",
      accessor: "company.name"
    }
  ];
  const postColumns = [
    {
      Header: "Title",
      accessor: "title"
     },
    {
      Header: "Body",
      accessor: "body"
    }
  ]

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  useEffect (() => {
      setFilteredUsers(usersData.users.filter((item)=>{
        return item.name.indexOf(searchUser) > -1;
        /* // for lowercase search
          return item.name.toLowerCase().indexOf(searchUser.toLowerCase()) > -1;
        */
      }));
  }, [searchUser, usersData.users]);

  const getPosts = (value) => {
    dispatch(loadPosts(value));
  };

  const displayPosts = () => {
    return (
      <SC.Posts>
        <Loader isLoading={postsData.isLoading} product='Posts' />
        {!postsData.isLoading && postsData.posts && postsData.posts.length > 0 && (
          <Table columns={postColumns} data={postsData.posts} />
        )}
        {postsData.errorMsg && <SC.NoDataFound>No Posts found.</SC.NoDataFound>}
     </SC.Posts>
    );
  };

  const displayUsers = () => {
    return (
      <>
        <Loader isLoading={usersData.isLoading} product='Users' />
        {!usersData.isLoading && filteredUsers && filteredUsers.length !==0 && (
          <>
            <SC.Users>
              <Table columns={userColumns} data={filteredUsers} rowClicked={getPosts} filterable filter={searchUser} />
            </SC.Users>
            {searchUser === '' && postsData && displayPosts()}
          </>
        )}
        {usersData.errorMsg !== '' && <SC.NoDataFound>{usersData.errorMsg}</SC.NoDataFound>}
        {searchUser !== '' && filteredUsers && filteredUsers.length === 0 && <SC.NoDataFound>No Users found.</SC.NoDataFound>}
      </>
    );
  };

  return (
    <SC.Layout>
      {props.enableSearch &&
        <>
          <SC.Label htmlFor='search'>Search User</SC.Label>
          <SC.Search id='search' data-testid='search' onChange={(e) => setSearchUser(e.target.value)}/>
        </>
      }
      {displayUsers()}
    </SC.Layout>
  );
};

UsersList.propTypes = {
  enableSearch: propTypes.bool,
};

export default UsersList;



