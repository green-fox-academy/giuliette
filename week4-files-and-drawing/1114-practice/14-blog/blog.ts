// Blog
// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list

// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

import { BlogPost, BlogPostOne, BlogPostThree, BlogPostTwo } from './BlogPost';

class Blog {
  static updatePost(arg0: number, arg1: number, BlogPostFour: any): any {
    throw new Error("Method not implemented.");
  }
  //static idCounter = 1;
  //properties
  listOfBlogPosts: BlogPost[]; //blogpost type elements

  constructor (listOfBlogPosts: BlogPost[]){
    this.listOfBlogPosts = listOfBlogPosts;
  }
  
  removeOutdatedPost(i: number){
    this.listOfBlogPosts.splice(i, 1);
  };

  updatePost(i: number, blogpost: BlogPost){
    this.listOfBlogPosts.splice(i, 1, blogpost);
    return this.listOfBlogPosts;
  };
}
//log old blogposts, to see:
console.log(BlogPostOne);
console.log(BlogPostTwo);
console.log(BlogPostThree);
//create new blog.
const newBlog = new Blog([]);
//blogpost 4
let blogPostFour = new BlogPost ('Zetor Leila', 'pink stuff and fluff', 'Lorem ipsum dolor sit amet.', '2098.12.22.')

newBlog.updatePost(0, blogPostFour);
console.log(newBlog);
