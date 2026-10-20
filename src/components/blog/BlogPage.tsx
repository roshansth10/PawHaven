import React, { useState, useMemo } from 'react';
import { BlogHero } from './BlogHero';
import { BlogFeatured } from './BlogFeatured';
import { BlogCategories, BlogCategoryOption } from './BlogCategories';
import { BlogGrid } from './BlogGrid';
import { BlogArticleModal } from './BlogArticleModal';
import { BlogClosingCTA } from './BlogClosingCTA';
import { BLOG_ARTICLES, BlogArticle } from '../../data/blogArticles';

interface BlogPageProps {
  onNavigateShop: () => void;
  onNavigateVet: () => void;
}

const CATEGORIES: BlogCategoryOption[] = [
  'All stories',
  'Dog care',
  'Cat care',
  'Nutrition',
  'Health and wellness',
  'Everyday life',
];

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigateShop,
  onNavigateVet,
}) => {
  const [activeCategory, setActiveCategory] = useState<BlogCategoryOption>('All stories');
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  // Featured article (first marked or top)
  const featuredArticle = useMemo(() => {
    return BLOG_ARTICLES.find((a) => a.featured) || BLOG_ARTICLES[0];
  }, []);

  // Filtered articles excluding the featured one
  const filteredArticles = useMemo(() => {
    const list = BLOG_ARTICLES.filter((a) => a.id !== featuredArticle.id);
    if (activeCategory === 'All stories') {
      return list;
    }
    return list.filter((a) => a.category === activeCategory);
  }, [activeCategory, featuredArticle.id]);

  const handleReadArticle = (article: BlogArticle) => {
    setSelectedArticle(article);
  };

  return (
    <div className="bg-[#F7F6ED] min-h-screen">
      {/* 1. Editorial Hero */}
      <BlogHero />

      {/* 2. Distinct Leading Feature */}
      <BlogFeatured
        article={featuredArticle}
        onReadArticle={handleReadArticle}
      />

      {/* 3. Category Filter Navigation */}
      <BlogCategories
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        totalArticlesCount={BLOG_ARTICLES.length}
        filteredCount={filteredArticles.length + (activeCategory === 'All stories' || activeCategory === featuredArticle.category ? 1 : 0)}
      />

      {/* 4. Varied Editorial Article Listing */}
      <BlogGrid
        articles={filteredArticles}
        onReadArticle={handleReadArticle}
      />

      {/* 5. Editorial Closing Banner */}
      <BlogClosingCTA
        onNavigateShop={onNavigateShop}
        onNavigateVet={onNavigateVet}
      />

      {/* 6. In-Depth Reading Experience */}
      <BlogArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onSelectArticle={setSelectedArticle}
        allArticles={BLOG_ARTICLES}
      />
    </div>
  );
};
