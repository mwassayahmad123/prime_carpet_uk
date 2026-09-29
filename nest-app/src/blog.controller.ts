import { Controller, Get, NotFoundException, Param, Render } from '@nestjs/common';
import { buildBlogViewModel, buildBlogPostViewModel } from './view-model';
import { BLOG_POSTS } from './blog-data';

@Controller('blog')
export class BlogController {
  @Get()
  @Render('blog')
  getBlogList() {
    return buildBlogViewModel();
  }

  @Get(':slug')
  @Render('blog-post')
  getBlogPost(@Param('slug') slug: string) {
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) {
      throw new NotFoundException(`Unknown blog post: ${slug}`);
    }
    return buildBlogPostViewModel(post);
  }
}
