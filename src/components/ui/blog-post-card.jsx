import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Human-friendly read time: seconds -> "X min read"
function formatReadTime(seconds) {
  if (!seconds || seconds < 60) return 'Less than 1 min read';
  const minutes = Math.ceil(seconds / 60);
  return `${minutes} min read`;
}

// Date -> "Aug 15, 2025" (localized but concise)
function formatPostDate(date) {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export const ArticleCard = ({
  cover,
  tag,
  readingTime,
  headline,
  excerpt,
  writer,
  publishedAt,
  clampLines,
}) => {
  const hasMeta = tag || readingTime;
  const hasFooter = writer || publishedAt;

  return (
    <Card className="flex w-full max-w-sm flex-col gap-3 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-3 shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-xl">
      {cover && (
        <CardHeader className="p-0">
          <div className="relative h-56 w-full overflow-hidden rounded-2xl">
            <img
              src={cover}
              alt={headline}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </CardHeader>
      )}

      <CardContent className="flex-grow p-3">
        {hasMeta && (
          <div className="mb-4 flex items-center text-sm text-zinc-400">
            {tag && (
              <Badge className="rounded-full border-0 bg-white/10 px-3 py-1 text-sm text-zinc-300 hover:bg-white/20 hover:text-white">
                {tag}
              </Badge>
            )}
            {tag && readingTime && <span className="mx-2 text-zinc-600">•</span>}
            {readingTime && <span>{formatReadTime(readingTime)}</span>}
          </div>
        )}

        <h2 className="mb-2 text-2xl leading-tight font-bold text-white">{headline}</h2>

        <p
          className={cn('text-zinc-400', {
            '[display:-webkit-box] overflow-hidden text-ellipsis [-webkit-box-orient:vertical]':
              clampLines && clampLines > 0,
          })}
          style={{
            WebkitLineClamp: clampLines,
          }}
        >
          {excerpt}
        </p>
      </CardContent>

      {hasFooter && (
        <CardFooter className="mt-auto flex items-center justify-between border-t border-white/5 p-3">
          {writer && (
            <div>
              <p className="mb-1 text-xs tracking-wider text-zinc-500 uppercase">By</p>
              <p className="text-sm font-medium text-zinc-300">{writer}</p>
            </div>
          )}
          {publishedAt && (
            <div className={writer ? 'text-right' : ''}>
              <p className="mb-1 text-xs tracking-wider text-zinc-500 uppercase">Published</p>
              <p className="text-sm font-medium text-zinc-300">{formatPostDate(publishedAt)}</p>
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
};
