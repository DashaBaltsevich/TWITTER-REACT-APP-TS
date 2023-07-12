import React from 'react'
import Avatar from '../../../assets/avatar.png'
import PostStyles from './Post.module.scss'
import { PostType } from '../../../types'

export const Posts = ({
  posts,
  name
}: {
  posts: PostType[]
  name: string | undefined
}): JSX.Element => {
  return (
    <ul className={PostStyles.l__posts}>
      {posts &&
        posts.map(({ post }) => (
          <li key={post} className={PostStyles.l__posts_item}>
            <img
              src={Avatar}
              alt="avatar"
              className={PostStyles.l__posts_item_img}
            />
            <div>
              <h2 className={PostStyles.l__posts_item_name}>@{name}</h2>
              <p className={PostStyles.l__posts_item_text}>{post}</p>
            </div>
          </li>
        ))}
    </ul>
  )
}
