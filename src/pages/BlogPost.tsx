import { Head } from 'vite-react-ssg';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getPostBySlug, formatPostDate } from '@/lib/blog';
import { SITE_URL } from '@/lib/constants';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <>
        <Navbar />
        <section className="blog-post">
          <div className="wrap">
            <p>Post não encontrado.</p>
            <Link to="/blog" className="btn mono-btn">
              ← Voltar pro blog
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: { '@type': 'Organization', name: 'Zenbit Softhouse' },
        publisher: { '@type': 'Organization', name: 'Zenbit Softhouse' },
        mainEntityOfPage: postUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{post.title} — Zenbit Softhouse</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={postUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={postUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <div className="grid-bg" />
      <Navbar />

      <article className="blog-post">
        <div className="wrap">
          <div className="blog-post-header">
            <Link to="/blog" className="mono-dim">
              ← blog
            </Link>
            <div className="blog-post-meta">
              <span className="tech-tag">{post.category}</span>
              <span className="mono-dim">{formatPostDate(post.date)}</span>
              <span className="mono-dim">{post.readingTime} min de leitura</span>
            </div>
            <h1 className="blog-post-title">{post.title}</h1>
          </div>

          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </article>

      <Footer />
    </>
  );
}

export { BlogPost as Component };
