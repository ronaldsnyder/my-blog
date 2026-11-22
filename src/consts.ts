export const SITE = {
  title: 'Ron Snyder',
  url: 'https://ronaldsnyder.net',
  description: 'Cooking, travel, what I’m learning, and everyday life.',
  location: 'Fenton, Michigan',
};

export const TOPICS = [
  { name: 'Cooking', slug: 'cooking', blurb: 'Recipes and kitchen experiments', tint: '#2B221B' },
  { name: 'Travel', slug: 'travel', blurb: 'Trips, near and far', tint: '#1A2630' },
  { name: 'Learning', slug: 'learning', blurb: 'Whatever I’m figuring out', tint: '#1F232B' },
  { name: 'Life', slug: 'life', blurb: 'Home, projects, everyday stuff', tint: '#1C2720' },
] as const;

export type TopicName = (typeof TOPICS)[number]['name'];
export const TOPIC_NAMES = TOPICS.map((t) => t.name) as [TopicName, ...TopicName[]];

export function topicFor(name: string) {
  return TOPICS.find((t) => t.name === name) ?? TOPICS[3];
}
