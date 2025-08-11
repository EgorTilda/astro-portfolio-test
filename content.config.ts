// 1. Импортируйте утилиты из `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Импортируйте загрузчик(и)
import { glob, file } from 'astro/loaders';

// 3. Определите свои коллекции
const blog = defineCollection({ 
    loader: glob({pattern: '**/*.md', base: './src/content/blog'}),
    // schema: /* ... */
});
const dogs = defineCollection({ 
    loader: file('src/data/dogs.json'),
    // schema: /* ... */
});

// 4. Экспортируйте объект `collections` для регистрации ваших коллекций
export const collections = { blog, dogs };