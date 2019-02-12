// Takes a data set and a returns all slugs at the top level. If 'context' is
//  specified that it will behave as though context is the top level.
// Each slug has the page data for that item
const getSlugsWithData = (data, context) => {
  const slugSet = new Set(
    data.map(({ node }) => {
      const {
        slug,
        hero,
        title,
        tags,
        date,
        excerpt,
      } = {
        slug: node.fields.slug,
        hero: node.fields.hero,
        title: node.frontmatter.title,
        tags: node.frontmatter.tags,
        date: node.frontmatter.date,
        excerpt: node.excerpt,
      }
      const output = {
        slug,
        hero,
        title,
        date,
        tags,
        excerpt,
      }
      if (context.length) {
        // Context has been set, filter only items within the context
        if (slug.match(context)) return output
        return undefined
      }
      // no context has been set, use all items from the root
      return output
    }),
  )

  const slugs = []
  slugSet.forEach((v) => {
    if (typeof v !== 'undefined') {
      return slugs.push({
        slug: v.slug,
        hero: v.hero,
        title: v.title,
        tags: v.tags,
        date: v.date,
        excerpt: v.excerpt,
      })
    }
    return null
  })
  return slugs
}

export default getSlugsWithData
