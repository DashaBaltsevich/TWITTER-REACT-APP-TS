import React from 'react'
import Avatar from '../../../assets/avatar.png'
import PostStyles from './Post.module.scss'
import { MyContext } from '../../../redux/context'

export const Post = (): JSX.Element => {
  return (
    <MyContext.Consumer>
      {(store) => (
        <ul className={PostStyles.l__posts}>
          {store &&
            store.getState().postsPage.posts.map(({ post }) => (
              <li key={post} className={PostStyles.l__posts_item}>
                <img
                  src={Avatar}
                  alt="avatar"
                  className={PostStyles.l__posts_item_img}
                />
                <div>
                  <h2 className={PostStyles.l__posts_item_name}>Name @name</h2>
                  <p className={PostStyles.l__posts_item_text}>{post}</p>
                </div>
              </li>
            ))}
        </ul>
      )}
    </MyContext.Consumer>
  )
}
