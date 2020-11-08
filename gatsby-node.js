const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/ArticlePage.js`)

  const postsQuery = await graphql(`
    {
      gcms {
        posts {
          id
          date
          slug
          stage
          tags
          title
          author {
            name
            picture {
              url
            }
          }
          updatedAt
          content {
            html
            text
          }
          coverImage {
            url
          }
        }
      }
    }
  `)

  postsQuery.data.gcms.posts.forEach(post => {
    createPage({
      path: post.slug,
      component: postTemplate,
      context: {
        data: post,
      },
    })
  })
}
