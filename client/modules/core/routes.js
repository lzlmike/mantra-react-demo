import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import PostList from './containers/postlist';
import Post from './containers/post';
import NewPost from './containers/newpost';
import AskQA from './components/askQuestion';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/ask', {
    name: 'askQA',
    action() {
      mount(MainLayoutCtx, {
        content: <AskQA />,
        name : 'Ask'
      });
    }
  });

  FlowRouter.route('/paid', {
    name: 'paidQA',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>),
        name : 'Paid'
      });
    }
  });

  FlowRouter.route('/free', {
    name: 'freeQA',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>),
        name : 'Free'
      });
    }
  });
}
