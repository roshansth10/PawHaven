import React from 'react';
import { BlogArticle } from '../../data/blogArticles';
import { AnimatedImage } from '../common/AnimatedImage';
import { AnimatedText } from '../common/AnimatedText';

interface BlogFeaturedProps {
  article: BlogArticle;
  onReadArticle: (article: BlogArticle) => void;
}

export const BlogFeatured: React.FC<BlogFeaturedProps> = ({
  article,
  onReadArticle,
}) => {
  return (
    <section className="py-14 sm:py-18 bg-[#FFFFFF] border-b border-[#24543D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#24543D]/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD15C] border border-[#24543D]/20" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#24543D]">
              Featured Story
            </h2>
          </div>
          <span className="text-xs text-[#203D40]/60 font-medium">
            Editor&apos;s Pick
          </span>
        </div>

        {/* Two-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F7F6ED] p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#24543D]/10 shadow-xs">
          
          {/* Article Image (Left 7 cols) */}
          <div 
            onClick={() => onReadArticle(article)}
            className="lg:col-span-7 cursor-pointer group"
          >
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
              <AnimatedImage
                src={article.image}
                alt={article.imageAlt}
                aspectRatio="aspect-[16/10] sm:aspect-[16/9]"
                className="group-hover:scale-[1.02] transition-transform duration-500"
                parallax={false}
              />
            </div>
          </div>

          {/* Article Info (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="flex items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-[#DDEBD5] text-[#24543D] font-bold">
                {article.category}
              </span>
              <span className="text-[#203D40]/60 font-medium">
                {article.readTime}
              </span>
            </div>

            <div 
              onClick={() => onReadArticle(article)}
              className="cursor-pointer group"
            >
              <AnimatedText
                text={article.title}
                as="h3"
                className="text-2xl sm:text-3xl font-extrabold text-[#203D40] group-hover:text-[#24543D] transition-colors tracking-tight leading-snug"
              />
            </div>

            <p className="text-sm sm:text-base text-[#203D40]/80 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onReadArticle(article)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#24543D] hover:bg-[#173D31] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm active:scale-95 group"
              >
                <span>Read article</span>
                <span className="transition-transform group-hover:translate-x-1 font-mono text-sm leading-none">
                  →
                </span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
