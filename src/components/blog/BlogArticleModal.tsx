import React, { useEffect } from 'react';
import { BlogArticle } from '../../data/blogArticles';

interface BlogArticleModalProps {
  article: BlogArticle | null;
  onClose: () => void;
  onSelectArticle: (article: BlogArticle) => void;
  allArticles: BlogArticle[];
}

export const BlogArticleModal: React.FC<BlogArticleModalProps> = ({
  article,
  onClose,
  onSelectArticle,
  allArticles,
}) => {
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
      const prevTitle = document.title;
      document.title = `${article.title} — PawHaven Journal`;
      return () => {
        document.body.style.overflow = '';
        document.title = prevTitle;
      };
    }
  }, [article]);

  if (!article) return null;

  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#173D31]/60 backdrop-blur-xs transition-opacity"
      />

      {/* Reader Modal Container */}
      <div
        data-lenis-prevent
        className="relative w-full max-w-4xl h-full sm:h-auto sm:max-h-[92vh] bg-[#FFFFFF] sm:rounded-3xl shadow-2xl border border-[#24543D]/15 overflow-y-auto z-10 flex flex-col text-left animate-fadeIn"
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#24543D]/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#24543D] hover:text-[#173D31] transition-colors"
          >
            <span className="font-mono text-sm leading-none">←</span>
            <span>Back to Journal</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold text-[#203D40]/60 uppercase tracking-wider hidden sm:inline">
              {article.category}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#F7F6ED] hover:bg-[#DDEBD5] text-[#24543D] flex items-center justify-center transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#24543D]"
              aria-label="Close article reader"
            >
              <span className="css-icon-close text-[#24543D]" />
            </button>
          </div>
        </div>

        {/* Article Reading Body */}
        <div className="p-6 sm:p-10 md:p-12 space-y-8">
          
          {/* Header Metadata */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 text-xs">
              <span className="px-3.5 py-1 rounded-full bg-[#DDEBD5] text-[#24543D] font-bold">
                {article.category}
              </span>
              <span className="text-[#203D40]/60 font-medium">
                {article.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#203D40] tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#203D40]/80 font-normal leading-relaxed border-l-2 border-[#24543D] pl-4 italic">
              {article.excerpt}
            </p>
          </div>

          {/* Article Main Image */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-[#F7F6ED] border border-[#24543D]/10">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="w-full h-auto max-h-[460px] object-cover"
            />
          </div>

          {/* Editorial Article Body Content (Readable Width) */}
          <article className="max-w-2xl mx-auto space-y-8 text-[#203D40]/90 leading-relaxed text-sm sm:text-base font-normal">
            <p className="text-base sm:text-lg leading-relaxed text-[#203D40] font-medium">
              {article.content.intro}
            </p>

            {article.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3 pt-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#203D40] tracking-tight">
                  {section.heading}
                </h3>
                <p className="leading-relaxed text-[#203D40]/85">
                  {section.body}
                </p>
              </div>
            ))}

            {/* Key Clinical & Everyday Takeaway */}
            <div className="bg-[#F7F6ED] p-6 rounded-2xl border border-[#24543D]/15 space-y-2 text-left my-8">
              <span className="text-xs font-bold text-[#24543D] uppercase tracking-wider block">
                Key Takeaway
              </span>
              <p className="text-sm font-semibold text-[#203D40] leading-snug">
                {article.content.takeaway}
              </p>
            </div>
          </article>

          {/* Related Stories */}
          {relatedArticles.length > 0 && (
            <div className="pt-10 border-t border-[#24543D]/10 space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#24543D] uppercase tracking-wider">
                  Related Stories
                </h4>
                <button
                  onClick={onClose}
                  className="text-xs text-[#203D40]/70 hover:text-[#24543D] font-medium"
                >
                  View all stories →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectArticle(rel);
                      const container = document.querySelector('[data-lenis-prevent]');
                      container?.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-4 rounded-2xl bg-[#F7F6ED] border border-[#24543D]/10 hover:border-[#24543D]/30 transition-all cursor-pointer group flex gap-4 items-center"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-white">
                      <img
                        src={rel.image}
                        alt={rel.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-[#24543D] block">
                        {rel.category}
                      </span>
                      <h5 className="text-xs font-bold text-[#203D40] group-hover:text-[#24543D] line-clamp-2">
                        {rel.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Close Button */}
          <div className="pt-6 text-center">
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-[#24543D] hover:bg-[#173D31] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              Back to All Articles
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
