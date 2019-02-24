import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <div className="blog-article">
        <div className="blog-article__content">
          <h1>FOUROHFOUR!!! There's nowt here!</h1>
          <p>Could it be that you typed an incorrect URL? Could it be that the page has been deleted?</p> 
          <p>Could it be that the page never existed and this is a symptom of your oncoming madness?</p>
          <p>Actually, come to mention it, are you sure that YOU exist? Perhaps you only <strong>THINK</strong> you're reading this blog?</p>
          <iframe src="https://giphy.com/embed/D12CsrRNv7gL6" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <p>Don't worry, you're <strong><em>probably</em></strong> not going mad. There were a bunch of old articles that I deleted as nobody visited them if this is one of them then you have my sincere apologies and deepest suspicions</p>
        </div>
      </div>
  </Layout>
)

export default NotFoundPage
