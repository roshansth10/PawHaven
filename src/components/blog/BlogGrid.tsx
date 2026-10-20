import React from 'react';
import { BlogArticle } from '../../data/blogArticles';
import { AnimatedImage } from '../common/AnimatedImage';
import { AnimatedText } from '../common/AnimatedText';

interface BlogGridProps {
  articles: BlogArticle[];
  onReadArticle: (article: BlogArticle) => void;
}

export const BlogGrid: React.FC<BlogGridProps> = ({
  articles,
  onReadArticle,
}) => {
  if (articles.length === 0) {
    return (
      <div className="py-20 text-center bg-white">
        <div className="max-w-md mx-auto px-4 space-y-3">
          <p className="text-base font-bold text-[#203D40]">No stories found in this category.</p>
          <p className="text-xs text-[#203D40]/70">
            Please choose another category above to browse our journal entries.
          </p>
        </div>
      </div>
    );
  }

  // Slice articles to create intentional editorial layout patterns
  const leadArticle = articles[0];
  const secondaryArticles = articles.slice(1, 3);
  const wideEditorialArticle = articles[3];
  const remainingArticles = articles.slice(4);

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ==========================================================
            PATTERN 1: Lead Feature (Left) + 2 Stacked Stories (Right)
            ========================================================== */}
        {leadArticle && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Primary Lead Story (7 cols) */}
            <div 
              onClick={() => onReadArticle(leadArticle)}
              className="lg:col-span-7 bg-[#F7F6ED] rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 hover:border-[#24543D]/30 transition-all cursor-pointer group text-left space-y-5"
            >
              <div className="overflow-hidden rounded-2xl">
                <AnimatedImage
                  src={leadArticle.image}
                  alt={leadArticle.imageAlt}
                  aspectRatio="aspect-[16/10]"
                  className="group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-[#DDEBD5] text-[#24543D] font-bold">
                  {leadArticle.category}
                </span>
                <span className="text-[#203D40]/60 font-medium">
                  {leadArticle.readTime}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#203D40] group-hover:text-[#24543D] transition-colors tracking-tight leading-snug">
                {leadArticle.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#203D40]/80 leading-relaxed">
                {leadArticle.excerpt}
              </p>

              <div className="pt-2 flex items-center text-xs font-bold text-[#24543D] group-hover:text-[#173D31] gap-1.5">
                <span>Read story</span>
                <span className="font-mono text-sm leading-none transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>

            {/* Stacked Secondary Stories (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {secondaryArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => onReadArticle(article)}
                  className="bg-[#F7F6ED] rounded-2xl p-5 border border-[#24543D]/10 hover:border-[#24543D]/30 transition-all cursor-pointer group text-left flex flex-col sm:flex-row lg:flex-col gap-4"
                >
                  <div className="sm:w-48 lg:w-full shrink-0 overflow-hidden rounded-xl">
                    <AnimatedImage
                      src={article.image}
                      alt={article.imageAlt}
                      aspectRatio="aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/9]"
                      className="group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5 text-[11px]">
                        <span className="font-bold text-[#24543D] uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span className="text-[#203D40]/40">•</span>
                        <span className="text-[#203D40]/60">{article.readTime}</span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-[#203D40] group-hover:text-[#24543D] transition-colors leading-snug">
                        {article.title}
                      </h4>

                      <p className="text-xs text-[#203D40]/75 line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center text-xs font-bold text-[#24543D] gap-1">
                      <span>Read article</span>
                      <span className="font-mono leading-none group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ==========================================================
            PATTERN 2: Spacious Full-Width Editorial Feature Row
            ========================================================== */}
        {wideEditorialArticle && (
          <div
            onClick={() => onReadArticle(wideEditorialArticle)}
            className="bg-[#F7F6ED] rounded-3xl p-6 sm:p-10 border border-[#24543D]/15 hover:border-[#24543D]/30 transition-all cursor-pointer group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Wide Image (7 cols) */}
              <div className="lg:col-span-7 overflow-hidden rounded-2xl">
                <AnimatedImage
                  src={wideEditorialArticle.image}
                  alt={wideEditorialArticle.imageAlt}
                  aspectRatio="aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9]"
                  className="group-hover:scale-[1.02] transition-transform duration-500"
                  parallax={false}
                />
              </div>

              {/* Editorial Text (5 cols) */}
              <div className="lg:col-span-5 space-y-4 text-left">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#FFD15C]/40 text-[#203D40] font-bold">
                    {wideEditorialArticle.category}
                  </span>
                  <span className="text-[#203D40]/60">{wideEditorialArticle.readTime}</span>
                </div>

                <AnimatedText
                  text={wideEditorialArticle.title}
                  as="h3"
                  className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#203D40] group-hover:text-[#24543D] transition-colors tracking-tight leading-tight"
                />

                <p className="text-xs sm:text-sm text-[#203D40]/80 leading-relaxed">
                  {wideEditorialArticle.excerpt}
                </p>

                <div className="pt-3">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#24543D] text-white text-xs font-bold shadow-xs group-hover:bg-[#173D31] transition-all">
                    <span>Explore this topic</span>
                    <span className="font-mono text-sm leading-none">→</span>
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ==========================================================
            PATTERN 3: Remaining Balanced Columns
            ========================================================== */}
        {remainingArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {remainingArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onReadArticle(article)}
                className="bg-[#F7F6ED] rounded-3xl p-6 sm:p-7 border border-[#24543D]/10 hover:border-[#24543D]/30 transition-all cursor-pointer group text-left space-y-4"
              >
                <div className="overflow-hidden rounded-2xl">
                  <AnimatedImage
                    src={article.image}
                    alt={article.imageAlt}
                    aspectRatio="aspect-[16/10]"
                    className="group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-2.5 text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#DDEBD5] text-[#24543D] font-bold">
                    {article.category}
                  </span>
                  <span className="text-[#203D40]/60">{article.readTime}</span>
                </div>

                <h4 className="text-xl font-bold text-[#203D40] group-hover:text-[#24543D] transition-colors leading-snug">
                  {article.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#203D40]/75 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="pt-2 flex items-center text-xs font-bold text-[#24543D] gap-1.5">
                  <span>Read full guide</span>
                  <span className="font-mono text-sm leading-none group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
