// BlogPost

// Create a BlogPost class that has
// an authorName
// a title
// a text
// a publicationDate
// Create a few blog post objects:

// "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
// Lorem ipsum dolor sit amet.

// "Wait but why" titled by Tim Urban posted at "2010.10.10."
// A popular long-form, stick-figure-illustrated blog about almost everything.

// "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
// Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. 
// When I asked to take his picture outside one of IBM’s New York City offices, 
// he told me that he wasn’t really into the whole organizer profile thing.

export { BlogPost }; 

class BlogPost {
  authorName: string;
  title: string;
  postText: string;
  publicationDate: string;

  constructor(authorName: string, title: string, text: string, date: string) {
    this.authorName = authorName;
    this.title = title;
    this.postText = text;
    this.publicationDate = date;
  }
}

var BlogPostOne = new BlogPost ('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
var BlogPostTwo = new BlogPost ('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
var BlogPostThree = new BlogPost ('William Turton', 'One Engineer Is Trzing to Get IBM to Reckon with Trump', ' Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.')

console.log(BlogPostOne);
console.log(BlogPostTwo);
console.log(BlogPostThree);