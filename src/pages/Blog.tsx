import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getAllPosts, formatPostDate } from '@/lib/blog';
import { SITE_URL } from '@/lib/constants';

export function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <Head>
        <title>Blog — Zenbit Softhouse</title>
        <meta
          name="description"
          content="Artigos sobre desenvolvimento de sistemas sob medida, processo de engenharia e time — escritos pela Zenbit, software-house em Teresina, Piauí."
        />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog — Zenbit Softhouse" />
        <meta
          property="og:description"
          content="Artigos sobre desenvolvimento de sistemas sob medida, processo de engenharia e time."
        />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
      </Head>

      <div className="grid-bg" />
      <Navbar />

      <section className="blog-index">
        <div className="wrap">
          <div className="section-header">
            <span className="section-label">// blog</span>
            <h2>
              Insights sobre <span className="muted">software sob medida.</span>
            </h2>
          </div>

          <div className="insights-list">
            {posts.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="insight-row">
                <span className="tech-tag insight-category">{post.category}</span>
                <span className="insight-date mono-dim">{formatPostDate(post.date)}</span>
                <span className="insight-title">{post.title}</span>
                <span className="insight-read">{post.readingTime} min de leitura →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export { Blog as Component };
