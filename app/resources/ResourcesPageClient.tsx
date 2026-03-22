"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  MailOpen,
  Search,
} from "lucide-react";
import { blogArticles, blogCategories } from "@/lib/data";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function ResourcesPageClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory =
      activeCategory === "All Articles" || article.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesQuery =
      query.length === 0 ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.author?.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  const featuredArticle =
    filteredArticles.find((article) => article.featured) || filteredArticles[0];
  const remainingArticles = filteredArticles.filter(
    (article) => article.slug !== featuredArticle?.slug
  );
  const highlightedTopics = blogCategories.filter(
    (category) => category !== "All Articles"
  );

  return (
    <>
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Resources</span>
            <h1 className="section-heading mb-4">
              Practical guidance for calmer days and clearer thinking
            </h1>
            <p className="section-subheading max-w-2xl">
              Explore therapist-written articles on anxiety, self-care,
              relationships, and emotional resilience. Use the search and topic
              filters to quickly find what feels most relevant right now.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background-light pb-16 sm:pb-20">
        <div className="section-container">
          <div className="card-surface mb-8 p-4 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <label className="relative block w-full lg:max-w-md">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search articles, concerns, or therapists"
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                {blogCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                      activeCategory === category
                        ? "bg-primary text-white"
                        : "bg-white text-text-muted ring-1 ring-gray-200 hover:bg-primary/5 hover:text-primary"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              {featuredArticle ? (
                <>
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-text-muted">
                      {filteredArticles.length} article
                      {filteredArticles.length === 1 ? "" : "s"} found
                    </p>
                    {searchQuery || activeCategory !== "All Articles" ? (
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery("");
                          setActiveCategory("All Articles");
                        }}
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        Reset filters
                      </button>
                    ) : null}
                  </div>

                  <article className="card-surface mb-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative min-h-[260px]">
                        <Image
                          src={featuredArticle.image}
                          alt={featuredArticle.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      <div className="flex flex-col justify-center p-6 sm:p-8">
                        <span className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                          Featured {featuredArticle.category}
                        </span>
                        <h2 className="mb-3 font-display text-2xl font-bold text-text-main sm:text-3xl">
                          {featuredArticle.title}
                        </h2>
                        <p className="mb-6 text-sm leading-relaxed text-text-muted sm:text-base">
                          {featuredArticle.excerpt}
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="font-semibold text-text-main">
                              {featuredArticle.author}
                            </p>
                            <p className="text-sm text-text-muted">
                              {featuredArticle.date} • {featuredArticle.readTime}
                            </p>
                          </div>
                          <Link
                            href={`/resources/${featuredArticle.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
                          >
                            Read article
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>

                  {remainingArticles.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      {remainingArticles.map((article) => (
                        <article
                          key={article.slug}
                          className="card-surface overflow-hidden"
                        >
                          <div className="relative aspect-[16/10]">
                            <Image
                              src={article.image}
                              alt={article.imageAlt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>

                          <div className="p-5 sm:p-6">
                            <span className="mb-3 inline-flex rounded-full bg-secondary/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-text-main">
                              {article.category}
                            </span>
                            <h3 className="mb-2 font-display text-xl font-bold text-text-main">
                              {article.title}
                            </h3>
                            <p className="mb-5 text-sm leading-relaxed text-text-muted">
                              {article.excerpt}
                            </p>
                            <div className="flex items-center justify-between gap-4">
                              <p className="text-xs text-text-muted">
                                {article.date} • {article.readTime}
                              </p>
                              <Link
                                href={`/resources/${article.slug}`}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                              >
                                Read more
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : (
                    <div className="card-surface p-8 text-center sm:p-10">
                      <BookOpen className="mx-auto mb-4 h-10 w-10 text-primary" />
                      <h2 className="mb-2 font-display text-2xl font-bold text-text-main">
                        No matching articles yet
                      </h2>
                      <p className="mx-auto max-w-xl text-text-muted">
                        Try a broader keyword or switch back to all topics to
                        explore the full library.
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="card-surface p-8 text-center sm:p-10">
                  <BookOpen className="mx-auto mb-4 h-10 w-10 text-primary" />
                  <h2 className="mb-2 font-display text-2xl font-bold text-text-main">
                    The resource library is being refreshed
                  </h2>
                  <p className="mx-auto max-w-xl text-text-muted">
                    Check back soon for new therapist-written articles and
                    practical self-help tools.
                  </p>
                </div>
              )}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:col-span-4">
              <div className="overflow-hidden rounded-3xl bg-primary p-6 text-white shadow-lg sm:p-8">
                <h3 className="mb-3 font-display text-2xl font-bold">
                  Need support beyond articles?
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-white/85 sm:text-base">
                  Reading can help you name what you&apos;re feeling. Therapy
                  helps you work through it with structure, care, and practical
                  tools.
                </p>
                <ul className="mb-6 space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    Online and in-person sessions
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    Therapists for adults, couples, and children
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    Confidential 50-minute appointments
                  </li>
                </ul>
                <Link href="/booking">
                  <Button variant="secondary" className="w-full">
                    Book a Session
                  </Button>
                </Link>
              </div>

              <div className="card-surface p-6 sm:p-8">
                <h3 className="mb-3 font-display text-xl font-bold text-text-main">
                  Browse by topic
                </h3>
                <div className="flex flex-wrap gap-2">
                  {highlightedTopics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setActiveCategory(topic)}
                      className={cn(
                        "rounded-full px-3 py-1.5 text-sm font-medium transition",
                        activeCategory === topic
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary hover:bg-primary/15"
                      )}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div className="card-surface p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-secondary/40 p-3 text-text-main">
                    <MailOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-text-main">
                      Still unsure where to begin?
                    </h3>
                    <p className="text-sm text-text-muted">
                      Tell us what feels heavy right now and we&apos;ll guide you
                      to the right next step.
                    </p>
                  </div>
                </div>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Contact ClearMind
                  </Button>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
