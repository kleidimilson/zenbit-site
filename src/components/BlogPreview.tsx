import { Link } from 'react-router-dom';
import { getLatestPosts, formatPostDate } from '@/lib/blog';

export function BlogPreview() {
  const posts = getLatestPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="insights" id="insights">
      <div className="wrap">
        <div className="services-header">
          <span className="section-label">// 05 — insights</span>
          <h2>
            O que escrevemos <span className="muted">entre um deploy e outro.</span>
          </h2>
          <Link to="/blog" className="mono-dim insights-see-all">
            Ver tudo ↗
          </Link>
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
  );
}
