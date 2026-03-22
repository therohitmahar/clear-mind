import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Clock3,
  Mail,
  UserRound,
} from "lucide-react";
import { blogArticles, therapists } from "@/lib/data";
import { createPageMetadata, toIsoDate } from "@/lib/seo";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const articleContent = {
  "5-ways-manage-racing-thoughts": {
    intro:
      'It often starts as a single worry, but before you know it, your mind is a high-speed freeway of "what-ifs" and past regrets. Racing thoughts can feel overwhelming, but they are a manageable symptom of anxiety and stress. Here is how you can find your center again.',
    sections: [
      {
        title: "1. Use the 5-4-3-2-1 grounding technique",
        content:
          "When your thoughts are stuck in the future or the past, grounding brings you back to the present moment. Notice five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste. This shifts your attention from internal noise to the world around you.",
        quote:
          "Your thoughts are like clouds passing through the sky. You are the sky, not the clouds.",
      },
      {
        title: "2. Give worry a scheduled place",
        content:
          'Trying to suppress anxious thinking often makes it louder. Instead, choose a short daily "worry time." When thoughts spiral at random points in the day, remind yourself that there is a time set aside to come back to them. This helps restore a sense of structure and control.',
      },
      {
        title: "3. Write the loop down",
        content:
          "Journaling or a quick brain dump can ease the pressure your mind feels to keep rehearsing the same fears. Put the thought on paper, name what is triggering it, and write one small next step you can actually take. Externalizing it reduces the loop's intensity.",
      },
      {
        title: "4. Slow your breathing on purpose",
        content:
          "Racing thoughts often travel with a revved-up nervous system. A few rounds of slow diaphragmatic breathing, especially with longer exhales, can signal safety to your body and gently reduce mental urgency.",
      },
      {
        title: "5. Practice acceptance instead of a fight",
        content:
          'Sometimes the distress grows because you are also fighting the fact that you feel distressed. Try saying, "I am having racing thoughts right now, and I can still take this one moment at a time." That shift reduces the second layer of panic.',
      },
    ],
  },
} satisfies Record<
  string,
  {
    intro: string;
    sections: Array<{ title: string; content: string; quote?: string }>;
  }
>;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((entry) => entry.slug === slug);

  if (!article) {
    return createPageMetadata({
      title: "Article Not Found",
      description: "The article you are looking for could not be found.",
      path: "/resources",
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/resources/${article.slug}`,
    imagePath: `/resources/${article.slug}/opengraph-image`,
    twitterImagePath: `/resources/${article.slug}/twitter-image`,
    type: "article",
    publishedTime: toIsoDate(article.date),
    authors: article.author ? [article.author] : undefined,
    section: article.category,
    tags: [article.category, "mental health", "therapy", "ClearMind Counseling"],
    keywords: [article.category, article.title, "ClearMind Counseling articles"],
  });
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = blogArticles.find((entry) => entry.slug === slug);

  if (!article) {
    notFound();
  }

  const author = therapists.find((therapist) =>
    article.author
      ? therapist.name
          .toLowerCase()
          .includes(article.author.split(" ").slice(-1)[0]?.toLowerCase() || "")
      : false
  );
  const relatedArticles = blogArticles
    .filter((entry) => entry.slug !== slug)
    .slice(0, 3);
  const content = articleContent[slug as keyof typeof articleContent];

  return (
    <section className="bg-background-light py-12 sm:py-14 lg:py-16">
      <div className="section-container">
        <div className="mb-8">
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-text-muted">
            <Link href="/resources" className="hover:text-primary">
              Resources
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary">{article.category}</span>
          </nav>
          <span className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {article.category}
          </span>
          <h1 className="mb-4 max-w-4xl font-display text-4xl font-bold leading-tight text-text-main sm:text-5xl">
            {article.title}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-text-muted sm:text-lg">
            {article.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <UserRound className="h-4 w-4 text-primary" />
              <span>{article.author || "ClearMind Team"}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-primary" />
              <span>{article.date || "Updated recently"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-primary" />
              <span>{article.readTime || "5 min read"}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-8">
            <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-3xl shadow-lg sm:aspect-[16/9]">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            <div className="space-y-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              {content ? (
                <>
                  <p className="text-lg leading-relaxed text-text-main sm:text-xl">
                    {content.intro}
                  </p>

                  {content.sections.map((section) => (
                    <section key={section.title} className="space-y-4">
                      <h2 className="font-display text-2xl font-bold text-text-main sm:text-3xl">
                        {section.title}
                      </h2>
                      <p className="leading-relaxed text-text-muted">
                        {section.content}
                      </p>
                      {section.quote ? (
                        <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5 sm:p-6">
                          <p className="font-display text-xl italic leading-relaxed text-text-main">
                            &ldquo;{section.quote}&rdquo;
                          </p>
                        </div>
                      ) : null}
                    </section>
                  ))}
                </>
              ) : (
                <div className="space-y-5">
                  <p className="text-lg leading-relaxed text-text-main sm:text-xl">
                    {article.excerpt}
                  </p>
                  <p className="leading-relaxed text-text-muted">
                    If this topic feels close to home, take one idea from the
                    article and try it consistently for a few days. If the
                    pattern keeps returning or begins affecting work,
                    relationships, sleep, or your sense of safety, professional
                    support can help you understand what is sustaining it and
                    how to respond with more clarity.
                  </p>
                </div>
              )}

              <div className="rounded-2xl bg-secondary/25 p-5 sm:p-6">
                <h2 className="mb-2 font-display text-2xl font-bold text-text-main">
                  When it may be time to seek support
                </h2>
                <p className="text-text-muted">
                  If these thoughts feel relentless, disrupt your sleep, or keep
                  you in a cycle of avoidance and exhaustion, therapy can help
                  you slow the pattern down with tools that are tailored to your
                  life rather than generic advice.
                </p>
              </div>
            </div>

            <section className="mt-10">
              <div className="mb-6 flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="font-display text-2xl font-bold text-text-main">
                  Related articles
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {relatedArticles.map((related) => (
                  <article
                    key={related.slug}
                    className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={related.image}
                        alt={related.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        {related.category}
                      </span>
                      <h3 className="mb-3 font-display text-lg font-bold text-text-main">
                        {related.title}
                      </h3>
                      <Link
                        href={`/resources/${related.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        Read more
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:col-span-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              <h2 className="mb-5 font-display text-2xl font-bold text-text-main">
                About the author
              </h2>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                {author?.image ? (
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      className="object-cover object-top"
                      sizes="80px"
                    />
                  </div>
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <UserRound className="h-8 w-8" />
                  </div>
                )}

                <div>
                  <h3 className="font-display text-xl font-bold text-text-main">
                    {author?.name || article.author || "ClearMind Team"}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-primary">
                    {author?.title || "Mental Health Professional"}
                  </p>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {author?.description.split("\n")[0] ||
                      "A ClearMind therapist focused on practical, compassionate mental health support."}
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-primary p-6 text-white shadow-lg sm:p-8">
              <h2 className="mb-3 font-display text-2xl font-bold">
                Want personal support with this?
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-white/85 sm:text-base">
                Articles can name the pattern. Therapy helps you work through it
                with guidance, accountability, and tools that fit your life.
              </p>
              <Link href="/booking">
                <Button variant="secondary" className="w-full">
                  Book a Session
                </Button>
              </Link>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-secondary/35 p-3 text-text-main">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-text-main">
                    Need help choosing the right therapist?
                  </h2>
                  <p className="text-sm text-text-muted">
                    Reach out and we&apos;ll guide you to the next best step.
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
  );
}
