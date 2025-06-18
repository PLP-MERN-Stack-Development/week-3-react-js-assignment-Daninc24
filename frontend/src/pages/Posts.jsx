import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch posts.');
        const data = await response.json();
        setPosts(data.slice(0, 12)); // Limit to 12 posts
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      {loading && <p className="text-blue-600">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {!loading && !error && posts.map(post => (
          <Card key={post.id}>
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Posts;
