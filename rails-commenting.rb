# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Created class BlogPostsController
class BlogPostsController < ApplicationController
  def index
    # ---2) Will return all records from the blog-posts table
    @posts = BlogPost.all
  end

  def show
    # ---3) Will fetch the record where the id column value is the same as provided in the params of the route.
    @post = BlogPost.find(params[:id])
  end

  # ---4) wanting our users to be able to add infromation to our web app that is then stored inthe database
  def new
    @post = Post.new
  end

  def create
    # ---5) create new params for BlogPost
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) return an HTML form for editing a post
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) update post params
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) redirect to path after it is destoryed 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Using a private method to encapsulate the permissible parameters is
    # a good pattern since you'll be able to reuse the same permit
    # list between create and update. Also, you can specialize this method with per-user checking of permissible attributes.
  private
  def blog_post_params
    # ---10) CRUD actions require params to come in from the browser. We are setting up these params to be private and only contain things that we have defined in our model: Title and Content
    params.require(:blog_post).permit(:title, :content)
  end
end
